import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import VolunteerSection from "@/components/volunteer-section"
import GallerySection from "@/components/gallery-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <VolunteerSection />
      <GallerySection />
      <Footer />
    </main>
  )
}
