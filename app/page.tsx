import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Mail, MapPin, Phone, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="px-6 py-20 lg:px-12 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4 text-balance">K B Pramod</h1>
          <p className="text-xl lg:text-2xl text-primary font-medium mb-6">Full-Stack Developer</p>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty max-w-2xl mx-auto">
            Building secure, high-performance web and mobile applications with 1+ years of experience in MERN stack and
            React Native. Specialized in creating production-ready solutions that serve real users across 80+ schools.
          </p>
          <div className="flex flex-wrap gap-3 justify-center items-center text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bengaluru, India
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91-7795773988
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              kbpramod7@gmail.com
            </div>
          </div>
          <Button asChild size="lg">
            <a href="mailto:kbpramod7@gmail.com">
              Contact Me <Mail className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12 bg-accent/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
          <Card className="p-6 bg-card border-border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <h3 className="text-lg font-semibold">Software Engineer</h3>
                <p className="text-primary">Softserve Global</p>
              </div>
              <div className="text-sm text-muted-foreground">Feb 2025 – Present</div>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Refactored gallery module improving load speed and media quality for 80+ schools</li>
              <li>• Built BDS Dental E-Commerce Platform from scratch with scalable architecture</li>
              <li>• Developed full-stack mobile app (Clove54) using MERN stack and React Native</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
          <Card className="p-6 bg-card border-border">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">B.Tech in Mechanical Engineering</h3>
                <p className="text-primary">National Institute of Technology Karnataka, Surathkal</p>
                <p className="text-sm text-muted-foreground mt-1">CGPA: 6.88</p>
              </div>
              <div className="text-sm text-muted-foreground">2020 - 2024</div>
            </div>
          </Card>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12 bg-accent/50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
            <Button asChild variant="ghost">
              <Link href="/projects">
                View All <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2">Portfolio Manager</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Full-stack stock portfolio tracker with live market data integration and optimized caching
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Next.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">TypeScript</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">AWS RDS</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kbpramod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2">AI Product Advisor</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Mobile app with natural language queries and AI-powered product recommendations using Google Gemini
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">React Native</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Gemini AI</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Expo</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kbpramod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-colors">
              <h3 className="text-lg font-semibold mb-2">Media Platform</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Secure media microservice with JWT authentication, streaming, and analytics tracking
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Node.js</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Redis</span>
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded">Docker</span>
              </div>
              <div className="flex gap-3">
                <a
                  href="https://github.com/kbpramod"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-12 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3 text-primary">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">JavaScript</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">TypeScript</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">Python</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">SQL</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3 text-primary">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">React.js</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">Next.js</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">React Native</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">TailwindCSS</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3 text-primary">Backend</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">Node.js</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">Express.js</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">REST API</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">GraphQL</span>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold mb-3 text-primary">Database & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">MongoDB</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">PostgreSQL</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">Redis</span>
                <span className="px-3 py-1 bg-accent text-foreground text-sm rounded">Docker</span>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
