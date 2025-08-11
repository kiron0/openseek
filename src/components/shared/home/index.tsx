"use client"

import { useCallback } from "react"
import { Config } from "@/config"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

import { About } from "@/components/shared/home/about"
import { Footer } from "@/components/shared/home/footer"
import { SearchInput } from "@/components/shared/home/search-input"
import { ThemeSwitcher } from "@/components/theme-switcher"

export function Home() {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Height of sticky header + some padding
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [])

  return (
    <>
      <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-primary flex items-center space-x-2 transition-colors"
            >
              <Search className="h-6 w-6" />
              <span className="text-lg font-bold sm:text-xl">
                {Config.title}
              </span>
            </button>
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <div className="relative min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 h-80 w-80 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="bg-secondary/20 absolute -bottom-40 -left-40 h-80 w-80 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-32">
          <section
            id="home"
            className="mb-16 scroll-mt-20 text-center sm:mb-20 lg:mb-24"
          >
            <motion.h1
              className="text-primary mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {Config.title}
            </motion.h1>
            <motion.p
              className="text-muted-foreground mx-auto max-w-3xl px-4 text-base leading-relaxed sm:text-lg lg:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {Config.slogan}
            </motion.p>
            <motion.div
              className="mt-6 flex justify-center px-4 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <div className="bg-muted/50 flex items-center space-x-2 rounded-full px-3 py-2 text-sm sm:px-4">
                <motion.div
                  className="h-2 w-2 rounded-full bg-green-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="text-xs sm:text-sm">
                  Search millions of open directories
                </span>
              </div>
            </motion.div>
          </section>

          <motion.section
            id="search"
            className="scroll-mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <SearchInput />
          </motion.section>

          <motion.section
            id="about"
            className="scroll-mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <About />
          </motion.section>
        </div>
      </div>
      <Footer scrollToSection={scrollToSection} />
    </>
  )
}
