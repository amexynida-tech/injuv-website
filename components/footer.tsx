"use client"

import Image from "next/image"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer id="contacto" className="bg-primary text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Image src="/injuv-logo-white.jpg" alt="INJUV Logo" width={150} height={60} className="mb-6 h-12 w-auto" />
            <p className="text-blue-100 leading-relaxed mb-6">INJUV – Juventudes que inspiran, crean y lideran.</p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-blue-100 hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="text-blue-100 hover:text-white transition-colors">
                  Quiénes Somos
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-blue-100 hover:text-white transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#voluntariado" className="text-blue-100 hover:text-white transition-colors">
                  Voluntariado
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-blue-100">
              <li>contacto@injuv.org</li>
              <li>+56 9 1234 5678</li>
              <li>Santiago, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-blue-100">
          <p>&copy; 2025 INJUV - Instituto Nacional de la Juventud. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
