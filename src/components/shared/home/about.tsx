import { Config } from "@/config"
import { motion } from "framer-motion"
import {
  Code2,
  FileText,
  Globe,
  Music,
  Shield,
  Target,
  Tv,
  Zap,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  }

  return (
    <motion.div
      className="mt-16 space-y-20 sm:mt-20 lg:mt-24"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div className="space-y-10" variants={containerVariants}>
        <motion.div className="text-center" variants={itemVariants}>
          <motion.h2
            className="text-primary mb-6 scroll-mt-20 text-2xl font-bold sm:text-3xl lg:text-4xl"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            About This Tool
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl px-4 text-sm sm:text-base lg:text-lg"
            variants={itemVariants}
          >
            Discover how OpenSeek helps you find open directories across the web
            with advanced search capabilities and multiple search engines.
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="h-full"
        >
          <Card className="group hover:border-primary/30 hover:shadow-primary/5 bg-card/95 flex h-full flex-col backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
            <CardContent className="flex-1 space-y-3">
              <div className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                <div className="mt-1 rounded-full bg-blue-500/20 p-1">
                  <Globe className="h-3 w-3 text-blue-500" />
                </div>
                <p className="text-muted-foreground text-sm">
                  This tool helps you find open directories on the web using
                  advanced search techniques and multiple search engines.
                </p>
              </div>

              <div className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                <div className="mt-1 rounded-full bg-green-500/20 p-1">
                  <FileText className="h-3 w-3 text-green-500" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Open directories are publicly accessible folders on web
                  servers that often contain downloadable content like videos,
                  music, books, and software.
                </p>
              </div>

              <div className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                <div className="mt-1 rounded-full bg-purple-500/20 p-1">
                  <Zap className="h-3 w-3 text-purple-500" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Advanced search operators and filters help you find exactly
                  what you&apos;re looking for quickly and efficiently.
                </p>
              </div>

              <div className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                <div className="mt-1 rounded-full bg-orange-500/20 p-1">
                  <Target className="h-3 w-3 text-orange-500" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Results are ranked by relevance and filtered to show only
                  accessible directories with your desired content.
                </p>
              </div>

              <div className="hover:bg-muted/50 flex items-center gap-3 rounded-lg border border-amber-200/50 bg-amber-50/50 p-2 transition-colors dark:border-amber-800/50 dark:bg-amber-950/20">
                <div className="rounded-full bg-amber-500/20 p-1">
                  <Shield className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                </div>
                <p className="text-sm font-medium text-amber-800 dark:text-amber-200">
                  Please respect copyright laws and only download content you
                  have rights to access.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.div className="space-y-10" variants={containerVariants}>
        <motion.div className="text-center" variants={itemVariants}>
          <motion.h2
            id="techniques"
            className="text-primary mb-6 scroll-mt-20 text-2xl font-bold sm:text-3xl lg:text-4xl"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Search Techniques
          </motion.h2>
          <motion.p
            className="text-muted-foreground mx-auto max-w-2xl px-4 text-sm sm:text-base lg:text-lg"
            variants={itemVariants}
          >
            Master advanced search techniques to find exactly what you need
            across different file types and content categories.
          </motion.p>
        </motion.div>

        <motion.div
          variants={cardVariants}
          whileHover={{ y: -5 }}
          className="h-full"
        >
          <Card className="group hover:border-primary/30 hover:shadow-primary/5 bg-card/95 flex h-full flex-col backdrop-blur-sm transition-all duration-300 hover:shadow-lg">
            <CardContent className="flex-1">
              <ul className="space-y-3">
                <li className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                  <div className="bg-primary/20 mt-1 rounded-full p-1">
                    <Target className="text-primary h-3 w-3" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">
                      Specific search terms:
                    </span>
                    <div className="text-primary bg-primary/10 mt-1 rounded px-2 py-1 font-mono text-sm">
                      The.Blacklist.S01
                    </div>
                  </div>
                </li>
                <li className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                  <div className="mt-1 rounded-full bg-blue-500/20 p-1">
                    <Tv className="h-3 w-3 text-blue-500" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">For TV shows:</span>
                    <div className="mt-1 rounded bg-blue-500/10 px-2 py-1 font-mono text-sm text-blue-500">
                      Show.Name.S01E01
                    </div>
                  </div>
                </li>
                <li className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                  <div className="mt-1 rounded-full bg-green-500/20 p-1">
                    <Music className="h-3 w-3 text-green-500" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">For music:</span>
                    <div className="mt-1 rounded bg-green-500/10 px-2 py-1 font-mono text-sm text-green-500">
                      Artist.Album.Year
                    </div>
                  </div>
                </li>
                <li className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                  <div className="mt-1 rounded-full bg-purple-500/20 p-1">
                    <Code2 className="h-3 w-3 text-purple-500" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">For software:</span>
                    <div className="mt-1 rounded bg-purple-500/10 px-2 py-1 font-mono text-sm text-purple-500">
                      Software.Name.v1.0
                    </div>
                  </div>
                </li>
                <li className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                  <div className="mt-1 rounded-full bg-indigo-500/20 p-1">
                    <FileText className="h-3 w-3 text-indigo-500" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">For documents:</span>
                    <div className="mt-1 rounded bg-indigo-500/10 px-2 py-1 font-mono text-sm text-indigo-500">
                      Research.Paper.2024
                    </div>
                  </div>
                </li>
                <li className="hover:bg-muted/50 flex items-start gap-3 rounded-lg p-2 transition-colors">
                  <div className="mt-1 rounded-full bg-pink-500/20 p-1">
                    <Tv className="h-3 w-3 text-pink-500" />
                  </div>
                  <div>
                    <span className="text-sm font-medium">
                      For presentations:
                    </span>
                    <div className="mt-1 rounded bg-pink-500/10 px-2 py-1 font-mono text-sm text-pink-500">
                      Business.Presentation.2024
                    </div>
                  </div>
                </li>
                <li className="hover:bg-muted/50 flex items-center gap-3 rounded-lg p-2 transition-colors">
                  <div className="rounded-full bg-orange-500/20 p-1">
                    <Zap className="h-3 w-3 text-orange-500" />
                  </div>
                  <span className="text-sm">
                    Combine with file type for better results
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      <motion.section
        id="features"
        className="scroll-mt-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.h3
          className="mb-10 text-center text-2xl font-bold sm:text-3xl lg:text-4xl"
          variants={itemVariants}
        >
          Why Choose {Config.title}?
        </motion.h3>
        <motion.div
          className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          <motion.div
            className="hover:border-primary/30 group rounded-lg border p-6 text-center transition-all duration-300 hover:shadow-lg"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="h-6 w-6 text-blue-500" />
            </motion.div>
            <h4 className="mb-2 font-semibold">Multiple Search Engines</h4>
            <p className="text-muted-foreground text-sm">
              Search across Google, Bing, DuckDuckGo, and more specialized
              engines
            </p>
          </motion.div>

          <motion.div
            className="hover:border-primary/30 group rounded-lg border p-6 text-center transition-all duration-300 hover:shadow-lg"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Zap className="h-6 w-6 text-green-500" />
            </motion.div>
            <h4 className="mb-2 font-semibold">Advanced Filtering</h4>
            <p className="text-muted-foreground text-sm">
              Filter by file types and use advanced search operators
              automatically
            </p>
          </motion.div>

          <motion.div
            className="hover:border-primary/30 group rounded-lg border p-6 text-center transition-all duration-300 hover:shadow-lg"
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              <Target className="h-6 w-6 text-purple-500" />
            </motion.div>
            <h4 className="mb-2 font-semibold">Precise Results</h4>
            <p className="text-muted-foreground text-sm">
              Find exactly what you&apos;re looking for with optimized search
              queries
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
