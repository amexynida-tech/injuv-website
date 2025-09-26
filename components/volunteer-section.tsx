"use client"

import { Button } from "@/components/ui/button"

export default function VolunteerSection() {
  return (
    <section id="voluntariado" className="py-20 bg-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-6"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            ¿Quieres transformar el mundo con nosotros?
          </h2>

          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Únete a nuestra comunidad de jóvenes líderes y sé parte del cambio que quieres ver en el mundo
          </p>

          <Button
            size="lg"
            className="bg-white text-secondary hover:bg-blue-50 text-xl px-12 py-6 rounded-full font-bold transform hover:scale-105 transition-all duration-300 shadow-xl animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Unirme como voluntario
          </Button>
        </div>
      </div>
    </section>
  )
}
