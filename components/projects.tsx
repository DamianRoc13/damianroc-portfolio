"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: "Vista Trading Network",
      description:
        "Página web corporativa para presentar la empresa Vista Trading Network. Uno de mis primeros proyectos desarrollado con tecnologías básicas y enfoque en diseño limpio y profesional.",
      image: "/vtn.png",
      technologies: ["HTML", "Tailwind CSS"],
      demo: "https://vistatradingnetwork.com/",
    },
    {
      title: "Sistema de Gestión de Talento Humano - Transcoralv",
      description:
        "Plataforma integral de recursos humanos desarrollada para optimizar la gestión del talento en Transcoralv. La aplicación incluye módulos de administración de empleados, evaluación automatizada de KPIs con reportes históricos mensuales, sistema de tickets para gestión de incidencias y descuentos, arquitectura basada en roles con diferentes niveles de acceso, y panel administrativo para la creación y gestión de usuarios.",
      image: "/transcoral.png",
      technologies: ["React", "NestJS", "PostgreSQL", "Cloudinary"],
      github: "#",
      demo: "https://anto.up.railway.app/",
    },
    {
      title: "Ejecutables de Automatización - Transcoralv",
      description:
        "Suite de herramientas de automatización desarrollada para optimizar procesos operativos en Transcoralv. Incluye dos aplicaciones principales: sistema de consulta masiva de multas ANT mediante procesamiento de archivos Excel desde diferentes coordinaciones, y automatizador de descarga de comprobantes SRI con integración a Odoo para control de duplicados y clasificación por empresa emisora.",
      image: "/eje.jpeg",
      technologies: ["Python", "Flask", "Selenium", "APIs", "Excel Processing"],
      github: "#",
      demo: "#",
      showDemo: false,
    },
    {
      title: "GITAF y ANI - Proyectos Académicos",
      description:
        "Dos proyectos innovadores desarrollados durante mis estudios. GITAF: aplicación móvil con React Native diseñada para personas con discapacidad visual, enfocada en entrenamientos de fútbol y práctica de penales. ANI: plataforma completa de debates estudiantiles con arquitectura de microservicios, que genera grafos de conocimiento mediante IA para proporcionar resúmenes automáticos de debates a profesores.",
      image: "/gitaf.jpeg",
      technologies: ["React Native", "React", "NestJS", "Microservicios", "IA"],
      github: "#",
      demo: "#",
      showDemo: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {t("projects.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("projects.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.showDemo !== false && (
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {t("projects.liveDemo")}
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
