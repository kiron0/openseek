import { Config } from "@/config"

export function Footer() {
  return (
    <footer className="text-muted-foreground mt-12 py-6 text-center text-sm">
      <p>
        &copy; {new Date().getFullYear()} Copyright | {Config.title}
      </p>
      <p>All rights reserved.</p>
    </footer>
  )
}
