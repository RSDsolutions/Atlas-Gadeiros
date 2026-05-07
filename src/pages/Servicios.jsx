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

const CHECKLIST = [
  'Análisis de viabilidad deportiva',
  'Auditoría de plantillas y academias',
  'Desarrollo de proyectos deportivos',
  'Identificación de talento ejecutivo',
]

const CONSULTING_CARDS = [
  { icon: 'monitoring', title: 'Data Analysis', desc: 'Modelos predictivos y análisis estadístico avanzado para evaluación de rendimiento.' },
  { icon: 'group', title: 'Recruitment', desc: 'Sistemas de scouting integral y evaluación objetiva de perfiles para contrataciones clave.' },
  { icon: 'settings', title: 'Operations', desc: 'Reingeniería de procesos internos para maximizar la eficiencia y reducir costos operativos.' },
]

const GESTION_ITEMS = [
  'Athlete Representation',
  'Contract Negotiation & Structuring',
  'Brand & Commercial Strategy',
]

const STEPS = [
  { num: '01', title: 'Consulta Inicial', desc: 'Evaluación profunda de los objetivos, desafíos y contexto específico del cliente para definir el alcance del mandato.' },
  { num: '02', title: 'Diagnóstico', desc: 'Auditoría rigurosa y recolección de datos mediante nuestras metodologías exclusivas para identificar áreas de oportunidad.' },
  { num: '03', title: 'Diseño Estratégico', desc: 'Elaboración de un plan de acción detallado, apoyado en inteligencia de mercado y mejores prácticas globales.' },
  { num: '04', title: 'Ejecución Continua', desc: 'Acompañamiento en la implementación de la estrategia, monitoreo de resultados y ajustes tácticos en tiempo real.' },
]

export default function Servicios() {
  return (
    <motion.div variants={PAGE} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-secondary text-on-secondary py-24 px-6 md:px-16 border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto text-center">
          <motion.h1
            className="font-lexend text-[42px] sm:text-[56px] md:text-display-xl font-extrabold uppercase tracking-widest"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            DISCIPLINAS PRINCIPALES
          </motion.h1>
        </div>
      </section>

      {/* ── ASESORÍA EN FÚTBOL ──────────────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-16 border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

          <motion.div className="lg:col-span-4" {...FU(0)}>
            <div className="w-12 h-1 bg-gold mb-5" />
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface">
              Asesoría en Fútbol
            </h2>
          </motion.div>

          <motion.div className="lg:col-span-8 flex flex-col gap-5" {...FU(0.15)}>
            <p className="font-work text-body-lg text-on-surface-variant">
              Nuestro equipo de expertos provee un análisis profundo y objetivo del ecosistema
              futbolístico global. A través de metodologías rigurosas y una red de contactos
              inigualable, entregamos inteligencia táctica y estratégica.
            </p>
            <p className="font-work text-body-lg text-on-surface-variant">
              Nos enfocamos en la creación de valor a largo plazo para clubes, inversores e
              instituciones deportivas, mitigando riesgos en la toma de decisiones críticas.
            </p>
            <p className="font-work text-body-lg text-on-surface-variant">
              Cada informe y asesoría está diseñado para ofrecer ventajas competitivas
              sostenibles en un mercado altamente volátil y competitivo.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-outline-variant/20">
              {CHECKLIST.map((item, i) => (
                <motion.div key={item} className="flex items-start gap-3" {...FU(0.08 * i)}>
                  <span
                    className="material-symbols-outlined text-gold mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-work text-body-md text-on-surface font-semibold">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONSULTORÍA DEPORTIVA ───────────────────────────────── */}
      <section className="bg-surface-container py-20 px-6 md:px-16 border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

          <motion.div className="lg:col-span-8 flex flex-col gap-6 lg:order-2" {...FU(0.1)}>
            <p className="font-work text-body-lg text-on-surface-variant">
              Optimizamos las operaciones deportivas y comerciales mediante soluciones
              basadas en datos empíricos y mejores prácticas internacionales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {CONSULTING_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="bg-surface p-6 border border-outline-variant/20 border-t-4 border-t-gold relative"
                  {...FU(0.1 * i)}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                >
                  <span className="material-symbols-outlined text-[32px] text-secondary mb-3 block">
                    {card.icon}
                  </span>
                  <h3 className="font-lexend text-[20px] font-bold text-on-surface mb-2">
                    {card.title}
                  </h3>
                  <p className="font-work text-body-md text-on-surface-variant">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="lg:col-span-4 lg:order-1" {...FU(0)}>
            <div className="w-12 h-1 bg-gold mb-5" />
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface">
              Consultoría Deportiva
            </h2>
          </motion.div>
        </div>
      </section>

      {/* ── GESTIÓN DEPORTIVA ───────────────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-16 border-b border-outline-variant/20">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">

          <motion.div className="lg:col-span-4" {...FU(0)}>
            <div className="w-12 h-1 bg-gold mb-5" />
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold text-on-surface">
              Gestión Deportiva
            </h2>
          </motion.div>

          <motion.div className="lg:col-span-8" {...FU(0.15)}>
            <p className="font-work text-body-lg text-on-surface-variant mb-8">
              Gestión integral del talento y los activos deportivos. Proveemos una estructura
              de soporte de élite para maximizar el valor comercial y deportivo de nuestros clientes.
            </p>
            <div className="flex flex-col border-t border-outline-variant/20">
              {GESTION_ITEMS.map((item, i) => (
                <motion.div
                  key={item}
                  className="flex items-center gap-4 py-4 border-b border-outline-variant/20 group hover:bg-surface-container transition-colors px-2"
                  {...FU(0.08 * (i + 1))}
                >
                  <span className="material-symbols-outlined text-secondary group-hover:text-gold transition-colors">
                    chevron_right
                  </span>
                  <span className="font-lexend text-[18px] font-bold text-on-surface">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ─────────────────────────────────────── */}
      <section className="bg-secondary text-on-secondary py-20 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div className="text-center mb-16" {...FU(0)}>
            <div className="w-12 h-1 bg-gold mx-auto mb-5" />
            <h2 className="font-lexend text-[36px] md:text-headline-lg font-bold">CÓMO TRABAJAMOS</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                className="flex flex-col border-t border-outline/30 pt-5"
                {...FU(0.1 * (i + 1))}
              >
                <span className="font-lexend text-headline-lg font-bold text-gold mb-2 opacity-80">
                  {step.num}
                </span>
                <h3 className="font-lexend text-[20px] font-bold mb-3">{step.title}</h3>
                <p className="font-work text-body-md text-on-secondary/80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-surface py-20 px-6 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center">
          <motion.h2
            className="font-lexend text-headline-md font-bold text-on-surface mb-8 max-w-xl"
            {...FU(0)}
          >
            Cada mandato es a medida.
          </motion.h2>
          <motion.div {...FU(0.15)}>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-on-surface font-work text-label-sm font-semibold border-b-2 border-gold hover:bg-surface-container transition-colors uppercase tracking-widest"
            >
              SOLICITAR CONSULTA
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
