import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const LOGO =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAfGEtcUAoWh2NiVVqviQvfBkNcUMpQBgM3JBClV14Iydrdt_UoRognR6Sjvl-07pd-k_Jt_jjM61RjRMABc5xVZsxY6QXFxahVqd9bPJ31AXp5xuDKv4ChfKby_P2zdcBJiU14dVeX4ewBD9NKf4gelij4kDjeSd6Ude57WsaCY59KaGt3d_NQV485OrXSfqqxwBurs3w0fcXEsyIRKOyiWKFZcIEBjYi_fcQLndzesEw6M88iF74687UW7K4yC0Y2xInfn43ZOGc'

const NAV_LINKS = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Asesoría Estratégica', path: '/asesoria-estrategica' },
  { label: 'Búsqueda Ejecutiva', path: '/busqueda-ejecutiva' },
  { label: 'Contacto', path: '/contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav
      className={`bg-surface sticky top-0 z-50 border-b border-outline-variant/20 transition-all duration-300 ${
        scrolled ? 'shadow-[0_2px_16px_rgba(0,26,64,0.10)]' : ''
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1280px] mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={LOGO} alt="Atlas & Gadeiros Logo" className="h-11 w-11 object-contain" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-5 xl:gap-7">
          {NAV_LINKS.map(({ label, path }) => {
            const active = location.pathname === path
            return (
              <Link
                key={path}
                to={path}
                className={`font-work text-[11px] font-semibold uppercase tracking-widest transition-colors duration-200 whitespace-nowrap ${
                  active
                    ? 'text-secondary border-b-2 border-secondary pb-0.5'
                    : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* CTA */}
        <Link
          to="/contacto"
          className="hidden md:block bg-secondary text-on-secondary px-5 py-2.5 font-work text-[11px] font-semibold uppercase tracking-wider hover:bg-navy transition-colors duration-200 shrink-0 ml-2"
        >
          CONSULTAR
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-on-surface p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span className="material-symbols-outlined text-[28px]">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-surface border-t border-outline-variant/20"
          >
            <div className="flex flex-col px-6 py-5 gap-1">
              {NAV_LINKS.map(({ label, path }) => {
                const active = location.pathname === path
                return (
                  <Link
                    key={path}
                    to={path}
                    className={`font-work text-[12px] font-semibold uppercase tracking-widest py-3 border-b border-outline-variant/20 transition-colors duration-200 ${
                      active ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'
                    }`}
                  >
                    {label}
                  </Link>
                )
              })}
              <Link
                to="/contacto"
                className="mt-3 bg-secondary text-on-secondary px-6 py-3 text-center font-work text-[11px] font-semibold uppercase tracking-wider"
              >
                CONSULTAR
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
