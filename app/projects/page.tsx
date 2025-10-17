'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import projects from "@/data/projects"

export default function ProjectsPage() {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

const toggleExpand = (index: number) => {
  setExpandedIndex(expandedIndex === index ? null : index);
};

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            A collection of projects showcasing my expertise in full-stack development, from production apps serving 80+
            schools to innovative AI-powered solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="space-y-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="p-8 bg-card border-border hover:border-primary transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
  {expandedIndex === index ? project.longDescription : project.description}


{expandedIndex !== index && (
  <Button variant="link" size="sm" onClick={() => toggleExpand(index)}>
    View More
  </Button>
)}</p>

{expandedIndex === index && (
  <div className="mt-2">
    {project.bullets?.map((point, i) => (
      <li key={i} className="text-muted-foreground ml-4 list-disc">
        {point}
      </li>
    ))}
    <Button variant="link" size="sm" onClick={() => toggleExpand(index)}>
      View Less
    </Button>
  </div>
)}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.github !== "#" && (
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.live !== "#" && (
                        <Button asChild size="sm">
                          <Link href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Professional Experience Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.github !== "#" && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Link>
                    </Button>
                  )}
                  {project.live !== "#" && (
                    <Button asChild size="sm">
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20">
          <Card className="p-8 bg-card border-border text-center">
            <h2 className="text-2xl font-bold mb-3">Want to see more?</h2>
            <p className="text-muted-foreground mb-6">
              Check out my GitHub for more projects and open-source contributions.
            </p>
            <Button asChild size="lg">
              <Link href="https://github.com/kbpramod3" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Visit GitHub
              </Link>
            </Button>
          </Card>
        </section>
      </div>
    </div>
  )
}
