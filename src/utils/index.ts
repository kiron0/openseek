import { EngineOption, FileTypeOption } from "@/types"

export const fileTypeOptions: FileTypeOption[] = [
  {
    value: "mkv|mp4|avi|mov|mpg|wmv|divx|mpeg",
    label: "TV/Movies",
    resType: "video",
    placeholder: "eg. The.Blacklist.S01",
    icon: "🎬",
  },
  {
    value:
      "MOBI|CBZ|CBR|CBC|CHM|EPUB|FB2|LIT|LRF|ODT|PDF|PRC|PDB|PML|RB|RTF|TCR|DOC|DOCX",
    label: "Books",
    resType: "ebook",
    placeholder: "eg. 1985",
    icon: "📚",
  },
  {
    value: "mp3|wav|ac3|ogg|flac|wma|m4a|aac|mod",
    label: "Music",
    resType: "audio",
    placeholder: "eg. K.Flay discography",
    icon: "🎵",
  },
  {
    value: "exe|iso|dmg|tar|7z|bz2|gz|rar|zip|apk",
    label: "Software/Games",
    resType: "archive",
    placeholder: "eg. GTA V",
    icon: "💿",
  },
  {
    value: "jpg|png|bmp|gif|tif|tiff|psd|webp",
    label: "Images",
    resType: "picture",
    placeholder: "eg. Donald Trump",
    icon: "🖼️",
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
