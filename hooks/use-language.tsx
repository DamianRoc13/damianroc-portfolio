"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.education": "Educación",
    "nav.contact": "Contacto",
    toggleLanguage: "Cambiar idioma",
    toggleTheme: "Cambiar tema",
    toggleMenu: "Abrir menú",

    // Hero
    "hero.title": "Desarrollador Full Stack",
    "hero.description":
      "Motivado en crear experiencias web modernas y aplicaciones escalables usando las últimas tecnologías. Interesado por el código y las mejores prácticas.",
    "hero.viewWork": "Ver mi trabajo",
    "hero.downloadCV": "Descargar CV",

    // Projects
    "projects.title": "Mis Proyectos",
    "projects.subtitle": "Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo web.",
    "projects.viewCode": "Ver código",
    "projects.liveDemo": "Demo en vivo",
    "projects.ecommerce.description":
      "Plataforma de comercio electrónico completa con carrito de compras, procesamiento de pagos y panel de administración.",
    "projects.taskapp.description":
      "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y seguimiento de progreso.",
    "projects.weather.description":
      "Dashboard del clima con visualizaciones interactivas y pronósticos detallados usando APIs externas.",
    "projects.analytics.description":
      "Herramienta de análisis de redes sociales con métricas avanzadas y reportes personalizables.",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.subtitle": "Tecnologías y herramientas que domino para crear soluciones web robustas y escalables.",
    "skills.frontend.title": "Frontend",
    "skills.backend.title": "Backend",
    "skills.tools.title": "Herramientas",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.subtitle": "Mi trayectoria profesional desarrollando soluciones tecnológicas innovadoras.",
    "experience.senior.title": "Desarrollador de software",
    "experience.senior.description":
      "Desarrollo web individual para creación de páginas web, control de planes de hosting y dominios.",
    "experience.fullstack.title": "Desarrollador Full Stack",
    "experience.fullstack.description":
      "Desarrollé aplicaciones web end-to-end para diversos clientes, desde startups hasta empresas establecidas.",
    "experience.frontend.title": "Desarrollador Frontend",
    "experience.frontend.description":
      "Creé interfaces de usuario responsivas y accesibles, colaborando estrechamente con diseñadores UX/UI.",

    // Education
    "education.title": "Educación y Certificaciones",
    "education.subtitle":
      "Mi formación académica y certificaciones profesionales que respaldan mi experiencia técnica.",
    "education.formal": "Educación Formal",
    "education.certifications": "Certificaciones",
    "education.degree.title": "Desarrollador de Software",
    "education.degree.description":
      "Formación sólida en fundamentos de programación, estructuras de datos, algoritmos y arquitectura de software.",
    "education.bootcamp.title": "Bootcamp de Desarrollo Web Full Stack",
    "education.bootcamp.description":
      "Programa intensivo enfocado en tecnologías web modernas y metodologías ágiles de desarrollo.",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? Me encantaría escuchar sobre él y discutir cómo puedo ayudarte.",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.description": "Completa el formulario y te responderé lo antes posible.",
    "contact.form.name": "Tu nombre",
    "contact.form.email": "Tu email",
    "contact.form.message": "Tu mensaje",
    "contact.form.send": "Enviar mensaje",
    "contact.info.title": "Información de contacto",
    "contact.info.description": "También puedes contactarme directamente a través de estos medios.",
    "contact.social.title": "Redes sociales",
    "contact.social.description": "Sígueme en mis redes sociales para estar al día con mis proyectos.",

    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.built": "Construido con",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    toggleLanguage: "Toggle language",
    toggleTheme: "Toggle theme",
    toggleMenu: "Toggle menu",

    // Hero
    "hero.title": "Full Stack Developer",
    "hero.description":
      "Specialized in creating modern web experiences and scalable applications using the latest technologies. Passionate about clean code and best practices.",
    "hero.viewWork": "View my work",
    "hero.downloadCV": "Download CV",

    // Projects
    "projects.title": "My Projects",
    "projects.subtitle": "A selection of projects that demonstrate my skills and experience in web development.",
    "projects.viewCode": "View code",
    "projects.liveDemo": "Live demo",
    "projects.ecommerce.description":
      "Complete e-commerce platform with shopping cart, payment processing, and admin dashboard.",
    "projects.taskapp.description":
      "Task management application with real-time collaboration features and progress tracking.",
    "projects.weather.description":
      "Weather dashboard with interactive visualizations and detailed forecasts using external APIs.",
    "projects.analytics.description": "Social media analytics tool with advanced metrics and customizable reports.",

    // Skills
    "skills.title": "Technical Skills",
    "skills.subtitle": "Technologies and tools I master to create robust and scalable web solutions.",
    "skills.frontend.title": "Frontend",
    "skills.backend.title": "Backend",
    "skills.tools.title": "Tools",

    // Experience
    "experience.title": "Professional Experience",
    "experience.subtitle": "My professional journey developing innovative technological solutions.",
    "experience.senior.title": "Senior Full Stack Developer",
    "experience.senior.description":
      "Led development of complex web applications, mentored junior developers, and implemented development best practices.",
    "experience.fullstack.title": "Full Stack Developer",
    "experience.fullstack.description":
      "Developed end-to-end web applications for various clients, from startups to established companies.",
    "experience.frontend.title": "Frontend Developer",
    "experience.frontend.description":
      "Created responsive and accessible user interfaces, working closely with UX/UI designers.",

    // Education
    "education.title": "Education & Certifications",
    "education.subtitle": "My academic background and professional certifications that support my technical expertise.",
    "education.formal": "Formal Education",
    "education.certifications": "Certifications",
    "education.degree.title": "Systems Engineering",
    "education.degree.description":
      "Solid foundation in programming fundamentals, data structures, algorithms, and software architecture.",
    "education.bootcamp.title": "Full Stack Web Development Bootcamp",
    "education.bootcamp.description":
      "Intensive program focused on modern web technologies and agile development methodologies.",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? I'd love to hear about it and discuss how I can help you.",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.form.title": "Send me a message",
    "contact.form.description": "Fill out the form and I'll get back to you as soon as possible.",
    "contact.form.name": "Your name",
    "contact.form.email": "Your email",
    "contact.form.message": "Your message",
    "contact.form.send": "Send message",
    "contact.info.title": "Contact information",
    "contact.info.description": "You can also contact me directly through these means.",
    "contact.social.title": "Social media",
    "contact.social.description": "Follow me on social media to stay updated with my projects.",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.built": "Built with",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
