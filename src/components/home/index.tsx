"use client"

import { useCallback, useEffect, useState } from "react"
import { Config } from "@/config"
import { motion } from "framer-motion"
import { ArrowDownRight, ArrowUp, Compass, Search } from "lucide-react"

import { cn } from "@/lib/utils"

import { About } from "@/components/home/about"
import { Footer } from "@/components/home/footer"
import { SearchInput } from "@/components/home/search-input"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { Button } from "@/components/ui/button"

export function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      setShowScrollTop(window.scrollY > 320)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element) return

    const headerOffset = 88
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled &&
            "border-border/60 bg-background/30 border-b shadow-sm backdrop-blur"
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="from-primary to-chart-2 text-primary-foreground flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
              <Search className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] uppercase">
                {Config.title}
              </p>
              <p className="text-muted-foreground text-xs">
                index-focused search
              </p>
            </div>
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <button
              onClick={() => scrollToSection("search")}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Search
            </button>
            <button
              onClick={() => scrollToSection("techniques")}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Techniques
            </button>
            <button
              onClick={() => scrollToSection("signals")}
              className="text-muted-foreground hover:text-foreground text-sm"
            >
              Why it works
            </button>
            <ThemeSwitcher />
          </div>

          <div className="md:hidden">
            <ThemeSwitcher />
          </div>
        </div>
      </header>

      <main className="relative overflow-hidden pt-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[38rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.16),transparent_45%),radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.16),transparent_24%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.24)_55%,transparent)] dark:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.04)_55%,transparent)]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
          <section
            id="home"
            className="flex min-h-[calc(100vh-4rem)] items-center py-18 lg:py-24"
          >
            <div className="w-full space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-6 text-center"
              >
                <div className="border-border/70 bg-background/55 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase shadow-sm backdrop-blur">
                  <Compass className="text-primary h-3.5 w-3.5" />
                  live query builder
                </div>

                <h1 className="mx-auto max-w-4xl text-5xl leading-[0.95] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                  Search open directories
                  <span className="text-primary block">with less junk.</span>
                </h1>

                <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-8 sm:text-lg">
                  {Config.description} Pick engine, file type, mode. Query
                  builder does ext targeting, index signals, noise filtering.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              >
                <Button
                  size="lg"
                  className="h-12 rounded-full px-6"
                  onClick={() => scrollToSection("search")}
                >
                  Start Search
                  <ArrowDownRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full px-6"
                  onClick={() => scrollToSection("techniques")}
                >
                  See Techniques
                </Button>
              </motion.div>
            </div>
          </section>

          <section id="search" className="scroll-mt-24 py-8 lg:py-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="border-border/60 bg-background/78 rounded-[2rem] border p-5 shadow-xl backdrop-blur sm:p-8">
                <div className="mb-6 flex flex-col gap-2 text-left">
                  <p className="text-sm font-semibold tracking-[0.18em] uppercase">
                    Search
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Choose options. Type title. Open cleaner query.
                  </p>
                </div>
                <SearchInput />
              </div>
            </motion.div>
          </section>

          <section id="about" className="scroll-mt-24">
            <section id="signals" className="scroll-mt-24 pt-10">
              <About />
            </section>
          </section>
        </div>
      </main>

      <motion.div
        initial={false}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          y: showScrollTop ? 0 : 16,
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6"
      >
        <Button
          type="button"
          size="icon"
          onClick={scrollToTop}
          className="h-12 w-12 rounded-full shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>

      <Footer scrollToSection={scrollToSection} />
    </>
  )
}
