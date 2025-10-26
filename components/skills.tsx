"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "Bash"],
    },
    {
      title: "RPA & Automation",
      skills: ["UiPath", "Automation Anywhere", "Blue Prism", "Selenium", "Beautiful Soup", "Scrapy"],
    },
    {
      title: "ML/AI & Data Science",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Keras", "OpenCV"],
    },
    {
      title: "Web Development",
      skills: ["FastAPI", "Flask", "Django", "React", "Next.js", "REST APIs"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "SQLite"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "CI/CD", "Linux", "AWS", "Azure"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-primary text-sm mb-2">{"// Technical Skills"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">My Tech Stack</h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`p-6 bg-card/50 backdrop-blur border-border hover:border-primary/40 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="font-bold text-lg mb-4 text-primary font-mono">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
