import { motion } from "framer-motion"
import {
  Clapperboard,
  FileArchive,
  FileSpreadsheet,
  FileText,
  Headphones,
  Shield,
  Sparkles,
  Target,
} from "lucide-react"

const techniqueCards = [
  {
    title: "Name pattern first",
    text: "Use release-style names. Dot-separated titles often hit directory listings faster than natural sentences.",
    sample: "The.Blacklist.S01E01",
    icon: Clapperboard,
  },
  {
    title: "Keep intent narrow",
    text: "Pick file group before search. Builder adds ext filters, quality hints, bad-path excludes.",
    sample: "Artist.Album.Year",
    icon: Headphones,
  },
  {
    title: "Switch mode by result quality",
    text: "Balanced for default. Exact when noise high. Aggressive when title uncommon or fragmented.",
    sample: "Research.Paper.2024",
    icon: Target,
  },
]

const fileSignals = [
  {
    label: "Movies / shows",
    hint: "season, episode, release tags",
    icon: Clapperboard,
  },
  {
    label: "Books / docs",
    hint: "edition, scan, report, manual",
    icon: FileText,
  },
  {
    label: "Archives / software",
    hint: "installer, portable, backup",
    icon: FileArchive,
  },
  {
    label: "Datasets / sheets",
    hint: "csv, xlsx, dataset, dump",
    icon: FileSpreadsheet,
  },
]

export function About() {
  return (
    <div className="space-y-12 py-8 lg:py-12">
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="space-y-4 text-center">
          <p className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
            Why It Works
          </p>
          <h2
            id="techniques"
            className="scroll-mt-24 text-3xl leading-tight font-semibold sm:text-4xl"
          >
            OpenSeek chases directory signals,
            <span className="text-primary block">not broad web sludge.</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-7">
            Landing page now centers query quality: typed filters, search modes,
            previewed search pattern, cleaner path from idea to engine.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {techniqueCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="border-border/60 bg-background/70 rounded-[1.5rem] border p-5 shadow-sm"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: "easeOut",
              }}
            >
              <card.icon className="text-primary mb-4 h-5 w-5" />
              <p className="mb-2 text-base font-semibold">{card.title}</p>
              <p className="text-muted-foreground mb-4 text-sm leading-6">
                {card.text}
              </p>
              <div className="bg-muted/60 rounded-xl px-3 py-2 font-mono text-xs">
                {card.sample}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid gap-4 md:grid-cols-2"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="border-border/60 bg-background/70 rounded-[1.5rem] border p-6 shadow-sm">
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-primary/10 rounded-2xl p-3">
              <Sparkles className="text-primary h-5 w-5" />
            </div>
            <div>
              <p className="text-lg font-semibold">Search signals</p>
              <p className="text-muted-foreground text-sm">
                Better inputs → less junk in result page.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {fileSignals.map((signal) => (
              <div
                key={signal.label}
                className="border-border/60 bg-background/70 rounded-[1.25rem] border p-4"
              >
                <signal.icon className="text-primary mb-3 h-4 w-4" />
                <p className="mb-1 text-sm font-semibold">{signal.label}</p>
                <p className="text-muted-foreground text-sm">{signal.hint}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-border/60 bg-background/70 rounded-[1.5rem] border p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-amber-500/15 p-3">
                <Shield className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <p className="text-lg font-semibold">Use responsibly</p>
            </div>
            <p className="text-muted-foreground text-sm leading-7">
              Tool optimizes discoverability, not permission. Only access files
              you are authorized to view or download.
            </p>
          </div>

          <div className="border-border/60 bg-muted/25 rounded-[1.5rem] border p-6 shadow-sm">
            <p className="mb-2 text-sm font-semibold tracking-[0.16em] uppercase">
              Fast workflow
            </p>
            <div className="space-y-3 text-sm">
              <p>1. Choose file group.</p>
              <p>2. Switch mode if noise too high.</p>
              <p>3. Inspect previewed pattern.</p>
              <p>4. Open engine, refine title tokens.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
