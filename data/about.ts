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
    degree: "Bachelor of Technology",
    period: "2020 - 2024",
    //grade: "CGPA: 6.88",
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
  
  Backend: ["Node.js", "Express.js", "Django", "REST API", "GraphQL", "BullMQ", "JWT Authentication", "Microservices Architecture"],
  Databases: ["MongoDB", "MySQL", "PostgreSQL", "MariaDB", "Prisma ORM", "Redis", "Caching Strategies"],
  "DevOps / Cloud": ["Docker", "Vercel", "Render", "IIS", "AWS EC2", "AWS RDS", "CI/CD Pipelines"],
  Frontend: ["React.js", "React Native (Expo)", "Next.js", "HTML5", "CSS3", "TailwindCSS"],
  "Methodologies & Tools": ["Agile", "System Design", "Git", "Postman", "Jest", "Code Reviews", "Task Prioritization"],
}

const certifications = [
  {
    name: "Data Science BootCamp",
    issuer: "geeksforgeeks",
    date: "Jan 2025",
    link: "https://www.geeksforgeeks.org/certificate/344915c808be73dfb0366860a6688acc",
  },
  {
    name: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    date: "Jan 2024",
    link: "https://www.hackerrank.com/certificates/3e0f3ab67e22",
  },
  {
    name: "Google Data Analytics Foundation",
    issuer: "Coursera",
    date: "June 2024",
    link: "https://coursera.org/share/f4c44903b26738a50acb80e373ad9f52",
  },
  {
    name: "Python for Data Science",
    issuer: "Cognitive Class",
    date: "Jan 2023",
    link: "https://courses.cognitiveclass.ai/certificates/f2bbae2477c0467ea223b4dbb11b05d5",
  },
]

export { experience, education, skills, certifications };