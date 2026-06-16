"use client"

import * as React from "react"
import Image from "next/image"
import { EngineOption, FileTypeOption, SearchModeOption } from "@/types"
import {
  buildSearchQuery,
  buildSearchUrl,
  engineOptions,
  fileTypeOptions,
  searchModeOptions,
} from "@/utils"
import { motion } from "framer-motion"
import {
  Crosshair,
  Filter,
  Globe,
  PencilLine,
  Search,
  Sparkles,
} from "lucide-react"

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
  const [searchMode, setSearchMode] = React.useState<SearchModeOption>(
    searchModeOptions[0]
  )
  const [query, setQuery] = React.useState<string>("")
  const finalQuery = buildSearchQuery(
    engine.value,
    query,
    fileType,
    searchMode.value
  )
  const searchUrl = buildSearchUrl(
    engine.value,
    query,
    fileType,
    searchMode.value
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchUrl || typeof window === "undefined") return
    window.open(searchUrl, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
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
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium">
              <Crosshair className="text-primary h-4 w-4" />
              Search Mode
            </Label>
            <Select
              value={searchMode.value}
              onValueChange={(value) =>
                setSearchMode(
                  searchModeOptions.find((mode) => mode.value === value) ||
                    searchModeOptions[0]
                )
              }
            >
              <SelectTrigger className="hover:border-primary/50 h-12 w-full transition-colors">
                <SelectValue placeholder="Select mode">
                  <span>{searchMode.label}</span>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {searchModeOptions.map((mode) => (
                  <SelectItem
                    key={mode.value}
                    value={mode.value}
                    className="hover:bg-primary/10"
                  >
                    <div className="flex flex-col items-start">
                      <span>{mode.label}</span>
                      <span className="text-muted-foreground text-xs">
                        {mode.description}
                      </span>
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
              className="h-14 pr-4 pl-12 text-base"
            />
            <PencilLine className="text-muted-foreground absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 transform" />
          </div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="text-muted-foreground text-xs tracking-[0.16em] uppercase">
                {searchMode.description}
              </p>
            </div>
            <motion.div
              className="md:ml-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                type="submit"
                className="h-14 w-full px-8 text-base font-medium md:w-auto"
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
          {finalQuery ? (
            <div className="bg-muted/30 rounded-2xl border p-4">
              <p className="text-muted-foreground mb-2 text-xs font-medium tracking-[0.16em] uppercase">
                Search Pattern
              </p>
              <p className="text-foreground font-mono text-xs leading-6 break-words md:text-sm">
                {finalQuery}
              </p>
            </div>
          ) : null}
        </div>
      </form>
    </motion.div>
  )
}
