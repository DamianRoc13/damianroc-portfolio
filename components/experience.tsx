"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.senior.title"),
      company: "Vista Trading Network",
      location: "Remoto - Shenzhen, China",
      period: "2024 - actualidad",
      description: t("experience.senior.description"),
      technologies: ["Astro", "Next.js", "Tailwind CSS"],
    },
    {
      title: t("experience.senior.title"),
      company: "Transcoralv S.A.",
      location: "Hibrido - Cuenca, Ecuador",
      period: "2025 Febrero - 2025 Agosto",
      description: t("experience.senior.description"),
      technologies: ["React", "NestJs", "Python", "Astro", "PostgreSQL"],
    },
   
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("experience.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("experience.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <MapPin className="h-4 w-4 ml-2" />
                        <span>{exp.location}</span>
                      </div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary">{exp.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-pretty">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
