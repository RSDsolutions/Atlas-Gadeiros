import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuArzdgTb9yiSPIjjwF2GMfo49aF68G-IZ4XNYWUq-8eRbNSSCCOVBh4d-3JObZA_oqeQzkdtzzrBZB0fVV10AOAhy0zY5WuTWEG6PAXD9--io9PkXyfLguaOYazog87erH56clXsNMgEQzOTMcG_MxWgwrgg4TWAJsfzTigsyQ_zWKdaDke7f5s9K6zwKM42AYuSzE63Df2A6TBvmEzIHPelsVohfgPUN7nJrZS8SXK969hFvHoBp9jJxBlskD8t-hQ82FI1ER7RIU"

const PAGE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const SERVICES = [
  {
    icon: 'sports_soccer',
    title: 'Asesoría en Fútbol',
    desc: 'Estrategias técnicas y operativas para maximizar el rendimiento deportivo y optimizar la estructura de las academias y el primer equipo.',
    path: '/servicios',
  },
  {
    icon: 'analytics',
    title: 'Consultoría Deportiva',
    desc: 'Análisis de datos, inteligencia de mercado y evaluación de inversiones para garantizar decisiones estratégicas respaldadas por información precisa.',
    path: '/servicios',
  },
  {
    icon: 'corporate_fare',
    title: 'Gestión Deportiva',
    desc: 'Administración integral de activos, desarrollo comercial y reestructuración corporativa para entidades futbolísticas de alto nivel.',
    path: '/servicios',
  },
]

const PILLARS = [
  'Expertos Multidisciplinarios',
  'Enfoque Orientado a Resultados',
  'Visión Global del Fútbol',
]

export default function Inicio() {
  return (
    <motion.div variants={PAGE} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <header
        className="relative min-h-[92vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,26,64,0.82), rgba(0,26,64,0.96)), url('${HERO_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* animated background zoom */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          style={{
            backgroundImage: `url('${HERO_BG}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
        <div className="absolute inset-0 bg-navy/85 z-[1]" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-16 w-full">
          <div className="flex flex-col gap-7 max-w-4xl">

            {/* gold line */}
            <motion.div
              className="h-1 bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            />

            {/* title */}
            <motion.h1
              className="font-lexend text-[42px] sm:text-[54px] md:text-[68px] lg:text-display-xl font-extrabold text-white leading-[1.1] tracking-[0.03em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
            >
              ASESORÍA Y GESTIÓN ÉLITE EN FÚTBOL
            </motion.h1>

            {/* subtitle */}
            <motion.p
              className="font-work text-[17px] md:text-body-lg text-surface-variant max-w-2xl border-l-2 border-gold pl-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            >
              Un equipo de especialistas que ofrece consultoría estratégica y gestión experta
              para clubes, atletas y organizaciones de fútbol.
            </motion.p>

            {/* buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72, ease: 'easeOut' }}
            >
              <Link
                to="/servicios"
                className="bg-gold text-navy px-8 py-4 font-work text-[11px] font-semibold uppercase tracking-widest border border-gold hover:bg-transparent hover:text-gold transition-all duration-300"
              >
                NUESTROS SERVICIOS
              </Link>
              <Link
                to="/contacto"
                className="bg-transparent text-white px-8 py-4 font-work text-[11px] font-semibold uppercase tracking-widest border border-white hover:bg-white hover:text-navy transition-all duration-300"
              >
                CONTÁCTENOS
              </Link>
            </motion.div>
          </div>
        </div>

        {/* bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10" />
      </header>

      {/* ── ABOUT STRIP ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            <motion.div
              className="lg:col-span-4 flex flex-col gap-4 border-t-2 border-outline/20 pt-5"
              {...FADE_UP(0)}
            >
              <span className="font-work text-label-sm text-secondary uppercase tracking-widest">
                QUIÉNES SOMOS
              </span>
              <h2 className="font-lexend text-[40px] md:text-headline-lg font-bold text-on-surface">
                EL ESTÁNDAR DE EXCELENCIA
              </h2>
            </motion.div>

            <motion.div
              className="lg:col-span-8 flex flex-col gap-8 pt-5"
              {...FADE_UP(0.15)}
            >
              <div className="grid md:grid-cols-2 gap-6 text-on-surface-variant text-[16px] md:text-body-lg leading-relaxed">
                <p>
                  En Atlas &amp; Gadeiros Sports Group, definimos el estándar de la gestión
                  deportiva en el más alto nivel competitivo. Nuestra firma nació de la
                  necesidad de aportar rigor analítico, visión corporativa y una ejecución
                  impecable al mundo del fútbol profesional.
                </p>
                <p>
                  Operamos en la intersección entre el rendimiento deportivo y el éxito
                  financiero, asesorando a propiedades deportivas globales con estrategias
                  probadas y un entendimiento profundo de la dinámica del mercado moderno.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-outline/20">
                {PILLARS.map((item, i) => (
                  <motion.div
                    key={item}
                    className="flex flex-col gap-2"
                    {...FADE_UP(0.08 * (i + 1))}
                  >
                    <span className="font-lexend text-headline-md font-bold text-gold">
                      0{i + 1}
                    </span>
                    <h3 className="font-work text-label-sm uppercase tracking-wider text-on-surface">
                      {item}
                    </h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className="py-20 bg-surface-bright">
        <div className="max-w-[1280px] mx-auto px-6 md:px-16">
          <motion.div
            className="flex flex-col items-center text-center mb-16 border-b border-outline/20 pb-8"
            {...FADE_UP(0)}
          >
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface">
              DISCIPLINAS PRINCIPALES
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((card, i) => (
              <motion.div
                key={card.title}
                className="bg-white border border-outline-variant/50 p-8 flex flex-col gap-4 relative group"
                {...FADE_UP(0.1 * (i + 1))}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* gold top bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

                <motion.div
                  className="absolute top-0 left-0 right-0 h-1 bg-secondary"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <span className="material-symbols-outlined text-[40px] text-secondary">
                  {card.icon}
                </span>
                <h3 className="font-lexend text-headline-md font-bold text-navy">
                  {card.title}
                </h3>
                <p className="font-work text-body-md text-on-surface-variant flex-grow">
                  {card.desc}
                </p>
                <div className="border-t border-outline/20 pt-4 flex justify-between items-center">
                  <Link
                    to={card.path}
                    className="font-work text-label-sm uppercase tracking-widest text-secondary hover:text-navy transition-colors"
                  >
                    Explorar
                  </Link>
                  <span className="material-symbols-outlined text-gold">arrow_forward</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="bg-navy py-20 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.h2
            className="font-lexend text-[32px] md:text-headline-lg font-bold text-white text-center md:text-left"
            {...FADE_UP(0)}
          >
            ¿Listo para elevar su operación?
          </motion.h2>
          <motion.div {...FADE_UP(0.2)}>
            <Link
              to="/contacto"
              className="inline-block bg-gold text-navy px-8 py-4 font-work text-[11px] font-semibold uppercase tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              INICIAR DIÁLOGO
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
