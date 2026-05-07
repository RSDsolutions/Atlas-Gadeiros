import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Asesoría Estratégica', path: '/asesoria-estrategica' },
  { label: 'Búsqueda Ejecutiva', path: '/busqueda-ejecutiva' },
  { label: 'Contacto', path: '/contacto' },
]

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <footer className="bg-on-background w-full py-16 px-6 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center gap-8">
        <div className="font-lexend text-[28px] font-bold text-surface">
          Atlas &amp; Gadeiros Sports Group
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {NAV_LINKS.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              className={`font-work text-[11px] uppercase tracking-widest transition-colors duration-200 ${
                pathname === path
                  ? 'text-secondary-fixed'
                  : 'text-surface-variant hover:text-secondary-container'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="w-full h-px bg-surface-variant/20" />

        <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-3">
          <p className="font-work text-[15px] text-surface-variant">
            © 2024 Atlas &amp; Gadeiros Sports Group. Londres / Lisboa.
          </p>
          <a
            href="mailto:office@atlasgadeiros.com"
            className="font-work text-[15px] text-surface-variant hover:text-secondary-container transition-colors duration-200"
          >
            office@atlasgadeiros.com
          </a>
        </div>
      </div>
    </footer>
  )
}
