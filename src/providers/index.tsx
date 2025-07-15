import NextTopLoader from "nextjs-toploader"

import { Toaster } from "@/components/ui/toaster"
import { ThemeSwitcher } from "@/components/theme-switcher"

import { ThemeProvider } from "./theme-provider"

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
    >
      <ThemeSwitcher>{children}</ThemeSwitcher>
      <Toaster />
      <NextTopLoader />
    </ThemeProvider>
  )
}
