'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Car } from 'lucide-react'
import Image from 'next/image'

const details = [
  {
    name: 'Ubicación',
    description: 'Servicio a domicilio en toda la ciudad de Morelia',
    icon: MapPin,
  },
  {
    name: 'Horarios',
    description: 'Lunes a Sábado de 8:00 AM a 8:00 PM',
    icon: Clock,
  },
  {
    name: 'Traslados',
    description: 'Sin costo extra dentro de la zona metropolitana',
    icon: Car,
  },
]

export function Coverage() {
  return (
    <section id="cobertura" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="heading-2 text-secondary">
            Área de <span className="text-primary">Cobertura</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary/80">
            Servicio a domicilio en toda la ciudad de Morelia y alrededores
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] overflow-hidden rounded-2xl bg-gray-50 lg:h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Mapa de Morelia"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {details.map((detail, index) => (
                <motion.div
                  key={detail.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <detail.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">{detail.name}</h3>
                    <p className="mt-2 text-secondary/80">{detail.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 