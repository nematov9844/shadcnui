"use client"

import { createContext, useContext, useState } from "react"

type ThemeColor = {
  color: string
  selected?: boolean
}

type ThemeContextType = {
  selectedTheme: ThemeColor
  setTheme: (theme: ThemeColor) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeColor>({
    color: "346.8 77.2% 49.8%",
    selected: true
  })

  const setTheme = (theme: ThemeColor) => {
    document.documentElement.style.setProperty("--primary", `${theme.color}`)
    setSelectedTheme(theme)
  }

  return (
    <ThemeContext.Provider value={{ selectedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
} 