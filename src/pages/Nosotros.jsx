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

const VALORES = [
  { pilar: 'Pilar I', nombre: 'Discreción' },
  { pilar: 'Pilar II', nombre: 'Precisión' },
  { pilar: 'Pilar III', nombre: 'Lealtad' },
  { pilar: 'Pilar IV', nombre: 'Excelencia' },
]

const ESPECIALISTAS = [
  { icon: 'person', name: 'Especialista I', role: 'Estrategia Corporativa', desc: 'Experiencia en reestructuración de juntas directivas y gobernanza en clubes de primera división.' },
  { icon: 'manage_accounts', name: 'Especialista II', role: 'Operaciones Deportivas', desc: 'Optimización de departamentos técnicos y metodologías de rendimiento en la élite.' },
  { icon: 'insights', name: 'Especialista III', role: 'Análisis de Mercado', desc: 'Inteligencia de mercado y auditoría de carteras de inversión deportiva a nivel global.' },
]

const PASOS = [
  { num: '01', title: 'Diagnóstico', desc: 'Auditoría profunda e independiente de las estructuras actuales.' },
  { num: '02', title: 'Estrategia', desc: 'Diseño de una hoja de ruta calibrada a objetivos institucionales.' },
  { num: '03', title: 'Ejecución', desc: 'Implementación táctica con monitoreo de rendimiento continuo.' },
]

export default function Nosotros() {
  return (
    <motion.div variants={PAGE} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <header className="bg-secondary text-on-secondary py-24 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.h1
            className="font-lexend text-[48px] sm:text-[60px] md:text-display-xl font-extrabold tracking-[0.04em]"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            QUIÉNES SOMOS
          </motion.h1>
          <motion.p
            className="font-work text-body-lg max-w-2xl opacity-90 border-l-2 border-white/40 pl-5 mt-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          >
            Una firma de asesoría discreta que opera en los más altos niveles del fútbol profesional.
          </motion.p>
        </div>
      </header>

      {/* ── FILOSOFÍA + VALORES ─────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Filosofía */}
          <motion.div className="md:col-span-7 space-y-6" {...FU(0)}>
            <h2 className="font-lexend text-[40px] md:text-headline-lg font-bold text-on-background">
              Filosofía
            </h2>
            <div className="space-y-4 text-on-surface-variant text-body-md leading-relaxed">
              <p>
                En Atlas &amp; Gadeiros, entendemos que el éxito en la cúspide del deporte global
                requiere más que visión; exige una ejecución meticulosa y un entendimiento profundo
                de dinámicas institucionales complejas. Operamos en la intersección de la estrategia
                corporativa y el rendimiento deportivo.
              </p>
              <p>
                Nuestra metodología se basa en la absoluta confidencialidad y el rigor analítico.
                Asesoramos a propietarios, juntas directivas y altos ejecutivos en la toma de
                decisiones críticas que definen el futuro de sus organizaciones.
              </p>
              <p>
                Rechazamos la exposición innecesaria a favor de resultados tangibles. Nuestra
                influencia se mide no por nuestra visibilidad, sino por la solidez y el impacto
                duradero de las instituciones a las que servimos en la arena internacional.
              </p>
            </div>
          </motion.div>

          {/* Valores */}
          <motion.div
            className="md:col-span-4 md:col-start-9 bg-surface-container-low p-8 border border-outline-variant/30 relative"
            {...FU(0.15)}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-outline" />
            <h3 className="font-lexend text-headline-md font-bold text-on-background mb-8">
              Valores Fundamentales
            </h3>
            <ul className="space-y-4">
              {VALORES.map(({ pilar, nombre }) => (
                <li key={pilar} className="pl-4 border-l-2 border-outline py-1">
                  <span className="font-work text-label-sm text-on-surface-variant uppercase block mb-1">
                    {pilar}
                  </span>
                  <span className="font-work text-body-lg text-on-background font-semibold">
                    {nombre}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </section>

      {/* ── ESPECIALISTAS ───────────────────────────────────────── */}
      <section className="bg-surface-container-low py-20 px-6 md:px-16 border-y border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto">
          <motion.h2
            className="font-lexend text-[36px] md:text-headline-lg font-bold text-center text-on-background mb-16"
            {...FU(0)}
          >
            LOS ESPECIALISTAS
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ESPECIALISTAS.map((e, i) => (
              <motion.div
                key={e.name}
                className="bg-secondary p-8 flex flex-col items-center text-center relative group overflow-hidden"
                {...FU(0.1 * (i + 1))}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* animated gold top line on hover */}
                <motion.div
                  className="absolute top-0 left-0 h-1 bg-outline"
                  initial={{ scaleX: 0, originX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%' }}
                />
                <div className="w-24 h-24 bg-white mb-6 flex items-center justify-center border border-outline/30">
                  <span className="material-symbols-outlined text-secondary text-4xl">{e.icon}</span>
                </div>
                <h3 className="font-lexend text-headline-md font-bold text-on-secondary mb-1">
                  {e.name}
                </h3>
                <p className="font-work text-label-sm text-surface-variant uppercase tracking-widest mb-4">
                  {e.role}
                </p>
                <div className="w-8 h-px bg-outline mb-4" />
                <p className="font-work text-body-md text-surface-container-low opacity-80">
                  {e.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METODOLOGÍA ─────────────────────────────────────────── */}
      <section className="bg-secondary py-20 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.h2
            className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-secondary text-center mb-16"
            {...FU(0)}
          >
            Nuestra Metodología
          </motion.h2>

          <div className="flex flex-col md:flex-row justify-between items-start relative gap-12 md:gap-0">
            {/* connector line (desktop) */}
            <motion.div
              className="hidden md:block absolute top-12 bg-outline/40 h-px"
              style={{ left: '10%', right: '10%' }}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
            />

            {PASOS.map((paso, i) => (
              <motion.div
                key={paso.num}
                className="w-full md:w-1/3 px-4 text-center z-10"
                {...FU(0.15 * (i + 1))}
              >
                <div className="font-lexend text-headline-md text-white bg-secondary border-2 border-outline w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  {paso.num}
                </div>
                <h3 className="font-work text-body-lg text-on-secondary font-semibold mb-2">
                  {paso.title}
                </h3>
                <p className="font-work text-body-md text-surface-variant opacity-80">
                  {paso.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="bg-surface-variant py-12 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <motion.h2
            className="font-lexend text-headline-md font-bold text-on-background"
            {...FU(0)}
          >
            ¿Listo para elevar su operación?
          </motion.h2>
          <motion.div {...FU(0.15)}>
            <Link
              to="/contacto"
              className="inline-block bg-on-background text-white px-8 py-4 font-work text-[11px] font-semibold uppercase tracking-widest hover:bg-inverse-surface transition-colors"
            >
              INICIAR DIÁLOGO
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
