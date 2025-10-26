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
      icon: Bot,
      title: "RPA Lead Engineer",
      description: "Leading 100+ RPA bots on UiPath, processing 8+ million files over 3 years at Zentist",
    },
    {
      icon: Code2,
      title: "Python & Full-Stack",
      description: "Built custom RPA framework on Python/Playwright and web services with FastAPI/Vue",
    },
    {
      icon: Brain,
      title: "AI/Automation & Education",
      description: "Developing agentic bots with LangChain and BrowserUse. Pursuing Master's in AI at ITMO and LLM Engineer certification",
    },
    {
      icon: Zap,
      title: "Team Leadership",
      description: "Leading engineering teams of 5+ people, managing production RPA infrastructure",
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
                I'm an engineer and team lead specializing in <span className="text-primary font-semibold">intelligent automation (AI/RPA)</span> with 7+ years of production experience. I currently lead the RPA department at Zentist, a US startup, where I manage over <span className="text-primary font-semibold">100 RPA bots</span> that process tens of thousands of insurance documents daily from 30,000+ accounts.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I initiated and built a custom <span className="text-primary font-semibold">Python RPA framework</span> with Playwright as an alternative to vendor solutions. I developed a FastAPI + PostgreSQL + Vue/Quasar web service for centralized bot management and am currently expanding into <span className="text-primary font-semibold">AI/agentic RPA</span> using LangChain and BrowserUse for complex browser automation scenarios.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing a <span className="text-primary font-semibold">Master's degree in Artificial Intelligence</span> at ITMO AI Talent Hub and additional education as an <span className="text-primary font-semibold">LLM Engineer</span> to further deepen my expertise in AI and large language models.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Over the past 3 years, my team has automatically processed more than <span className="text-primary font-semibold">8 million files</span>, reducing manual effort and improving efficiency across the organization.
              </p>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <Card className="p-8 bg-card/50 backdrop-blur border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                    <p className="font-mono text-sm text-muted-foreground">Status: Currently employed at Zentist</p>
                  </div>
                  <div className="space-y-2 font-mono text-sm">
                    <p className="text-muted-foreground">
                      <span className="text-primary">const</span> location ={" "}
                      <span className="text-chart-2">"USA, Remote"</span>;
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-primary">const</span> focus = [
                      <span className="text-chart-2">"Python"</span>, <span className="text-chart-2">"RPA"</span>,{" "}
                      <span className="text-chart-2">"AI/Agents"</span>];
                    </p>
                    <p className="text-muted-foreground">
                      <span className="text-primary">const</span> passion ={" "}
                      <span className="text-chart-2">"Intelligent automation at scale"</span>;
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
                className={`p-6 bg-card/50 backdrop-blur border-border hover:border-primary/40 transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
