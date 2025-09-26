"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

const projects = [
  {
    id: "creadorlab",
    title: "CreadorLab",
    slogan: "Donde las ideas se convierten en soluciones.",
    description:
      "Espacio para jóvenes creativos que desarrollan proyectos de impacto social desde la innovación, pensamiento crítico y trabajo colaborativo.",
    color: "from-primary to-primary/80",
    bgColor: "bg-primary",
  },
  {
    id: "joveninspo",
    title: "JovenInspo",
    slogan: "Despertamos el potencial interior de las juventudes.",
    description:
      "Conferencias, mentorías, charlas motivacionales y actividades vivenciales que inspiran y motivan a los jóvenes a alcanzar su máximo potencial.",
    color: "from-secondary to-secondary/80",
    bgColor: "bg-secondary",
  },
  {
    id: "starmun",
    title: "StarMUN",
    slogan: "Formamos líderes con visión global.",
    description:
      "Diplomacia juvenil, pensamiento crítico y compromiso ciudadano con actividades basadas en los Modelos de Naciones Unidas.",
    color: "from-accent to-accent/80",
    bgColor: "bg-accent",
  },
]

export default function ProjectsSection() {
  const [expandedProject, setExpandedProject] = useState<string | null>(null)

  return (
    <section id="proyectos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-primary mb-4">Nuestros Proyectos</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-balance">
            Tres iniciativas transformadoras que impulsan el liderazgo juvenil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in-up overflow-hidden ${
                expandedProject === project.id ? "md:col-span-3" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
            >
              <CardContent className={`p-0 h-80 relative bg-gradient-to-br ${project.color}`}>
                <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-lg font-medium opacity-90 text-balance">{project.slogan}</p>
                  </div>

                  <div
                    className={`transition-all duration-500 ${
                      expandedProject === project.id ? "opacity-100 max-h-40" : "opacity-0 max-h-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed mb-4">{project.description}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Conocer más</span>
                    <ChevronRight
                      className={`h-5 w-5 transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-90" : "group-hover:translate-x-1"
                      }`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
