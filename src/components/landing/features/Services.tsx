'use client'

import { motion } from 'framer-motion'
import { Activity, Users, Home, Clock, Award, Heart } from 'lucide-react'

const services = [
  {
    name: 'Fisioterapia General',
    description: 'Tratamientos personalizados para recuperar tu movilidad y aliviar el dolor.',
    icon: Activity,
  },
  {
    name: 'Rehabilitación Física',
    description: 'Programas especializados para recuperación post-lesiones y cirugías.',
    icon: Users,
  },
  {
    name: 'Servicio a Domicilio',
    description: 'Atención profesional en la comodidad de tu hogar en Morelia.',
    icon: Home,
  },
  {
    name: 'Horarios Flexibles',
    description: 'Adaptamos nuestros horarios a tus necesidades.',
    icon: Clock,
  },
  {
    name: '10 Años de Experiencia',
    description: 'Amplia experiencia en tratamientos y rehabilitación física.',
    icon: Award,
  },
  {
    name: 'Atención Personalizada',
    description: 'Cada tratamiento se adapta a tus necesidades específicas.',
    icon: Heart,
  },
]

export function Services() {
  return (
    <section id="servicios" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="heading-2 text-secondary">
            Servicios <span className="text-primary">Profesionales</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary/80">
            Ofrecemos una amplia gama de servicios de fisioterapia y rehabilitación,
            siempre con un enfoque personalizado y profesional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 max-w-7xl"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-lg hover:ring-primary transition-all"
              >
                <div className="flex items-center gap-4">
                  <service.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold text-secondary">{service.name}</h3>
                </div>
                <p className="mt-4 text-sm text-secondary/80">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 