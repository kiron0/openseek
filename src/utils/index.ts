import { EngineOption, FileTypeOption, SearchModeOption } from "@/types"

export * from "./base-url"

export const fileTypeOptions: FileTypeOption[] = [
  {
    value: "mkv|mp4|avi|mov|mpg|wmv|divx|mpeg|webm|flv|3gp|m4v|ts|mts|m2ts",
    label: "TV/Movies",
    resType: "video",
    placeholder: "eg. The.Blacklist.S01",
    icon: "🎬",
    extensions: [
      "mkv",
      "mp4",
      "avi",
      "mov",
      "mpg",
      "wmv",
      "divx",
      "mpeg",
      "webm",
      "flv",
      "3gp",
      "m4v",
      "ts",
      "mts",
      "m2ts",
    ],
    includeTerms: ["1080p", "bluray", "webrip", "x264"],
    excludeTerms: ["trailer", "sample"],
  },
  {
    value:
      "MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX|TXT|AZW|AZW3|KPF",
    label: "Books",
    resType: "ebook",
    placeholder: "eg. 1985",
    icon: "📚",
    extensions: [
      "mobi",
      "cbz",
      "cbr",
      "cbc",
      "chm",
      "epub",
      "fb2",
      "lit",
      "lrf",
      "odt",
      "pdf",
      "prc",
      "pdb",
      "pml",
      "rb",
      "rtf",
      "tcr",
      "doc",
      "docx",
      "txt",
      "azw",
      "azw3",
      "kpf",
    ],
    includeTerms: ["ebook", "scan", "edition"],
    excludeTerms: ["summary", "review"],
  },
  {
    value: "mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod|opus|aiff|alac|ape|wv|mka",
    label: "Music",
    resType: "audio",
    placeholder: "eg. K.Flay discography",
    icon: "🎵",
    extensions: [
      "mp3",
      "wav",
      "ac3",
      "ogg",
      "flac",
      "wma",
      "m4a",
      "aac",
      "mod",
      "opus",
      "aiff",
      "alac",
      "ape",
      "wv",
      "mka",
    ],
    includeTerms: ["discography", "album", "flac"],
    excludeTerms: ["lyrics", "karaoke"],
  },
  {
    value: "exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk|deb|rpm|pkg|msi|dmg|app|ipa",
    label: "Software/Games",
    resType: "archive",
    placeholder: "eg. GTA V",
    icon: "💿",
    extensions: [
      "exe",
      "iso",
      "dmg",
      "tar",
      "7z",
      "bz2",
      "gz",
      "rar",
      "zip",
      "apk",
      "deb",
      "rpm",
      "pkg",
      "msi",
      "app",
      "ipa",
    ],
    includeTerms: ["setup", "installer", "portable"],
    excludeTerms: ["patch notes", "guide"],
  },
  {
    value: "jpg|png|bmp|gif|tif|tiff|psd|webp|svg|ico|jpeg|raw|cr2|nef|arw",
    label: "Images",
    resType: "picture",
    placeholder: "eg. Donald Trump",
    icon: "🖼️",
    extensions: [
      "jpg",
      "png",
      "bmp",
      "gif",
      "tif",
      "tiff",
      "psd",
      "webp",
      "svg",
      "ico",
      "jpeg",
      "raw",
      "cr2",
      "nef",
      "arw",
    ],
    includeTerms: ["wallpaper", "hires", "gallery"],
    excludeTerms: ["thumbnail", "preview"],
  },
  {
    value: "ppt|pptx|key|odp|pps|ppsx",
    label: "Presentations",
    resType: "presentation",
    placeholder: "eg. Business presentation",
    icon: "📊",
    extensions: ["ppt", "pptx", "key", "odp", "pps", "ppsx"],
    includeTerms: ["slides", "deck"],
    excludeTerms: ["template preview"],
  },
  {
    value: "xls|xlsx|csv|ods|tsv|numbers",
    label: "Spreadsheets",
    resType: "spreadsheet",
    placeholder: "eg. Financial data",
    icon: "📈",
    extensions: ["xls", "xlsx", "csv", "ods", "tsv", "numbers"],
    includeTerms: ["dataset", "sheet"],
    excludeTerms: ["dashboard"],
  },
  {
    value: "srt|vtt|sub|ass|ssa|idx",
    label: "Subtitles",
    resType: "subtitle",
    placeholder: "eg. Movie subtitles",
    icon: "💬",
    extensions: ["srt", "vtt", "sub", "ass", "ssa", "idx"],
    includeTerms: ["subtitle", "subtitles"],
    excludeTerms: ["transcript"],
  },
  {
    value: "psd|ai|eps|svg|sketch|fig|xd",
    label: "Design Files",
    resType: "design",
    placeholder: "eg. Logo design",
    icon: "🎨",
    extensions: ["psd", "ai", "eps", "svg", "sketch", "fig", "xd"],
    includeTerms: ["source", "editable", "vector"],
    excludeTerms: ["mockup preview"],
  },
  {
    value: "mp4|mov|avi|mkv|webm|gif|mpg|wmv",
    label: "Videos",
    resType: "video",
    placeholder: "eg. Tutorial videos",
    icon: "🎥",
    extensions: ["mp4", "mov", "avi", "mkv", "webm", "gif", "mpg", "wmv"],
    includeTerms: ["1080p", "web", "tutorial"],
    excludeTerms: ["trailer", "clip"],
  },
  {
    value: "pdf|doc|docx|txt|rtf|odt|pages",
    label: "Documents",
    resType: "document",
    placeholder: "eg. Research papers",
    icon: "📄",
    extensions: ["pdf", "doc", "docx", "txt", "rtf", "odt", "pages"],
    includeTerms: ["report", "paper", "manual"],
    excludeTerms: ["abstract"],
  },
  {
    value: "zip|rar|7z|tar|gz|bz2|xz|lzma",
    label: "Archives",
    resType: "archive",
    placeholder: "eg. Backup files",
    icon: "📦",
    extensions: ["zip", "rar", "7z", "tar", "gz", "bz2", "xz", "lzma"],
    includeTerms: ["backup", "dump", "package"],
    excludeTerms: ["checksum"],
  },
  {
    value: "json|xml|yaml|yml|toml|ini|cfg|conf",
    label: "Config Files",
    resType: "config",
    placeholder: "eg. Settings files",
    icon: "⚙️",
    extensions: ["json", "xml", "yaml", "yml", "toml", "ini", "cfg", "conf"],
    includeTerms: ["config", "settings", "env"],
    excludeTerms: ["schema"],
  },
  {
    value: "sql|db|sqlite|mdb|accdb|odb",
    label: "Databases",
    resType: "database",
    placeholder: "eg. Database files",
    icon: "🗄️",
    extensions: ["sql", "db", "sqlite", "mdb", "accdb", "odb"],
    includeTerms: ["dump", "backup", "database"],
    excludeTerms: ["driver"],
  },
  {
    value: "-1",
    label: "Other",
    resType: "all",
    placeholder: "Search anything",
    icon: "🔍",
    extensions: [],
    includeTerms: ["download", "archive"],
    excludeTerms: [],
  },
]

export const engineOptions: EngineOption[] = [
  {
    value: "google",
    name: "Google",
    logo: "https://www.google.com/favicon.ico",
  },
  {
    value: "bing",
    name: "Bing",
    logo: "https://www.bing.com/favicon.ico",
  },
  {
    value: "duckduckgo",
    name: "DuckDuckGo",
    logo: "https://duckduckgo.com/favicon.ico",
  },
  {
    value: "brave",
    name: "Brave Search",
    logo: "https://brave.com/favicon.ico",
  },
]

export const searchModeOptions: SearchModeOption[] = [
  {
    value: "balanced",
    label: "Balanced",
    description: "Mix exact title, open-dir hints, file filters.",
  },
  {
    value: "aggressive",
    label: "Aggressive",
    description: "Broader crawl-style query. More results, more noise.",
  },
  {
    value: "exact",
    label: "Exact",
    description: "Strict exact-title query. Less noise, fewer hits.",
  },
]

const commonExcludeTerms = [
  "jsp",
  "pl",
  "php",
  "html",
  "aspx",
  "htm",
  "cf",
  "shtml",
  "listen77",
  "mp3raid",
  "mp3toss",
  "mp3drug",
  "index_of",
  "index-of",
  "wallywashis",
  "downloadmana",
]

function quoteTerm(value: string) {
  return `"${value.replaceAll('"', "")}"`
}

function normalizeQuery(rawQuery: string) {
  const trimmedQuery = rawQuery.trim()
  const cleanedQuery = trimmedQuery.replace(/[._-]+/g, " ")
  const tokens = cleanedQuery.split(/\s+/).filter(Boolean)
  const phrase = tokens.join(" ")

  return {
    trimmedQuery,
    phrase,
    hasPhraseVariant:
      phrase.length > 0 && phrase.toLowerCase() !== trimmedQuery.toLowerCase(),
  }
}

function buildQueryVariantClause(rawQuery: string) {
  const { trimmedQuery, phrase, hasPhraseVariant } = normalizeQuery(rawQuery)

  if (!trimmedQuery) return ""

  if (hasPhraseVariant) {
    return `(${quoteTerm(trimmedQuery)} OR ${quoteTerm(phrase)})`
  }

  return quoteTerm(trimmedQuery)
}

function buildDirectoryClause() {
  return `("index of" OR "parent directory" OR "directory listing")`
}

function buildSignalClause() {
  return `("last modified" OR "size" OR "name")`
}

function buildLooseSignalClause() {
  return `("index of" OR "parent directory" OR "last modified" OR "size")`
}

function buildExtensionClause(
  engine: EngineOption["value"],
  fileType: FileTypeOption | null
) {
  if (
    !fileType ||
    fileType.value === "-1" ||
    fileType.extensions.length === 0
  ) {
    return ""
  }

  const extensions = fileType.extensions.slice(0, 6)

  if (engine === "duckduckgo") {
    return `(${extensions.map((extension) => quoteTerm(`.${extension}`)).join(" OR ")})`
  }

  return `(${extensions.map((extension) => `ext:${extension}`).join(" OR ")})`
}

function buildHintClause(fileType: FileTypeOption | null) {
  if (!fileType || fileType.includeTerms.length === 0) return ""

  return `(${fileType.includeTerms.map(quoteTerm).join(" OR ")})`
}

function buildExcludeClause(fileType: FileTypeOption | null) {
  const excludedTerms = [
    ...commonExcludeTerms,
    ...(fileType?.excludeTerms ?? []),
  ]

  return excludedTerms.map((term) => `-inurl:${term}`).join(" ")
}

export function buildSearchQuery(
  engine: EngineOption["value"],
  rawQuery: string,
  fileType: FileTypeOption | null,
  mode: SearchModeOption["value"] = "balanced"
) {
  const queryClause = buildQueryVariantClause(rawQuery)

  if (!queryClause) return ""

  const exactQueryClause = quoteTerm(rawQuery.trim())
  const extensionClause = buildExtensionClause(engine, fileType)
  const hintClause = buildHintClause(fileType)
  const excludeClause = buildExcludeClause(fileType)

  if (mode === "exact") {
    return [exactQueryClause, `"index of"`, extensionClause, excludeClause]
      .filter(Boolean)
      .join(" ")
  }

  if (mode === "aggressive") {
    return [
      queryClause,
      buildLooseSignalClause(),
      extensionClause,
      hintClause,
      `"download"`,
      excludeClause,
    ]
      .filter(Boolean)
      .join(" ")
  }

  return [
    queryClause,
    buildDirectoryClause(),
    buildSignalClause(),
    extensionClause,
    hintClause,
    excludeClause,
  ]
    .filter(Boolean)
    .join(" ")
}

export function buildSearchUrl(
  engine: EngineOption["value"],
  rawQuery: string,
  fileType: FileTypeOption | null,
  mode: SearchModeOption["value"] = "balanced"
) {
  const finalQuery = buildSearchQuery(engine, rawQuery, fileType, mode)

  if (!finalQuery) return ""

  switch (engine) {
    case "google":
      return `https://www.google.com/search?q=${encodeURIComponent(finalQuery)}`
    case "bing":
      return `https://www.bing.com/search?q=${encodeURIComponent(finalQuery)}`
    case "duckduckgo":
      return `https://duckduckgo.com/?q=${encodeURIComponent(finalQuery)}`
    case "brave":
      return `https://search.brave.com/search?q=${encodeURIComponent(finalQuery)}`
    default:
      return ""
  }
}
