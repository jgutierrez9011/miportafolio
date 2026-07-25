import { useState } from 'react'
import portfolioPhoto from './img/Foto_portafolio.png'

// ─── Icons ───────────────────────────────────────────────────────────────────

function IconAnalysis() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="10" height="10" rx="2" stroke="#2563eb" strokeWidth="1.8"/>
      <rect x="15" y="3" width="10" height="10" rx="2" stroke="#2563eb" strokeWidth="1.8"/>
      <rect x="3" y="15" width="10" height="10" rx="2" stroke="#2563eb" strokeWidth="1.8"/>
      <path d="M15 20h10M20 15v10" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function IconDev() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="24" height="18" rx="2.5" stroke="#2563eb" strokeWidth="1.8"/>
      <path d="M9 11l-3 3 3 3M19 11l3 3-3 3" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 10l-2 8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  )
}

function IconImprovement() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 21l6-6 4 4 8-10" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="21" cy="7" r="3" stroke="#2563eb" strokeWidth="1.8"/>
    </svg>
  )
}

function IconDatabase() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="14" cy="8" rx="9" ry="4" stroke="#2563eb" strokeWidth="1.8"/>
      <path d="M5 8v6c0 2.21 4.03 4 9 4s9-1.79 9-4V8" stroke="#2563eb" strokeWidth="1.8"/>
      <path d="M5 14v6c0 2.21 4.03 4 9 4s9-1.79 9-4v-6" stroke="#2563eb" strokeWidth="1.8"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="M22 7l-10 7L2 7"/>
    </svg>
  )
}

function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

// ─── Tech Badge ───────────────────────────────────────────────────────────────

const techStack = [
  { name: 'Java', color: '#e84136' },
  { name: 'Python', color: '#3776ab' },
  { name: 'React', color: '#61dafb' },
  { name: 'Oracle DB', color: '#f80000' },
  { name: 'SQL Server', color: '#cc2927' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MySQL', color: '#4479a1' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'Kubernetes', color: '#326ce5' },
  { name: 'GitHub', color: '#24292f' },
]

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <IconAnalysis />,
    title: 'Análisis y diseño de sistemas',
    desc: 'Levantamiento de requerimientos, modelado de procesos y diseño de arquitecturas adaptadas a cada negocio.',
  },
  {
    icon: <IconDev />,
    title: 'Desarrollo de aplicaciones web',
    desc: 'Construcción de sistemas desde cero con tecnologías modernas, seguras y escalables.',
  },
  {
    icon: <IconImprovement />,
    title: 'Mejoras de sistemas existentes',
    desc: 'Refactorización, corrección de errores y optimización de rendimiento en aplicaciones legadas.',
  },
  {
    icon: <IconDatabase />,
    title: 'Diseño y optimización de bases de datos',
    desc: 'Modelado relacional, normalización, índices y consultas optimizadas para máximo rendimiento.',
  },
]

const projects = [
  {
    img: 'https://prestamos-production-cf2d.up.railway.app/pages/usuarios/login.php',
    name: 'Sistema de Gestión de Préstamos',
    problem: 'Automatización del ciclo completo de préstamos, eliminando registros manuales en papel y reduciendo tiempos de aprobación en un 70 %.',
    techs: ['PHP', 'JavaScript', 'PostgreSQL', 'Bootstrap'],
  },
  {
    img: 'https://puntodeventa-production-4c54.up.railway.app/page/login.php',
    name: 'Sistema de punto de venta para sucursales',
    problem: 'Gestión centralizada de pedidos, usuarios y roles para una empresa distribuidora con múltiples sucursales.',
    techs: ['PHP', 'JavaScript', 'PostgreSQL', 'Bootstrap'],
  },
  {
    img: 'https://tienda-online-react-7qm72p4a0-asdfs-projects-5a628ebd.vercel.app/',
    name: 'Plataforma de Expedientes Clínicos',
    problem: 'Digitalización de historias clínicas y agendamiento de citas médicas para clínicas privadas.',
    techs: ['React', 'Java', 'PostgreSQL', 'Kubernetes'],
  },
]

const steps = [
  {
    num: '01',
    title: 'Comprender',
    desc: 'Escucho el negocio, mapeo los procesos actuales e identifico los puntos de dolor reales.',
  },
  {
    num: '02',
    title: 'Proponer',
    desc: 'Diseño una arquitectura clara, estimo tiempos y presento una propuesta funcional.',
  },
  {
    num: '03',
    title: 'Desarrollar',
    desc: 'Construyo por iteraciones, con entregas frecuentes y comunicación constante.',
  },
  {
    num: '04',
    title: 'Entregar y acompañar',
    desc: 'Despliego la solución, capacito al equipo y ofrezco soporte post-lanzamiento.',
  },
]

const articles = [
  {
    img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=600&h=360&fit=crop&auto=format',
    category: 'Arquitectura',
    title: 'Cómo diseñar una base de datos que escale con tu negocio',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=600&h=360&fit=crop&auto=format',
    category: 'Buenas prácticas',
    title: 'Migrando un sistema legado sin detener la operación',
    href: '#',
  },
  {
    img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=600&h=360&fit=crop&auto=format',
    category: 'Seguridad',
    title: 'Autenticación segura en aplicaciones web con Java y JWT',
    href: '#',
  },
]

// ─── Nav ──────────────────────────────────────────────────────────────────────

function Nav() {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Contacto', href: '#contacto' },
  ]
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg text-[#0f172a] tracking-tight">
          JG<span className="text-[#2563eb]">.</span>
        </span>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#475569] hover:text-[#2563eb] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-4 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded-lg hover:bg-[#1d4ed8] transition-colors duration-200"
          >
            Hablemos
          </a>
        </nav>
        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-[#475569] hover:bg-slate-100"
          onClick={() => setOpen(v => !v)}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {open ? (
              <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-6 py-4 flex flex-col gap-3">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-[#475569] hover:text-[#2563eb] py-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-1 px-4 py-2 bg-[#2563eb] text-white text-sm font-semibold rounded-lg text-center hover:bg-[#1d4ed8] transition-colors"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 pt-12 pb-20">
      <div className="rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden shadow-sm">
        <div className="flex flex-col-reverse lg:flex-row">
          {/* Text side */}
          <div className="flex-1 p-10 lg:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 mb-5 w-fit px-3 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe]">
              <span className="w-2 h-2 rounded-full bg-[#2563eb] animate-pulse"></span>
              <span className="text-xs font-semibold text-[#2563eb] tracking-wide uppercase">Disponible para proyectos</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-[#0f172a] leading-[1.15] tracking-tight mb-3">
              Jhonny<br />Gutiérrez
            </h1>
            <p className="text-base font-semibold text-[#2563eb] mb-5 tracking-wide uppercase">
              Analista y desarrollador de software
            </p>
            <p className="text-lg text-[#1e293b] font-medium leading-relaxed mb-4 max-w-[480px]">
              Transformo procesos empresariales en soluciones web funcionales, seguras y fáciles de mantener.
            </p>
            <p className="text-[15px] text-[#64748b] leading-relaxed mb-10 max-w-[460px]">
              Desarrollo aplicaciones desde cero, mejoro sistemas existentes y diseño bases de datos adaptadas a las necesidades de cada negocio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contacto"
                className="px-6 py-3 bg-[#2563eb] text-white text-sm font-semibold rounded-xl hover:bg-[#1d4ed8] transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Hablemos de tu proyecto
              </a>
              <a
                href="#proyectos"
                className="px-6 py-3 border border-[#e2e8f0] text-[#0f172a] text-sm font-semibold rounded-xl hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-200"
              >
                Ver mis proyectos
              </a>
            </div>
          </div>
          {/* Photo side */}
          <div className="lg:w-[360px] min-h-[280px] lg:min-h-0 bg-[#f1f5f9] flex-shrink-0">
            <img
              src={portfolioPhoto}
              alt="Jhonny Gutiérrez — Analista y desarrollador de software"
              className="w-full h-full object-contain object-center bg-white"
              style={{ minHeight: '300px' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services ─────────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="servicios" className="max-w-[1200px] mx-auto px-6 pb-20">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-3">Lo que hago</p>
        <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">Servicios</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map(s => (
          <div
            key={s.title}
            className="group p-7 rounded-2xl border border-[#e2e8f0] bg-white hover:border-[#2563eb] hover:shadow-lg transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-5 group-hover:bg-[#dbeafe] transition-colors duration-300">
              {s.icon}
            </div>
            <h3 className="text-[15px] font-bold text-[#0f172a] mb-2 leading-snug">{s.title}</h3>
            <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── Projects ─────────────────────────────────────────────────────────────────

function Projects() {
  return (
    <section id="proyectos" className="bg-[#f8fafc] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-3">Trabajo reciente</p>
          <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">Proyectos destacados</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <article
              key={p.name}
              className="group rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 bg-[#e2e8f0] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[16px] font-bold text-[#0f172a] mb-2 leading-snug">{p.name}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{p.problem}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.techs.map(t => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#f1f5f9] text-xs font-semibold text-[#475569]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb] hover:text-[#1d4ed8] group/link transition-colors"
                >
                  Ver caso de estudio
                  <span className="group-hover/link:translate-x-1 transition-transform duration-200">
                    <IconArrow />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Process ──────────────────────────────────────────────────────────────────

function Process() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-3">Mi metodología</p>
        <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">Cómo trabajo</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <div key={s.title} className="relative p-7 rounded-2xl border border-[#e2e8f0] bg-white">
            {/* Connector line (desktop) */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-[3.5rem] right-0 translate-x-1/2 z-10 w-5 h-px bg-[#cbd5e1]" />
            )}
            <span className="block text-4xl font-extrabold text-[#eff6ff] tracking-tighter mb-3 select-none">
              {s.num}
            </span>
            <h3 className="text-[15px] font-bold text-[#0f172a] mb-2">{s.title}</h3>
            <p className="text-sm text-[#64748b] leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="sobre-mi" className="bg-[#0f172a] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#60a5fa] mb-3">Sobre mí</p>
            <h2 className="text-3xl font-extrabold text-white tracking-tight mb-6">
              Soluciones reales para<br />negocios reales
            </h2>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Soy un analista y desarrollador de software con más de 5 años de experiencia construyendo sistemas para empresas de diferentes sectores. Me especializo en entender la operación del negocio antes de escribir una sola línea de código.
            </p>
            <p className="text-[#94a3b8] leading-relaxed mb-4">
              Trabajo principalmente con Java, Python y React en el stack de aplicaciones, y tengo amplia experiencia con bases de datos relacionales como Oracle, SQL Server y PostgreSQL. Creo en el software bien documentado, seguro y fácil de mantener.
            </p>
            <p className="text-[#94a3b8] leading-relaxed">
              Si tienes un proceso manual que quieres digitalizar, o un sistema que necesita mejorar — hablemos.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#64748b] uppercase tracking-widest mb-5">Stack tecnológico</p>
            <div className="flex flex-wrap gap-3">
              {techStack.map(t => (
                <div
                  key={t.name}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1e293b] border border-[#334155] hover:border-[#475569] transition-colors duration-200"
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  />
                  <span className="text-sm font-semibold text-[#e2e8f0]">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Articles ─────────────────────────────────────────────────────────────────

function Articles() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-20">
      <div className="mb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-[#2563eb] mb-3">Conocimiento compartido</p>
        <h2 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">Artículos y recursos</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map(a => (
          <a
            key={a.title}
            href={a.href}
            className="group block rounded-2xl border border-[#e2e8f0] bg-white overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="h-44 bg-[#e2e8f0] overflow-hidden">
              <img
                src={a.img}
                alt={a.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <span className="inline-block px-2.5 py-1 rounded-md bg-[#eff6ff] text-[#2563eb] text-xs font-bold uppercase tracking-wide mb-3">
                {a.category}
              </span>
              <h3 className="text-[15px] font-bold text-[#0f172a] leading-snug mb-4 group-hover:text-[#2563eb] transition-colors duration-200">
                {a.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563eb]">
                Leer artículo <IconArrow />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contacto" className="bg-[#f8fafc] py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="rounded-2xl border border-[#e2e8f0] bg-white p-10 lg:p-16 text-center max-w-[800px] mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-[#eff6ff] border border-[#bfdbfe]">
            <span className="text-xs font-semibold text-[#2563eb] tracking-wide uppercase">Trabajemos juntos</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
            ¿Tienes un proceso que deseas digitalizar<br className="hidden lg:block" /> o un sistema que necesita mejorar?
          </h2>
          <p className="text-[#64748b] leading-relaxed mb-10 max-w-[520px] mx-auto">
            Cuéntame sobre el desafío que enfrentas. Analizo tu situación sin costo y te propongo un camino claro hacia la solución.
          </p>
          <a
            href="mailto:jhonny@ejemplo.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563eb] text-white text-sm font-bold rounded-xl hover:bg-[#1d4ed8] transition-all duration-200 shadow-sm hover:shadow-lg hover:-translate-y-0.5 mb-10"
          >
            Cuéntame sobre tu proyecto
          </a>
          <div className="border-t border-[#f1f5f9] pt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-[#e2e8f0] text-[#475569] text-sm font-semibold hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-200"
            >
              <IconLinkedIn /> LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-[#e2e8f0] text-[#475569] text-sm font-semibold hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-200"
            >
              <IconGitHub /> GitHub
            </a>
            <a
              href="mailto:jhonny@ejemplo.com"
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-[#e2e8f0] text-[#475569] text-sm font-semibold hover:border-[#2563eb] hover:text-[#2563eb] transition-all duration-200"
            >
              <IconMail /> Correo electrónico
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0] py-8">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <span className="font-bold text-[#0f172a]">
          JG<span className="text-[#2563eb]">.</span>
        </span>
        <p className="text-sm text-[#94a3b8]">
          © {new Date().getFullYear()} Jhonny Gutiérrez · Analista y desarrollador de software
        </p>
      </div>
    </footer>
  )
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
