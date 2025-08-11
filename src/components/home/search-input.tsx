"use client"

import * as React from "react"
import Image from "next/image"
import { EngineOption, FileTypeOption } from "@/types"
import { engineOptions, fileTypeOptions } from "@/utils"
import { motion } from "framer-motion"
import { Filter, Globe, PencilLine, Search, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SearchInput() {
  const [fileType, setFileType] = React.useState<FileTypeOption | null>(
    fileTypeOptions[0]
  )
  const [engine, setEngine] = React.useState<EngineOption>(engineOptions[0])
  const [query, setQuery] = React.useState<string>("")

  const startSearch = React.useCallback(async () => {
    if (!query.trim()) return

    let finalQuery = query
    const baseFilter =
      "-inurl:(jsp|pl|php|html|aspx|htm|cf|shtml) intitle:index.of -inurl:(listen77|mp3raid|mp3toss|mp3drug|index_of|index-of|wallywashis|downloadmana)"

    if (!fileType || fileType.value === "-1") {
      finalQuery =
        engine.value === "filepursuit" ? "all" : `${query} ${baseFilter}`
    } else {
      finalQuery =
        engine.value === "filepursuit"
          ? fileType.resType
          : `${query} +(${fileType.value}) ${baseFilter}`
    }

    let url = ""
    switch (engine.value) {
      case "google":
        url = `https://www.google.com/search?q=${encodeURIComponent(finalQuery)}`
        break
      case "bing":
        url = `https://www.bing.com/search?q=${encodeURIComponent(finalQuery)}`
        break
      case "yandex":
        url = `https://yandex.com/search/?text=${encodeURIComponent(finalQuery)}`
        break
      case "baidu":
        url = `https://www.baidu.com/s?wd=${encodeURIComponent(finalQuery)}`
        break
      case "duckduckgo":
        url = `https://duckduckgo.com/?q=${encodeURIComponent(finalQuery)}`
        break
      case "ecosia":
        url = `https://www.ecosia.org/search?q=${encodeURIComponent(finalQuery)}`
        break
      case "startpage":
        url = `https://www.startpage.com/do/dsearch?query=${encodeURIComponent(finalQuery)}`
        break
      case "brave":
        url = `https://search.brave.com/search?q=${encodeURIComponent(finalQuery)}`
        break
      case "filepursuit":
        url = `https://filepursuit.com/search/${query.trim().replace(/ /g, "+")}/type/${finalQuery}`
        break
      default:
        return
    }

    if (typeof window !== "undefined") window.open(url, "_blank")
  }, [query, fileType, engine])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    startSearch()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -2 }}
    >
      <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border p-6 shadow-sm">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Filter className="text-primary h-4 w-4" />
                File Type
              </Label>
              <Select
                value={fileType?.value || ""}
                onValueChange={(value) =>
                  setFileType(
                    fileTypeOptions.find((opt) => opt.value === value) || null
                  )
                }
              >
                <SelectTrigger className="hover:border-primary/50 h-12 w-full transition-colors">
                  <SelectValue placeholder="Select file type">
                    {fileType ? (
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{fileType.icon}</span>
                        <span>{fileType.label}</span>
                      </div>
                    ) : (
                      <div className="text-muted-foreground flex items-center gap-2">
                        <Sparkles className="h-4 w-4" />
                        <span>Select file type</span>
                      </div>
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {fileTypeOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="hover:bg-primary/10"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{option.icon}</span>
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-3">
              <Label className="flex items-center gap-2 text-sm font-medium">
                <Globe className="text-primary h-4 w-4" />
                Search Engine
              </Label>
              <Select
                value={engine.value}
                onValueChange={(value) =>
                  setEngine(
                    engineOptions.find((e) => e.value === value) ||
                      engineOptions[0]
                  )
                }
              >
                <SelectTrigger className="hover:border-primary/50 h-12 w-full transition-colors">
                  <SelectValue placeholder="Select engine">
                    <div className="flex items-center gap-2">
                      <Image
                        src={engine.logo}
                        alt={engine.name}
                        width={20}
                        height={20}
                        className="h-5 w-5 rounded-sm"
                      />
                      <span>{engine.name}</span>
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {engineOptions.map((engine) => (
                    <SelectItem
                      key={engine.value}
                      value={engine.value}
                      className="hover:bg-primary/10"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          src={engine.logo}
                          alt={engine.name}
                          width={20}
                          height={20}
                          className="h-5 w-5 rounded-sm"
                        />
                        <span>{engine.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Search className="text-primary h-4 w-4" />
              Search Query
            </Label>
            <div className="relative">
              <Input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={
                  fileType ? fileType.placeholder : "Enter your search terms..."
                }
                className="pr-4 pl-12 md:h-14 md:text-base"
              />
              <PencilLine className="text-muted-foreground absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 transform" />
            </div>
          </div>
          <div className="flex justify-center md:pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                type="submit"
                className="w-full text-sm font-medium shadow-lg transition-all duration-200 hover:shadow-xl md:h-14 md:w-auto md:px-8 md:text-base"
                disabled={!query.trim()}
              >
                <Search className="h-5 w-5" />
                Search Directories
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ display: "inline-block" }}
                >
                  <Sparkles className="ml-2 h-4 w-4" />
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
