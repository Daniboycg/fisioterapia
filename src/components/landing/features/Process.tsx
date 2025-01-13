'use client'

import { motion } from 'framer-motion'
import { ClipboardCheck, Stethoscope, Activity, ThumbsUp } from 'lucide-react'

const steps = [
  {
    name: 'Evaluación Inicial',
    description: 'Realizamos un diagnóstico completo para entender tu condición.',
    icon: ClipboardCheck,
  },
  {
    name: 'Plan Personalizado',
    description: 'Diseñamos un programa de tratamiento específico para ti.',
    icon: Stethoscope,
  },
  {
    name: 'Tratamiento',
    description: 'Aplicamos las técnicas más efectivas para tu recuperación.',
    icon: Activity,
  },
  {
    name: 'Seguimiento',
    description: 'Monitoreamos tu progreso y ajustamos el tratamiento según sea necesario.',
    icon: ThumbsUp,
  },
]

export function Process() {
  return (
    <section id="proceso" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="heading-2 text-secondary">
            Nuestro <span className="text-primary">Proceso</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary/80">
            Un enfoque metódico y profesional para garantizar tu recuperación
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-4xl"
        >
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative"
              >
                <div className={`flex items-center gap-8 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-secondary">{step.name}</h3>
                    <p className="mt-2 text-secondary/80">{step.description}</p>
                  </div>
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <step.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-24 h-16 w-px bg-gray-200" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 