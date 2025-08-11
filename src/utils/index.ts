import { EngineOption, FileTypeOption } from "@/types"

export * from "./base-url"

export const fileTypeOptions: FileTypeOption[] = [
  {
    value: "mkv|mp4|avi|mov|mpg|wmv|divx|mpeg|webm|flv|3gp|m4v|ts|mts|m2ts",
    label: "TV/Movies",
    resType: "video",
    placeholder: "eg. The.Blacklist.S01",
    icon: "🎬",
  },
  {
    value:
      "MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX|TXT|AZW|AZW3|KPF",
    label: "Books",
    resType: "ebook",
    placeholder: "eg. 1985",
    icon: "📚",
  },
  {
    value: "mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod|opus|aiff|alac|ape|wv|mka",
    label: "Music",
    resType: "audio",
    placeholder: "eg. K.Flay discography",
    icon: "🎵",
  },
  {
    value: "exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk|deb|rpm|pkg|msi|dmg|app|ipa",
    label: "Software/Games",
    resType: "archive",
    placeholder: "eg. GTA V",
    icon: "💿",
  },
  {
    value: "jpg|png|bmp|gif|tif|tiff|psd|webp|svg|ico|jpeg|raw|cr2|nef|arw",
    label: "Images",
    resType: "picture",
    placeholder: "eg. Donald Trump",
    icon: "🖼️",
  },
  {
    value: "ppt|pptx|key|odp|pps|ppsx",
    label: "Presentations",
    resType: "presentation",
    placeholder: "eg. Business presentation",
    icon: "📊",
  },
  {
    value: "xls|xlsx|csv|ods|tsv|numbers",
    label: "Spreadsheets",
    resType: "spreadsheet",
    placeholder: "eg. Financial data",
    icon: "📈",
  },
  {
    value: "srt|vtt|sub|ass|ssa|idx",
    label: "Subtitles",
    resType: "subtitle",
    placeholder: "eg. Movie subtitles",
    icon: "💬",
  },
  {
    value: "psd|ai|eps|svg|sketch|fig|xd",
    label: "Design Files",
    resType: "design",
    placeholder: "eg. Logo design",
    icon: "🎨",
  },
  {
    value: "mp4|mov|avi|mkv|webm|gif|mpg|wmv",
    label: "Videos",
    resType: "video",
    placeholder: "eg. Tutorial videos",
    icon: "🎥",
  },
  {
    value: "pdf|doc|docx|txt|rtf|odt|pages",
    label: "Documents",
    resType: "document",
    placeholder: "eg. Research papers",
    icon: "📄",
  },
  {
    value: "zip|rar|7z|tar|gz|bz2|xz|lzma",
    label: "Archives",
    resType: "archive",
    placeholder: "eg. Backup files",
    icon: "📦",
  },
  {
    value: "json|xml|yaml|yml|toml|ini|cfg|conf",
    label: "Config Files",
    resType: "config",
    placeholder: "eg. Settings files",
    icon: "⚙️",
  },
  {
    value: "sql|db|sqlite|mdb|accdb|odb",
    label: "Databases",
    resType: "database",
    placeholder: "eg. Database files",
    icon: "🗄️",
  },
  {
    value: "-1",
    label: "Other",
    resType: "all",
    placeholder: "Search anything",
    icon: "🔍",
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
  { value: "yandex", name: "Yandex", logo: "https://yandex.com/favicon.ico" },
  { value: "baidu", name: "Baidu", logo: "https://www.baidu.com/favicon.ico" },
  {
    value: "duckduckgo",
    name: "DuckDuckGo",
    logo: "https://duckduckgo.com/favicon.ico",
  },
  {
    value: "ecosia",
    name: "Ecosia",
    logo: "https://www.ecosia.org/favicon.ico",
  },
  {
    value: "startpage",
    name: "Startpage",
    logo: "https://www.startpage.com/favicon.ico",
  },
  {
    value: "brave",
    name: "Brave Search",
    logo: "https://brave.com/favicon.ico",
  },
  {
    value: "filepursuit",
    name: "FilePursuit",
    logo: "https://filepursuit.com/favicon.ico",
  },
]
