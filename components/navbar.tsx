"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/injuv-logo-blue.jpg" alt="INJUV Logo" width={120} height={40} className="h-10 w-auto" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-blue-200 transition-colors font-medium">
              Inicio
            </a>
            <a href="#quienes-somos" className="text-white hover:text-blue-200 transition-colors font-medium">
              Quiénes Somos
            </a>
            <a href="#proyectos" className="text-white hover:text-blue-200 transition-colors font-medium">
              Proyectos
            </a>
            <a href="#voluntariado" className="text-white hover:text-blue-200 transition-colors font-medium">
              Voluntariado
            </a>
            <a href="#contacto" className="text-white hover:text-blue-200 transition-colors font-medium">
              Contacto
            </a>
          </div>

          <Button
            variant="outline"
            className="hidden md:block border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Contacto
          </Button>
        </div>
      </div>
    </nav>
  )
}
