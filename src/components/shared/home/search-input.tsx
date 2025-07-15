"use client"

import * as React from "react"
import Image from "next/image"
import { EngineOption, FileTypeOption } from "@/types"
import { engineOptions, fileTypeOptions } from "@/utils"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
    <Card>
      <CardHeader>
        <CardTitle>Search Directories</CardTitle>
        <CardDescription>
          Use advanced search techniques to find open directories
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label className="mb-2 text-sm">File Type</Label>
              <Select
                value={fileType?.value || ""}
                onValueChange={(value) =>
                  setFileType(
                    fileTypeOptions.find((opt) => opt.value === value) || null
                  )
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select file type">
                    {fileType ? (
                      <div className="flex items-center gap-2">
                        <span>{fileType.icon}</span>
                        <span>{fileType.label}</span>
                      </div>
                    ) : (
                      "Select file type"
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {fileTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <div className="flex items-center gap-2">
                        <span>{option.icon}</span>
                        <span>{option.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="mb-2 text-sm">Search Engine</Label>
              <Select
                value={engine.value}
                onValueChange={(value) =>
                  setEngine(
                    engineOptions.find((e) => e.value === value) ||
                      engineOptions[0]
                  )
                }
              >
                <SelectTrigger className="w-full">
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
                    <SelectItem key={engine.value} value={engine.value}>
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
          <div>
            <Label className="mb-2 text-sm">Search Query</Label>
            <Input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={fileType ? fileType.placeholder : "Search anything"}
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full lg:w-auto"
              disabled={!query.trim()}
            >
              Search Directories
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
