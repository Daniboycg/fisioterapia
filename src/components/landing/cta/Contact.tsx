'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

const contactInfo = [
  {
    name: 'Teléfono',
    value: '+52 (443) 123-4567',
    icon: Phone,
  },
  {
    name: 'Email',
    value: 'contacto@fisioterapia.com',
    icon: Mail,
  },
  {
    name: 'Ubicación',
    value: 'Morelia, Michoacán',
    icon: MapPin,
  },
]

export function Contact() {
  return (
    <section id="contacto" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="heading-2 text-secondary">
            Agenda tu <span className="text-primary">Consulta</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-secondary/80">
            Déjanos tus datos y nos pondremos en contacto contigo lo antes posible
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-secondary">{info.name}</h3>
                    <p className="mt-1 text-secondary/80">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary">
                  Nombre completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-secondary shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-secondary shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-secondary shadow-sm focus:border-primary focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary">
                  Mensaje (opcional)
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-2 block w-full rounded-md border border-gray-200 px-4 py-2 text-secondary shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-light transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 