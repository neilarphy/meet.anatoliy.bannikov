"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/anatbannikov",
      handle: "@anatbannikov",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/anatoliybannikov/",
      handle: "/in/anatoliybannikov",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:anatbann@gmail.com",
      handle: "anatbann@gmail.com",
    },
    {
      name: "Phone",
      icon: Mail,
      url: "tel:+79090760001",
      handle: "+7 909 076 0001",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-primary text-sm mb-2">{"// Get In Touch"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Work Together</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-border hover:border-primary/40 transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <link.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{link.name}</h3>
                    <p className="text-sm text-muted-foreground font-mono">{link.handle}</p>
                  </div>
                  <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div
            className={`text-center transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Card className="p-8 bg-card/50 backdrop-blur border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Ready to start a project?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you need AI/RPA automation, intelligent automation solutions, custom Python frameworks, or agentic RPA development, I'm here to help bring your ideas to life.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-glow font-mono"
                asChild
              >
                <a href="mailto:anatbann@gmail.com?subject=Inquiry from portfolio">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                </a>
              </Button>
            </Card>
          </div>

          {/* Footer */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-sm text-muted-foreground font-mono">
              {"<"} Built with Next.js, TypeScript, and Tailwind CSS {" />"}
            </p>
            <p className="text-sm text-muted-foreground font-mono mt-2">© 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  )
}
