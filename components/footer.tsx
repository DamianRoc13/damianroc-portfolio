"use client"

import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground">© 2025 Damian Roc Olivo Barzallo. {t("footer.rights")}</p>
          <p className="text-sm text-muted-foreground mt-2">{t("footer.built")} Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  )
}
