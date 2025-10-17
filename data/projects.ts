const projects = [
  {
  title: "Portfolio Manager – AI-Powered Investment Dashboard",
  description: "Secure full-stack investment dashboard with real-time market data and AI-powered recommendations.",
  longDescription: "Developed a secure portfolio tracker with real-time market data and Gemini AI-powered investment suggestions. Implemented salted password hashing, cookie-based JWT authentication with token blacklisting, and BullMQ microservices for email verification and OTP delivery. Optimized backend caching and in-memory maps reducing redundant API/DB calls by 60%. Deployed modular TypeScript APIs with CI/CD pipelines on Render and Vercel, and background worker services on AWS EC2.",
  bullets: [
    "Designed microservices architecture separating stock and user services",
    "Built BullMQ producer/worker microservices for background tasks (email verification, OTP) using Redis",
    "Implemented secure JWT authentication with salted password hashing and token blacklisting",
    "Optimized backend caching + in-memory maps, reducing redundant API/DB calls by 60%",
    "Deployed modular TypeScript APIs via CI/CD pipelines on Render and Vercel",
    "Deployed Portfolio Worker service on AWS EC2 for scalable background job execution"
  ],
  tech: ["Next.js", "TypeScript", "Node.js", "TailwindCSS", "Redis", "BullMQ", "AWS RDS", "AWS EC2", "Vercel", "Render"],
  github: "https://github.com/kbpramod3/portfolio-client",
  live: "https://portfolio-manager-ivory.vercel.app/",
  featured: true
},

  {
  title: "Media Platform – Secure Media Microservice",
  description: "Backend microservice for secure media upload, streaming, and analytics tracking.",
  longDescription: "Built a robust backend for media management with secure streaming and analytics tracking. Implemented JWT-based authentication with 10-minute secure URLs and token blacklisting in Redis. Designed real-time analytics tracking views, unique IPs, and daily stats using Redis caching and Prisma ORM. Added unit tests with Jest and centralized error handling. Deployed the microservice using Docker for scalable production-ready operations.",
  bullets: [
    "Implemented JWT authentication with secure 10-minute streaming URLs and token blacklisting in Redis",
    "Designed real-time analytics tracking (views, unique IPs, per-day stats) using Redis caching and Prisma ORM",
    "Built modular Express APIs for media upload, streaming, and analytics",
    "Added unit tests with Jest and centralized error handling",
    "Deployed media microservice using Docker for scalable production-ready operations"
  ],
  tech: ["Node.js", "Express", "Prisma", "MySQL", "Redis", "Docker", "Jest"],
  github: "https://github.com/kbpramod3/klantroef",
  live: "#",
  featured: true
},
  {
    title: "AI Product Advisor",
    description:
      "Intelligent mobile app that provides AI-powered product recommendations using natural language queries.",
    longDescription:
      "Developed a React Native mobile application that accepts natural language queries and returns AI-powered product recommendations. Integrated Google Gemini 1.5 Flash with strict JSON-schema prompts and offline fallback ranking. Implemented robust error handling and secure token flow.",
    bullets: [
      "Natural language processing for user queries.",
      "Integration with Google Gemini 1.5 Flash for AI recommendations.",
      "Offline fallback mechanism for reliable performance.",
    ],
      tech: ["React Native", "Expo", "Google Gemini AI", "JavaScript"],
    github: "https://github.com/kbpramod3/ai-product-advisor",
    live: "#",
    featured: true,
  },
  {
    title: "Paatashalacloud",
    description: "School management app used by 80+ schools with optimized gallery module and file management.",
    longDescription:
      "Refactored gallery module by replacing base64 media with file storage, significantly improving load speed and media quality. Implemented pagination and UI enhancements. Integrated IIS for centralized file access across mobile and web platforms, scaling upload capacity from 5 to 50+ files per session.",
    bullets: [
      "Optimized media handling for faster load times.",
      "Centralized file storage with IIS integration.",
      "Scalable architecture supporting 80+ schools.",
    ],
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
    bullets: [
      "Scalable architecture for growing product catalog.",
      "Automated inventory management with Digipin integration.",
      "Dynamic promotions module with robust validation.",
    ],
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
    bullets: [
      "User authentication for doctors and patients.",
      "Appointment scheduling and management system.",
      "Modular backend architecture for scalability.",
    ],
      tech: ["React Native", "MongoDB", "Express", "Node.js", "Expo"],
    github: "https://github.com/kbpramod3",
    live: "#",
    featured: false,
  },
  {
  title: "mimetype-file",
  description: "Lightweight npm package to get file MIME types easily in JavaScript/TypeScript.",
  tech: ["JavaScript", "TypeScript", "npm"],
  github: "https://github.com/kbpramod/mimetype-file",
  live: "https://www.npmjs.com/package/mimetype-file",
  featured: true
}

]

export default projects;