"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, X } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export function Contact() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "damianolivo2018@gmail.com",
      href: "mailto:damianolivo2018@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+593 99 050 3558",
      href: "tel:+593990503558",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Cuenca, Ecuador",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/DamianRoc13",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/damian-olivo-a8a419371/",
    },
    {
      icon: X,
      label: "X",
      href: "https://x.com/DamianRocOlivo",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("contact.info.title")}
              </CardTitle>
              <CardDescription>{t("contact.info.description")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <info.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl">
                {t("contact.social.title")}
              </CardTitle>
              <CardDescription>
                {t("contact.social.description")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    asChild
                    className="h-12 w-12 bg-transparent"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
