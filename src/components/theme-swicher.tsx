"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }, [resolvedTheme, setTheme])

  return (
    <button
      onClick={toggleTheme}
      className="text-primary bg-primary/5 hover:bg-primary/10 cursor-pointer rounded-lg p-2 transition-colors"
    >
      <SunIcon className="hidden h-4 w-4 [html.dark_&]:block" />
      <MoonIcon className="hidden h-4 w-4 [html.light_&]:block" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
