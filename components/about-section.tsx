"use client"

import Image from "next/image"
import { Heart, Users, Target, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Pasión",
    description: "Trabajamos con amor y dedicación por el desarrollo juvenil",
  },
  {
    icon: Users,
    title: "Colaboración",
    description: "Creemos en el poder del trabajo en equipo y la comunidad",
  },
  {
    icon: Target,
    title: "Impacto",
    description: "Buscamos generar cambios positivos y duraderos en la sociedad",
  },
  {
    icon: Lightbulb,
    title: "Innovación",
    description: "Fomentamos la creatividad y el pensamiento crítico",
  },
]

export default function AboutSection() {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in-up">
            <Image
              src="/placeholder-oncz8.png"
              alt="Voluntarios INJUV en el Congreso"
              width={600}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-4xl font-bold text-primary mb-6 text-balance">Quiénes Somos</h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-primary">Misión:</strong> Empoderar a las juventudes para que se conviertan en
                líderes transformadores de sus comunidades a través de la educación, la innovación y el compromiso
                social.
              </p>

              <p>
                <strong className="text-primary">Visión:</strong> Ser la organización líder en el desarrollo de
                juventudes comprometidas con la construcción de un mundo más justo, inclusivo y sostenible.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="flex items-start space-x-3 animate-fade-in-up"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
