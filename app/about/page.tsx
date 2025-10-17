import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award } from "lucide-react"
import Link from "next/link"
import { experience, education, skills, certifications } from "@/data/about"

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-12 lg:py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl">
            Full-stack developer passionate about building secure, high-performance web and mobile applications. I
            specialize in the MERN stack and React Native, with a focus on creating production-ready solutions that
            serve real users.
          </p>
        </div>

        {/* Experience Section */}
        <section className="mb-20" id="experience">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="p-8 bg-card border-border">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-lg text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 lg:mt-0">{exp.period}</div>
                </div>

                <div className="space-y-6">
                  {exp.projects.map((project, pIndex) => (
                    <div key={pIndex}>
                      <h4 className="font-semibold text-lg mb-3">{project.name}</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, aIndex) => (
                          <li key={aIndex} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20" id="education">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card border-border">
                <h3 className="text-xl font-bold mb-2">{edu.institution}</h3>
                <p className="text-primary mb-2">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mb-1">{edu.period}</p>
                <p className="text-sm font-medium">{edu.grade}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20" id="skills">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="p-6 bg-card border-border">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications Section */}
        <section className="mb-20" id="certifications">
          <h2 className="text-3xl font-bold mb-8">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.date}</p>
                  </div>
                  {cert.link !== "#" && (
                    <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary" />
                    </Link>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <Card className="p-8 bg-card border-border">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm currently available for freelance work and full-time opportunities. Feel free to reach out if you'd
              like to discuss a project or just want to connect!
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:kbpramod7@gmail.com" className="font-medium hover:text-primary transition-colors">
                    kbpramod7@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a href="tel:+917795773988" className="font-medium hover:text-primary transition-colors">
                    +91-7795773988
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">Bengaluru, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/kbpramod"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    linkedin.com/in/kbpramod
                  </a>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="mailto:kbpramod7@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/kbpramod3" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  )
}
