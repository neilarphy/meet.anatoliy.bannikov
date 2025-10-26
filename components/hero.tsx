"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Python Developer | RPA & ML/AI Specialist"
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated greeting */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <p className="font-mono text-primary text-lg mb-4">{"> Hello, World!"}</p>
          </div>

          {/* Main heading with typing effect */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              <span className="text-foreground">I'm a </span>
              <span className="text-primary font-mono">
                {text}
                {showCursor && <span className="animate-pulse-glow">|</span>}
              </span>
            </h1>
          </div>

          {/* Description */}
          <div
            className="animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
              Automating workflows with Python and RPA, while expanding into Machine Learning and AI development.
              Building intelligent solutions that bridge automation and artificial intelligence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow font-mono">
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono bg-transparent"
            >
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 animate-fade-in-up opacity-0"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <Button size="icon" variant="ghost" onClick={scrollToAbout} className="text-primary hover:text-primary/80">
              <ChevronDown className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(134,239,172,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(134,239,172,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
    </section>
  )
}
