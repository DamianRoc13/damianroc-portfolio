"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { LanguageProvider } from "@/hooks/use-language"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <LanguageProvider>{children}</LanguageProvider>
    </NextThemesProvider>
  )
}
