import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const PAGE = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const FU = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const PRINCIPIOS = [
  { label: 'Rigor Analítico', desc: 'Decisiones basadas en datos comprobables e inteligencia de mercado actualizada.' },
  { label: 'Visión Integral', desc: 'Alineación de objetivos deportivos, financieros y de marca institucional.' },
  { label: 'Ejecución Táctica', desc: 'Planes de acción concretos, medibles y adaptables a contextos cambiantes.' },
]

const AREAS = [
  { icon: 'account_tree', title: 'Estructuración de Clubes', desc: 'Diseño y optimización de organigramas deportivos, modelos de gobernanza y procesos internos para maximizar la eficiencia operativa e institucional.' },
  { icon: 'swap_horiz', title: 'Estrategia de Transferencias', desc: 'Análisis de mercado, valoración de activos y planificación de plantillas para asegurar un balance óptimo entre rendimiento deportivo y sostenibilidad financiera.' },
  { icon: 'groups', title: 'Asesoría de Cuerpo Técnico', desc: 'Evaluación de perfiles de liderazgo, metodologías de entrenamiento y gestión de talento para alinear la dirección técnica con la visión estratégica del club.' },
  { icon: 'public', title: 'Posicionamiento Comercial', desc: 'Desarrollo de identidad de marca global, estrategias de internacionalización e identificación de oportunidades de patrocinio de alto valor.' },
]

const PERFILES = [
  { title: 'Clubes de Fútbol', desc: 'Apoyo integral para juntas directivas y direcciones deportivas en la reestructuración organizativa, planificación de plantillas y auditoría de procesos internos.' },
  { title: 'Atletas Individuales', desc: 'Orientación en planificación de carrera a largo plazo, transición post-retiro y desarrollo de marca personal para maximizar el legado dentro y fuera del campo.' },
  { title: 'Grupos Inversores', desc: 'Due diligence deportivo, evaluación de modelos de negocio en adquisiciones de clubes y estrategias de rentabilidad para portafolios multi-club.' },
]

export default function AsesoriaEstrategica() {
  return (
    <motion.div variants={PAGE} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <header className="bg-navy text-on-secondary py-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_#e5e2e1,_transparent)]" />
        <div className="max-w-[1280px] mx-auto relative z-10">
          <motion.div
            className="h-1 bg-gold mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          />
          <motion.h1
            className="font-lexend text-[42px] sm:text-[56px] md:text-display-xl font-extrabold max-w-4xl"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            ASESORÍA ESTRATÉGICA
          </motion.h1>
          <motion.p
            className="font-work text-body-lg text-surface-variant max-w-2xl mt-5"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            Orientación de alto nivel para actores del fútbol profesional, enfocada en la
            optimización de rendimiento, estructura y posicionamiento en el mercado global.
          </motion.p>
        </div>
      </header>

      {/* ── PRECISIÓN EN DECISIONES ─────────────────────────────── */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Text */}
          <motion.div className="lg:col-span-6 flex flex-col gap-5" {...FU(0)}>
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface">
              Precisión en la Toma de Decisiones
            </h2>
            <p className="font-work text-body-lg text-on-surface-variant">
              Nuestra asesoría estratégica está diseñada para resolver los desafíos más complejos
              del entorno deportivo actual. Proveemos a clubes, inversores y profesionales de élite
              con análisis fundamentados, marcos metodológicos rigurosos y una visión global del
              ecosistema del fútbol.
            </p>
            <p className="font-work text-body-lg text-on-surface-variant">
              Transformamos datos y experiencia en estrategias ejecutables que aseguran ventaja
              competitiva y crecimiento sostenible a largo plazo.
            </p>
          </motion.div>

          {/* Principles card */}
          <motion.div
            className="lg:col-span-5 lg:col-start-8 bg-navy text-on-secondary p-8 relative border border-outline-variant/20"
            {...FU(0.15)}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
            <h3 className="font-lexend text-headline-md font-bold mb-7">Principios de Asesoría</h3>
            <ul className="flex flex-col gap-5">
              {PRINCIPIOS.map(({ label, desc }, i) => (
                <motion.li
                  key={label}
                  className="flex items-start gap-4 pb-5 border-b border-surface-variant/20 last:border-b-0 last:pb-0"
                  {...FU(0.1 * (i + 1))}
                >
                  <span
                    className="material-symbols-outlined text-gold mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                  <div>
                    <h4 className="font-work text-label-sm uppercase tracking-widest text-gold mb-1">
                      {label}
                    </h4>
                    <p className="font-work text-body-md text-surface-variant">{desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── ÁREAS DE ESPECIALIZACIÓN ────────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-16 border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="flex flex-col items-center text-center mb-14 gap-4" {...FU(0)}>
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface">
              Áreas de Especialización
            </h2>
            <div className="h-px w-24 bg-navy" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AREAS.map((area, i) => (
              <motion.div
                key={area.title}
                className="bg-navy text-on-secondary p-8 border border-outline-variant/20 relative group cursor-default"
                {...FU(0.1 * (i + 1))}
                whileHover={{ backgroundColor: '#425e91', transition: { duration: 0.3 } }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                <span
                  className="material-symbols-outlined text-[40px] mb-4 text-gold block"
                  style={{ fontVariationSettings: "'wght' 300" }}
                >
                  {area.icon}
                </span>
                <h3 className="font-lexend text-headline-md font-bold mb-3">{area.title}</h3>
                <p className="font-work text-body-md text-surface-variant">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A QUIÉN SERVIMOS ────────────────────────────────────── */}
      <section className="bg-surface-container-low py-20 px-6 md:px-16 border-t border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="mb-12 flex flex-col gap-4" {...FU(0)}>
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface">
              A Quién Servimos
            </h2>
            <p className="font-work text-body-lg text-on-surface-variant max-w-2xl">
              Soluciones a medida diseñadas para las exigencias específicas de los principales
              actores de la industria.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PERFILES.map((p, i) => (
              <motion.div
                key={p.title}
                className="bg-white p-8 border border-outline-variant/20 relative"
                {...FU(0.1 * (i + 1))}
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                <h3 className="font-lexend text-headline-md font-bold text-on-surface mb-3">
                  {p.title}
                </h3>
                <div className="h-px w-full bg-outline-variant/30 mb-4" />
                <p className="font-work text-body-md text-on-surface-variant">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCRECIÓN ──────────────────────────────────────────── */}
      <motion.section
        className="bg-navy text-on-secondary py-10 px-6 md:px-16 border-y border-gold/30"
        {...FU(0)}
      >
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-gold text-[32px]"
              style={{ fontVariationSettings: "'wght' 300" }}
            >
              lock
            </span>
            <h3 className="font-lexend text-headline-md font-bold">Máxima Discreción Profesional</h3>
          </div>
          <p className="font-work text-body-md text-surface-variant max-w-xl text-left md:text-right">
            Operamos bajo estrictos protocolos de confidencialidad (NDA). La privacidad de
            nuestros clientes y la sensibilidad de la información estratégica son pilares
            innegociables de nuestra práctica.
          </p>
        </div>
      </motion.section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center gap-5">
          <motion.h2
            className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface"
            {...FU(0)}
          >
            Eleve su Ventaja Competitiva
          </motion.h2>
          <motion.p
            className="font-work text-body-lg text-on-surface-variant max-w-xl"
            {...FU(0.1)}
          >
            Programe una consulta confidencial para discutir las necesidades estratégicas de su organización.
          </motion.p>
          <motion.div {...FU(0.2)}>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center bg-white text-on-surface font-work text-label-sm font-semibold py-4 px-8 border-b-2 border-gold hover:bg-surface-container-low transition-colors uppercase tracking-widest"
            >
              COMENZAR SU ASESORÍA
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
