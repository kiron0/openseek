import { Config } from "@/config"
<<<<<<< HEAD

export function Footer() {
  return (
    <footer className="text-muted-foreground mt-12 py-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Copyright | {Config.title}
      </p>
      <p>All rights reserved.</p>
=======
import { motion } from "framer-motion"
import { Github, Heart, Mail, Search, Twitter } from "lucide-react"

interface FooterProps {
  scrollToSection: (sectionId: string) => void
}

export function Footer({ scrollToSection }: FooterProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  return (
    <footer className="border-border/40 bg-muted/20 relative overflow-hidden border-t">
      <motion.div
        className="bg-primary/5 absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
        >
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <motion.div
              className="mb-4 flex items-center gap-2"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Search className="h-7 w-7" />
              <span className="text-xl font-bold">{Config.title}</span>
            </motion.div>
            <motion.p
              className="text-muted-foreground mb-6 max-w-md text-sm"
              variants={itemVariants}
            >
              {Config.description}
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              variants={containerVariants}
            >
              <motion.a
                href={Config.author.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg p-2 transition-all duration-200"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <Github className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={Config.author.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted rounded-lg p-2 transition-all duration-200 hover:bg-blue-500 hover:text-white"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                href={`mailto:${Config.author.email}`}
                className="bg-muted rounded-lg p-2 transition-all duration-200 hover:bg-green-500 hover:text-white"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <Mail className="h-4 w-4" />
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <motion.ul
              className="space-y-2 text-sm"
              variants={containerVariants}
            >
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-left transition-colors"
                >
                  Home
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => scrollToSection("search")}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-left transition-colors"
                >
                  Search Tool
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => scrollToSection("techniques")}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-left transition-colors"
                >
                  Search Techniques
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-left transition-colors"
                >
                  About
                </button>
              </motion.li>
              <motion.li variants={itemVariants}>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-muted-foreground hover:text-primary cursor-pointer text-left transition-colors"
                >
                  Features
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="border-border/40 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row"
          variants={containerVariants}
        >
          <motion.div
            className="text-muted-foreground text-sm"
            variants={itemVariants}
          >
            &copy; {new Date().getFullYear()}{" "}
            <span className="font-bold">{Config.title}</span>. Made with{" "}
            <Heart className="inline-block h-4 w-4 text-red-500" /> for the open
            web.
          </motion.div>
        </motion.div>
      </motion.div>
>>>>>>> 7d17f39 (chore update)
    </footer>
  )
}
