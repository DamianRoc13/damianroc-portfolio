"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { Logo } from "@/components/logo";

export function Hero() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-88 lg:h-88 mx-auto flex items-center justify-center mb-2">
            <Logo className="w-full h-full" />
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
              <span className="text-foreground">Damian Roc</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary text-balance">
              Olivo Barzallo
            </h2>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium text-balance">
            {t("hero.title")}
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t("hero.description")}
          </p>

          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 bg-transparent hover:bg-primary/10 transition-colors"
              asChild
            >
              <a
                href="https://github.com/DamianRoc13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 bg-transparent hover:bg-primary/10 transition-colors"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/damian-olivo-a8a419371/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-12 w-12 bg-transparent hover:bg-primary/10 transition-colors"
              asChild
            >
              <a href="mailto:damianolivo2018@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>

          <div className="">
            <button
              onClick={scrollToProjects}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
