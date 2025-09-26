"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-zoom">
          <Image
            src="/injuv-logo-white.jpg"
            alt="INJUV Logo"
            width={300}
            height={120}
            className="mx-auto mb-12 h-24 w-auto"
          />
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up text-balance leading-tight">
          Instituto de Jóvenes Líderes y Diplomáticos
        </h1>

        <p
          className="text-xl md:text-2xl mb-12 animate-fade-in-up text-blue-100 leading-relaxed max-w-4xl mx-auto"
          style={{ animationDelay: "0.2s" }}
        >
          Impulsamos a las juventudes a liderar proyectos sociales, culturales y educativos que transforman la sociedad.
        </p>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-blue-50 text-lg px-10 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Hazte voluntario
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
