import { useState } from 'react'
import { motion } from 'framer-motion'

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

const FIELDS = [
  { id: 'nombre', label: 'Nombre Completo', type: 'text', placeholder: 'Ej. Juan Pérez' },
  { id: 'email', label: 'Email', type: 'email', placeholder: 'ejemplo@organizacion.com' },
  { id: 'organizacion', label: 'Organización', type: 'text', placeholder: 'Nombre de su entidad' },
]

const inputBase =
  'w-full bg-transparent border-0 border-b border-on-background/30 focus:border-secondary focus:ring-0 px-0 py-2 font-work text-body-md text-on-surface placeholder:text-outline outline-none transition-colors duration-200'

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <motion.div variants={PAGE} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35 }}>

      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <section className="bg-secondary text-on-secondary py-24 px-6 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <motion.h1
            className="font-lexend text-[42px] sm:text-[56px] md:text-display-xl font-extrabold uppercase tracking-wider"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            INICIAR DIÁLOGO
          </motion.h1>
        </div>
      </section>

      {/* ── FORM ────────────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-16 bg-background">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Form card */}
          <motion.div
            className="md:col-span-8 md:col-start-3 bg-white p-8 md:p-12 border border-outline-variant/20 relative"
            {...FU(0)}
          >
            {/* gold top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />

            {submitted ? (
              <motion.div
                className="flex flex-col items-center text-center gap-6 py-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="material-symbols-outlined text-[64px] text-gold">check_circle</span>
                <h2 className="font-lexend text-headline-md font-bold text-on-surface">
                  Consulta Enviada
                </h2>
                <p className="font-work text-body-lg text-on-surface-variant max-w-md">
                  Gracias por contactarnos. Responderemos su consulta en un plazo de 48 horas.
                </p>
              </motion.div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Text fields */}
                {FIELDS.map(({ id, label, type, placeholder }, i) => (
                  <motion.div key={id} className="space-y-1 relative" {...FU(0.07 * i)}>
                    <label
                      htmlFor={id}
                      className="font-work text-label-sm text-on-surface uppercase block"
                    >
                      {label}
                    </label>
                    <input
                      id={id}
                      name={id}
                      type={type}
                      placeholder={placeholder}
                      className={inputBase}
                      required
                    />
                  </motion.div>
                ))}

                {/* Select */}
                <motion.div className="space-y-1 relative" {...FU(0.21)}>
                  <label
                    htmlFor="naturaleza"
                    className="font-work text-label-sm text-on-surface uppercase block"
                  >
                    Naturaleza de la Consulta
                  </label>
                  <select
                    id="naturaleza"
                    name="naturaleza"
                    className={`${inputBase} appearance-none cursor-pointer`}
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Seleccione una opción</option>
                    <option value="asesoria">Asesoría Estratégica</option>
                    <option value="busqueda">Búsqueda Ejecutiva</option>
                    <option value="otro">Otro</option>
                  </select>
                </motion.div>

                {/* Textarea */}
                <motion.div className="space-y-1 relative" {...FU(0.28)}>
                  <label
                    htmlFor="mensaje"
                    className="font-work text-label-sm text-on-surface uppercase block"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    placeholder="Detalles de su solicitud..."
                    className={`${inputBase} resize-none`}
                    required
                  />
                </motion.div>

                {/* Submit */}
                <motion.div className="pt-2 text-center" {...FU(0.35)}>
                  <button
                    type="submit"
                    className="bg-white text-on-surface border-b-2 border-gold px-8 py-3 font-work text-label-sm uppercase tracking-wider hover:bg-surface-container-low transition-colors duration-200"
                  >
                    ENVIAR CONSULTA
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>

          {/* Office info */}
          <motion.div
            className="md:col-span-8 md:col-start-3 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-outline-variant/20 pt-8"
            {...FU(0.2)}
          >
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <span className="material-symbols-outlined text-secondary text-[24px]">mail</span>
              <a
                href="mailto:office@atlasgadeiros.com"
                className="font-work text-body-md text-on-surface hover:text-secondary transition-colors"
              >
                office@atlasgadeiros.com
              </a>
            </div>
            <div className="flex items-center gap-4 justify-center sm:justify-start">
              <span className="material-symbols-outlined text-secondary text-[24px]">location_on</span>
              <span className="font-work text-body-md text-on-surface">Londres / Lisboa</span>
            </div>
          </motion.div>

          {/* Closing text */}
          <motion.div
            className="md:col-span-8 md:col-start-3 text-center"
            {...FU(0.25)}
          >
            <p className="font-work text-body-lg text-on-surface-variant italic">
              Respondemos a todas las consultas serias en un plazo de 48 horas.
            </p>
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
