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

const PERFILES = [
  { icon: 'sports', title: 'Directores Deportivos', desc: 'Arquitectos de la visión deportiva a largo plazo y la estrategia de plantilla.' },
  { icon: 'strategy', title: 'Entrenadores en Jefe', desc: 'Líderes tácticos y gestores de vestuario para el máximo rendimiento.' },
  { icon: 'corporate_fare', title: 'CEOs de Clubes', desc: 'Ejecutivos encargados de la viabilidad financiera y el crecimiento comercial.' },
  { icon: 'analytics', title: 'Coordinadores Técnicos', desc: 'Especialistas en análisis, scouting y desarrollo de metodologías.' },
  { icon: 'school', title: 'Directores de Academia', desc: 'Gestores de la cantera, fundamentales para la sostenibilidad del club.' },
]

const PROCESO = [
  { num: 1, title: 'Definir Perfil', desc: 'Alineación profunda con la visión del club, cultura institucional y requisitos específicos del rol.' },
  { num: 2, title: 'Mapeo de Mercado', desc: 'Investigación exhaustiva y global para identificar talento activo y pasivo que cumpla con los criterios de éxito.' },
  { num: 3, title: 'Contacto con Candidatos', desc: 'Acercamiento discreto y profesional para evaluar interés y viabilidad inicial.' },
  { num: 4, title: 'Evaluación', desc: 'Entrevistas en profundidad, análisis de historial, referencias de la industria y evaluación de encaje cultural.' },
  { num: 5, title: 'Colocación y Onboarding', desc: 'Asesoramiento en la negociación final y seguimiento durante los primeros 90 días para asegurar una integración exitosa.' },
]

export default function BusquedaEjecutiva() {
  return (
    <motion.div variants={PAGE} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <header className="bg-secondary text-on-secondary py-24 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary to-navy opacity-60" />
        <div className="max-w-[1280px] mx-auto relative z-10 text-center flex flex-col items-center">
          <motion.h1
            className="font-lexend text-[42px] sm:text-[56px] md:text-display-xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            BÚSQUEDA EJECUTIVA
          </motion.h1>
          <motion.p
            className="font-work text-body-lg text-secondary-fixed max-w-2xl mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: 'easeOut' }}
          >
            Identificando y asegurando el talento directivo que define el futuro del deporte de élite.
          </motion.p>
        </div>
      </header>

      {/* ── EL DESAFÍO ──────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <motion.h2
            className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface"
            {...FU(0)}
          >
            El Desafío del Talento
          </motion.h2>
          <motion.div
            className="w-16 h-1 bg-secondary-container mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
          <motion.p className="font-work text-body-lg text-on-surface-variant" {...FU(0.1)}>
            En el panorama deportivo actual, la diferencia entre el éxito sostenido y la
            mediocridad a menudo reside en el liderazgo fuera del campo. La búsqueda de
            talento ejecutivo en el deporte es excepcionalmente compleja, requiriendo no
            solo un historial comprobado de gestión, sino una comprensión profunda de las
            dinámicas únicas, la presión mediática y la cultura específica de cada institución.
          </motion.p>
          <motion.p className="font-work text-body-lg text-on-surface-variant" {...FU(0.15)}>
            Nuestro enfoque metodológico y nuestra red global nos permiten identificar líderes
            que poseen la rara combinación de perspicacia comercial, visión deportiva e
            inteligencia emocional necesaria para prosperar en los entornos más exigentes.
            No buscamos simplemente candidatos; identificamos arquitectos del éxito institucional.
          </motion.p>
        </div>
      </section>

      {/* ── PERFILES QUE POSICIONAMOS ───────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-12" {...FU(0)}>
            <h2 className="font-lexend text-headline-md font-bold text-on-surface mb-3">
              Perfiles que Posicionamos
            </h2>
            <p className="font-work text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Especialización en roles de alto impacto estratégico y deportivo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {PERFILES.map((p, i) => (
              <motion.div
                key={p.title}
                className="bg-white border border-outline-variant/30 p-6 flex flex-col items-center text-center border-t-4 border-t-secondary-container"
                {...FU(0.07 * (i + 1))}
                whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,26,64,0.10)', transition: { duration: 0.2 } }}
              >
                <span className="material-symbols-outlined text-[40px] text-secondary mb-4">
                  {p.icon}
                </span>
                <h3 className="font-work text-label-sm text-on-surface uppercase tracking-widest mb-2">
                  {p.title}
                </h3>
                <p className="font-work text-[14px] text-on-surface-variant">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO DE BÚSQUEDA ─────────────────────────────────── */}
      <section className="bg-navy text-on-secondary py-20 px-6 md:px-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        <div className="max-w-[1280px] mx-auto relative z-10">

          <motion.div className="mb-12 border-b border-outline-variant/20 pb-5" {...FU(0)}>
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-secondary mb-2">
              Proceso de Búsqueda
            </h2>
            <p className="font-work text-body-lg text-secondary-fixed-dim">
              Metodología rigurosa para resultados precisos.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="flex flex-col border-l border-secondary-container/30 ml-4 pl-8 relative gap-0">
            {PROCESO.map((step, i) => (
              <motion.div
                key={step.num}
                className="relative py-6 border-b border-outline-variant/10 last:border-0 group"
                {...FU(0.1 * (i + 1))}
              >
                {/* circle number */}
                <div className="absolute -left-[52px] top-6 bg-navy w-9 h-9 flex items-center justify-center font-lexend font-bold text-secondary-container border border-secondary-container/30">
                  {step.num}
                </div>
                {/* connector tick */}
                <div className="absolute -left-[34px] top-[38px] w-4 h-px bg-secondary-container/40" />

                <h3 className="font-lexend text-headline-md font-bold text-on-secondary mb-2 group-hover:text-secondary-container transition-colors">
                  {step.title}
                </h3>
                <p className="font-work text-body-md text-secondary-fixed-dim max-w-2xl">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA inside navy section */}
          <motion.div className="mt-12" {...FU(0.5)}>
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 bg-white text-on-surface px-8 py-4 font-work text-label-sm font-semibold uppercase tracking-widest hover:bg-surface-container transition-colors border-b-2 border-secondary-container"
            >
              <span>ENVIAR MANDATO DE BÚSQUEDA</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
