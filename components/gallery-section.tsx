"use client"

import Image from "next/image"

const galleryImages = [
  "/youth-conference-presentation.jpg",
  "/placeholder-p6k04.png",
  "/model-united-nations-session.jpg",
  "/placeholder-7hupa.png",
  "/placeholder-m5qbu.png",
]

export default function GallerySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-4xl font-bold text-primary text-center mb-12 animate-fade-in-up">Nuestras Actividades</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl animate-fade-in-up hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Actividad INJUV ${index + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
