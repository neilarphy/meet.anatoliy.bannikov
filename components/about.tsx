"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Bot, Brain, Zap } from "lucide-react"

export default function About() {
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

  const highlights = [
    {
      icon: Code2,
      title: "Python Expert",
      description: "Deep expertise in Python development with focus on clean, maintainable code",
    },
    {
      icon: Bot,
      title: "RPA Specialist",
      description: "Automating business processes and workflows to increase efficiency",
    },
    {
      icon: Brain,
      title: "ML/AI Enthusiast",
      description: "Expanding into machine learning and artificial intelligence development",
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Passionate about finding elegant solutions to complex challenges",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-primary text-sm mb-2">{"// About Me"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Building the Future with Code</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Main content */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div
              className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate developer specializing in <span className="text-primary font-semibold">Python</span>{" "}
                and <span className="text-primary font-semibold">RPA automation</span>. My journey in software
                development has been driven by a desire to create solutions that make a real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently, I'm expanding my expertise into{" "}
                <span className="text-primary font-semibold">Machine Learning</span> and{" "}
                <span className="text-primary font-semibold">Artificial Intelligence</span>, combining my automation
                background with cutting-edge AI technologies to build intelligent, scalable systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community.
              </p>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                    <p className="font-mono text-sm text-muted-foreground">Status: Available for opportunities</p>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground">
                      <span className="text-primary">const</span> location ={" "}
                      <span className="text-chart-2">"Remote"</span>;
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-primary">const</span> focus = [
                      <span className="text-chart-2">"Python"</span>, <span className="text-chart-2">"RPA"</span>,{" "}
                      <span className="text-chart-2">"ML/AI"</span>];
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-primary">const</span> passion ={" "}
                      <span className="text-chart-2">"Building intelligent solutions"</span>;
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-border hover:border-primary/40 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
