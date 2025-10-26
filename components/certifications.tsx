"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Certifications() {
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

  const certifications = [
    {
      title: "Master's in Artificial Intelligence",
      issuer: "ITMO AI Talent Hub",
      date: "In Progress",
      credentialId: "Master's Program",
      url: "#",
    },
    {
      title: "LLM Engineer Certification",
      issuer: "Additional Education",
      date: "In Progress",
      credentialId: "LLM Engineering",
      url: "#",
    },
    {
      title: "MLOps: Managing ML Project Lifecycle",
      issuer: "AI Talent Hub / ITMO",
      date: "08/2025 (in progress)",
      credentialId: "In Progress",
      url: "#",
    },
    {
      title: "UiPath Document Understanding",
      issuer: "UiPath",
      date: "09/2020",
      credentialId: "UiPath Certified",
      url: "#",
    },
    {
      title: "ABBYY FlexiCapture Certified Specialist",
      issuer: "ABBYY",
      date: "03/2019",
      credentialId: "ABBYY Certified",
      url: "#",
    },
    {
      title: "Agile Thinking & Scrum/Kanban",
      issuer: "Certification Provider",
      date: "03/2020",
      credentialId: "Agile Certified",
      url: "#",
    },
  ]

  return (
    <section id="certifications" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-primary text-sm mb-2">{"// Certifications"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Professional Credentials</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Certifications grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-border hover:border-primary/40 transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>

                <h3 className="font-bold text-lg mb-2 leading-tight">{cert.title}</h3>
                <p className="text-primary font-semibold text-sm mb-3">{cert.issuer}</p>

                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-secondary/50 text-xs">
                    {cert.date}
                  </Badge>
                  <p className="text-xs text-muted-foreground font-mono">ID: {cert.credentialId}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
