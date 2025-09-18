"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Education() {
  const { t } = useLanguage()

  const education = [
    {
      degree: t("education.degree.title"),
      institution: "Instituto Tecnológico Sudamericano",
      location: "Cuenca, Ecuador",
      period: "2023 - 2025",
      description: t("education.degree.description"),
    },
  ]

  const certifications = [
    "Cisco Certified Network Associate (CCNA)",
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">{t("education.title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{t("education.subtitle")}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              {t("education.formal")}
            </h3>
            <div className="grid gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                      <MapPin className="h-4 w-4 ml-2" />
                      <span>{edu.location}</span>
                    </div>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary">{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-pretty">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">{t("education.certifications")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">{cert}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
