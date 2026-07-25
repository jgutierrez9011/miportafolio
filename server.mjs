import { createServer } from 'node:http'
import { existsSync, statSync, createReadStream } from 'node:fs'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const distDir = path.join(__dirname, 'dist')
const port = Number.parseInt(process.env.PORT ?? '3000', 10)
const host = process.env.HOST ?? '0.0.0.0'

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.woff2': 'font/woff2',
}

function resolvePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0])
  const normalized = path.normalize(decoded).replace(/^([/\\])+/, '')
  const candidate = path.join(distDir, normalized)
  const resolved = path.resolve(candidate)

  const relative = path.relative(path.resolve(distDir), resolved)
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    return null
  }

  return resolved
}

function sendFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase()
  res.setHeader('Content-Type', mimeTypes[ext] ?? 'application/octet-stream')
  createReadStream(filePath).pipe(res)
}

const server = createServer(async (req, res) => {
  try {
    if (!req.url) {
      res.statusCode = 400
      res.end('Bad Request')
      return
    }

    const urlPath = req.url === '/' ? '/index.html' : req.url
    const filePath = resolvePath(urlPath)

    if (filePath && existsSync(filePath) && statSync(filePath).isFile()) {
      res.statusCode = 200
      sendFile(res, filePath)
      return
    }

    if (urlPath.includes('.') && filePath) {
      res.statusCode = 404
      res.end('Not Found')
      return
    }

    const indexPath = path.join(distDir, 'index.html')
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(await readFile(indexPath, 'utf8'))
  } catch (error) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Internal Server Error')
    console.error(error)
  }
})

server.listen(port, host, () => {
  console.log(`Static server running on http://${host}:${port}`)
})
