import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Award } from "lucide-react"
import Link from "next/link"

const experience = [
  {
    company: "Softserve Global",
    role: "Software Engineer",
    location: "Bengaluru",
    period: "Feb 2025 – Present",
    projects: [
      {
        name: "Paatashalacloud – School Management App",
        achievements: [
          "Refactored gallery module by replacing base64 media with file storage (wwwroot + GUIDs), improving load speed and media quality",
          "Implemented pagination and UI enhancements, optimizing responsiveness and user experience",
          "Integrated IIS for centralized file access across mobile and web; scaled upload capacity from 5 → 50+ files per session (used by 80+ schools)",
          "Developed secure file workflows, metadata tagging, and API integrations",
        ],
      },
      {
        name: "BDS Dental E-Commerce Platform",
        achievements: [
          "Built the platform from scratch in a team of 4, contributing to scalable architecture and project structure",
          "Used React Context to minimize API calls and enhance state management",
          "Automated inventory branch selection via Digipin post office data",
          "Developed dynamic promotions module and implemented upload middleware with rate limiting/validation",
        ],
      },
      {
        name: "Clove54 – Doctor Appointment App",
        achievements: [
          "Developed full-stack mobile app using MERN stack and Expo React Native",
          "Built user auth (Doctor/Patient), dashboards, and REST APIs for appointments and reports",
          "Applied clean architecture design, modular Express backend, and mobile-first API integration",
        ],
      },
    ],
  },
]

const education = [
  {
    institution: "National Institute of Technology Karnataka Surathkal",
    degree: "B.Tech in Mechanical Engineering",
    period: "2020 - 2024",
    grade: "CGPA: 6.88",
  },
  {
    institution: "Jawahar Navodaya Vidyalaya Tumkur",
    degree: "CBSE",
    period: "2018 - 2020",
    grade: "XII: 93.8% | X: 94.6%",
  },
]

const skills = {
  "Programming Languages": ["JavaScript (ES6+)", "TypeScript", "Python", "SQL"],
  Frontend: ["React.js", "React Native (Expo)", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
  Backend: ["Node.js", "Express.js", "Django", "REST API", "GraphQL"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "MariaDB", "Prisma ORM", "Redis"],
  "DevOps / Cloud": ["Docker", "Vercel", "Render", "IIS", "AWS RDS"],
  "Methodologies & Tools": ["Agile", "System Design", "Git", "Postman", "Jest"],
}

const certifications = [
  {
    name: "Data Science BootCamp",
    issuer: "geeksforgeeks",
    date: "Jan 2025",
    link: "#",
  },
  {
    name: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    date: "Jan 2024",
    link: "#",
  },
  {
    name: "Google Data Analytics Foundation",
    issuer: "Coursera",
    date: "June 2024",
    link: "#",
  },
  {
    name: "Python for Data Science",
    issuer: "Cognitive Class",
    date: "Jan 2023",
    link: "#",
  },
]

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
                <Link href="https://github.com/kbpramod" target="_blank" rel="noopener noreferrer">
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
