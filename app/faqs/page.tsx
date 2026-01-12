'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: 'Pedidos',
    question: 'Como puedo hacer un pedido?',
    answer: 'Puedes hacer tu pedido llamando al (669) 213 9090 o visitandonos en Av. Carlos Canseco 603, Mazatlan. También puedes ordenar directamente desde nuestra pagina web.'
  },
  {
    category: 'Pedidos',
    question: 'Hacen entregas a domicilio?',
    answer: 'Si, ofrecemos servicio de entrega a domicilio en toda la zona de Mazatlan. El tiempo de entrega es aproximadamente de 30-45 minutos dependiendo de tu ubicacion.'
  },
  {
    category: 'Pedidos',
    question: 'Cual es el pedido minimo para entrega?',
    answer: 'No tenemos pedido minimo. Puedes ordenar desde una pizza individual hasta un pedido grande para toda la familia.'
  },
  {
    category: 'Horarios',
    question: 'Cual es su horario de atencion?',
    answer: 'Estamos abiertos de lunes a domingo de 1:00 PM a 10:00 PM para que puedas satisfacer tus antojos todos los dias.'
  },
  {
    category: 'Menu',
    question: 'Tienen opciones vegetarianas?',
    answer: 'Si, contamos con opciones vegetarianas en pizzas, hamburguesas y ensaladas. Puedes personalizar tu pedido segun tus preferencias.'
  },
  // {
  //   category: 'Menu',
  //   question: 'Puedo personalizar mi pizza?',
  //   answer: 'Por supuesto! Puedes elegir los ingredientes que desees, agregar o quitar toppings, y seleccionar el tipo de masa que prefieras.'
  // },
  // {
  //   category: 'Menu',
  //   question: 'Que tamanos de pizza tienen?',
  //   answer: 'Ofrecemos pizzas en tres tamanos: Personal (8"), Mediana (12") y Grande (14"). Perfectas para cualquier ocasion, desde un antojo individual hasta una reunion familiar.'
  // },
  {
    category: 'Pagos',
    question: 'Que metodos de pago aceptan?',
    answer: 'Aceptamos efectivo, tarjetas de debito y credito, y transferencias bancarias. Para pedidos a domicilio puedes pagar en efectivo o con tarjeta al momento de la entrega.'
  },
  {
    category: 'Pagos',
    question: 'Tienen promociones especiales?',
    answer: 'Si! Tenemos promociones especiales semanales. Siguenos en nuestras redes sociales para estar al tanto de nuestras ofertas y descuentos.'
  },
  // {
  //   category: 'Otros',
  //   question: 'Organizan eventos o fiestas?',
  //   answer: 'Si, podemos ayudarte a organizar tu evento con paquetes especiales para fiestas y reuniones. Contactanos para mas informacion sobre nuestros paquetes grupales.'
  // },
  {
    category: 'Otros',
    question: 'Tienen area de comedor?',
    answer: 'Si, contamos con un area de comedor comoda y familiar donde puedes disfrutar tus alimentos. También ofrecemos servicio para llevar.'
  }
]

const categories = ['Todos', 'Pedidos', 'Horarios', 'Menu', 'Pagos', 'Otros']

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredFaqs = selectedCategory === 'Todos'
    ? faqs
    : faqs.filter(faq => faq.category === selectedCategory)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-cream to-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-orange pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 cubano"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Preguntas Frecuentes
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tienes dudas? Aqui encontraras las respuestas
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white py-6 px-6 shadow-md sticky top-32 z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange text-white shadow-lg scale-105'
                    : 'bg-cream text-orange hover:bg-orange/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs List */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-cream/50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-orange/10 text-orange text-xs font-semibold rounded-full mb-2">
                        {faq.category}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="ml-4"
                    >
                      <ChevronDown className="w-6 h-6 text-orange" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-blue-400 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 cubano">
            No encontraste tu respuesta?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Contactanos y con gusto resolveremos tus dudas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6692139090"
              className="px-8 py-4 bg-white text-blue-400 rounded-full text-lg font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Llamar al (669) 213 9090
            </a>
            <a
              href="https://wa.me/526692139090"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-orange text-white rounded-full text-lg font-bold cubano shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
