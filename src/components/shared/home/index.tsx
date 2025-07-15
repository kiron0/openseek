import { Config } from "@/config"

import { About } from "./about"
import { Footer } from "./footer"
import { SearchInput } from "./search-input"

export function Home() {
  return (
    <>
      <div className="mx-auto max-w-7xl py-12">
        <div className="mb-12 text-center">
          <h1 className="from-primary to-secondary mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
            {Config.title}
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base lg:text-lg">
            {Config.slogan}
          </p>
        </div>
        <SearchInput />
        <About />
      </div>
      <Footer />
    </>
  )
}
