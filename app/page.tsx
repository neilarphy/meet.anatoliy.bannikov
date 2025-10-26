import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Contact from "@/components/contact"
import ParticlesBackground from "@/components/particles-background"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
