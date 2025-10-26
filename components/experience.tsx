"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      title: "AI / RPA Lead Engineer",
      company: "Zentist - USA",
      period: "02/2022 - Current",
      description:
        "Leading RPA department with 100+ UiPath bots processing tens of thousands of insurance documents daily from 30,000+ accounts. Built custom Python RPA framework with Playwright, developed FastAPI + PostgreSQL + Vue/Quasar web service for bot management. Created agentic bots with LangChain and BrowserUse. Processed 8+ million files over 3 years. Leading team of 5 engineers.",
      technologies: ["Python", "UiPath", "Playwright", "FastAPI", "PostgreSQL", "Vue.js", "LangChain", "BrowserUse", "Kubernetes", "AWS"],
    },
    {
      title: "Intelligent Automation Manager / RPA Lead",
      company: "KPMG Russia & CIS",
      period: "01/2019 - 04/2022",
      description:
        "Led team of 5 analysts and developers implementing LegalTech solutions and RPA for clients from banking and retail sectors. Implemented Case.pro LegalTech product for top-5 retailer, developed 5 RPA bots for top-10 bank including complex request processing and document automation. Created 8 chatbots handling 300k+ employee inquiries with automatic routing. Built comprehensive documentation following corporate standards.",
      technologies: ["Python", "UiPath", "Case.pro", "LegalTech", "VBA", "Telegram API", "Scrum", "Agile"],
    },
    {
      title: "RPA Developer / Business Analyst",
      company: "Fortum",
      period: "01/2017 - 02/2019",
      description:
        "Analyzed 200+ business processes in HR, finance, and SAP departments, developed 8 RPA solutions on BluePrism for international energy company. Built reusable component library, migrated solutions to production infrastructure. Reduced manual effort by 5 FTE, improved processing time by 80%, achieved 99% SLA uptime.",
      technologies: ["Python", "BluePrism", "RPA", "SAP", "VB", "Agile"],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-primary text-sm mb-2">{"// Work Experience"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Professional Journey</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/30 -translate-x-1/2" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${isVisible
                      ? "opacity-100 translate-x-0"
                      : `opacity-0 ${index % 2 === 0 ? "-translate-x-10" : "translate-x-10"}`
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`md:flex md:gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="md:w-1/2" />
                    <div className="md:w-1/2">
                      <Card className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary/40 transition-all duration-300 hover:scale-105">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Briefcase className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl mb-1">{exp.title}</h3>
                            <p className="text-primary font-semibold mb-2">{exp.company}</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="secondary" className="bg-secondary/50 text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </Card>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background animate-pulse-glow" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
