import NextTopLoader from "nextjs-toploader"

import { Toaster } from "@/components/ui/toaster"

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
      {children}
      <Toaster />
      <NextTopLoader showForHashAnchor={false} />
    </ThemeProvider>
  )
}
