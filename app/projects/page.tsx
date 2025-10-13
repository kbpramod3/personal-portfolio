import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Portfolio Manager",
    description: "Full-stack stock portfolio tracker with live market data integration and intelligent caching system.",
    longDescription:
      "Built a comprehensive investment dashboard with real-time market data. Optimized backend performance by implementing caching and in-memory maps, reducing redundant database and API calls by 60%. Features market-aware data fetching with cached fallbacks outside trading hours.",
    tech: ["Next.js", "Node.js", "TypeScript", "TailwindCSS", "AWS RDS", "Vercel"],
    github: "https://github.com/kbpramod",
    live: "#",
    featured: true,
  },
  {
    title: "AI Product Advisor",
    description:
      "Intelligent mobile app that provides AI-powered product recommendations using natural language queries.",
    longDescription:
      "Developed a React Native mobile application that accepts natural language queries and returns AI-powered product recommendations. Integrated Google Gemini 1.5 Flash with strict JSON-schema prompts and offline fallback ranking. Implemented robust error handling and secure token flow.",
    tech: ["React Native", "Expo", "Google Gemini AI", "JavaScript"],
    github: "https://github.com/kbpramod",
    live: "#",
    featured: true,
  },
  {
    title: "Media Platform",
    description: "Secure media microservice with streaming capabilities, JWT authentication, and analytics tracking.",
    longDescription:
      "Built a robust backend for media upload, streaming, and analytics. Implemented JWT-based authentication with 10-minute secure streaming URLs and token blacklisting in Redis. Designed comprehensive analytics system tracking views, unique IPs, and per-day statistics with Redis caching.",
    tech: ["Node.js", "Express", "Prisma", "MySQL", "Redis", "Docker"],
    github: "https://github.com/kbpramod",
    live: "#",
    featured: true,
  },
  {
    title: "Paatashalacloud",
    description: "School management app used by 80+ schools with optimized gallery module and file management.",
    longDescription:
      "Refactored gallery module by replacing base64 media with file storage, significantly improving load speed and media quality. Implemented pagination and UI enhancements. Integrated IIS for centralized file access across mobile and web platforms, scaling upload capacity from 5 to 50+ files per session.",
    tech: ["React", "Node.js", "IIS", "SQL Server"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "BDS Dental E-Commerce",
    description: "Scalable e-commerce platform for dental products with automated inventory management.",
    longDescription:
      "Built the platform from scratch in a team of 4, contributing to scalable architecture and project structure. Used React Context to minimize API calls and enhance state management. Automated inventory branch selection via Digipin post office data. Developed dynamic promotions module with rate limiting and validation.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Clove54",
    description: "Doctor appointment mobile app with user authentication and appointment management.",
    longDescription:
      "Developed full-stack mobile application using MERN stack and Expo React Native. Built comprehensive user authentication system for both doctors and patients, with dedicated dashboards. Implemented REST APIs for appointment scheduling and medical report management. Applied clean architecture design with modular Express backend.",
    tech: ["React Native", "MongoDB", "Express", "Node.js", "Expo"],
    github: "https://github.com/kbpramod",
    live: "#",
    featured: false,
  },
]

export default function ProjectsPage() {
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
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.longDescription}</p>
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
              <Link href="https://github.com/kbpramod" target="_blank" rel="noopener noreferrer">
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
