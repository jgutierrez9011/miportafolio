# miportafolio

## Desarrollo

Usa `pnpm` en lugar de `npm` para este proyecto:

```bash
pnpm install
pnpm dev
```

Si `pnpm` no está instalado en tu equipo, puedes usar `corepack` o instalarlo de forma global con `npm install -g pnpm`.

En Windows, si `pnpm` termina apuntando al shim de `corepack` y falla la verificación de firma, usa este fallback:

```powershell
npm install -g pnpm --force
& "$env:APPDATA\npm\pnpm.cmd" install
& "$env:APPDATA\npm\pnpm.cmd" dev
```
