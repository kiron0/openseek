export interface FileTypeOption {
  value: string
  label: string
  resType: string
  placeholder: string
  icon: string
  extensions: string[]
  includeTerms: string[]
  excludeTerms: string[]
}

export interface EngineOption {
  value: string
  name: string
  logo: string
}

export interface SearchModeOption {
  value: "balanced" | "aggressive" | "exact"
  label: string
  description: string
}
