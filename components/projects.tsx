"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [repos, setRepos] = useState<any[]>([])
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

  // Placeholder projects - replace with actual GitHub API call
  const projects = [
    {
      name: "RPA-Automation-Suite",
      description: "Comprehensive RPA automation framework built with Python for enterprise workflow automation",
      stars: 245,
      forks: 67,
      language: "Python",
      topics: ["rpa", "automation", "python", "selenium"],
      html_url: "https://github.com/yourusername/rpa-automation-suite",
    },
    {
      name: "ML-Price-Predictor",
      description: "Machine learning model for real-time price prediction using ensemble methods and neural networks",
      stars: 189,
      forks: 43,
      language: "Python",
      topics: ["machine-learning", "tensorflow", "data-science"],
      html_url: "https://github.com/yourusername/ml-price-predictor",
    },
    {
      name: "Web-Scraper-Pro",
      description: "Advanced web scraping tool with anti-detection features and data pipeline integration",
      stars: 312,
      forks: 89,
      language: "Python",
      topics: ["web-scraping", "beautifulsoup", "scrapy"],
      html_url: "https://github.com/yourusername/web-scraper-pro",
    },
    {
      name: "AI-Chatbot-Framework",
      description: "Intelligent chatbot framework with NLP capabilities and multi-platform support",
      stars: 156,
      forks: 34,
      language: "Python",
      topics: ["ai", "nlp", "chatbot", "transformers"],
      html_url: "https://github.com/yourusername/ai-chatbot-framework",
    },
    {
      name: "Data-Pipeline-Toolkit",
      description: "ETL pipeline toolkit for processing and transforming large-scale datasets efficiently",
      stars: 203,
      forks: 56,
      language: "Python",
      topics: ["data-engineering", "etl", "pandas"],
      html_url: "https://github.com/yourusername/data-pipeline-toolkit",
    },
    {
      name: "API-Testing-Suite",
      description: "Automated API testing framework with comprehensive reporting and CI/CD integration",
      stars: 178,
      forks: 41,
      language: "Python",
      topics: ["testing", "api", "automation", "pytest"],
      html_url: "https://github.com/yourusername/api-testing-suite",
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <p className="font-mono text-primary text-sm mb-2">{"// Featured Projects"}</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Things I've Built</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my open-source projects and contributions on GitHub
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border-border hover:border-primary/40 transition-all duration-500 hover:scale-105 flex flex-col ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <Button size="icon" variant="ghost" className="text-muted-foreground hover:text-primary" asChild>
                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </Button>
                </div>

                <h3 className="font-bold text-lg mb-2 font-mono">{project.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.topics.slice(0, 3).map((topic: string, topicIndex: number) => (
                      <Badge key={topicIndex} variant="secondary" className="bg-secondary/50 text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-3 rounded-full bg-primary" />
                      <span>{project.language}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>{project.forks}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View more button */}
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 font-mono bg-transparent"
              asChild
            >
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
