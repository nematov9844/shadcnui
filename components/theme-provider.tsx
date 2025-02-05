"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes"

interface Props {
  children: React.ReactNode;
}

type ThemeProviderProps = Props & NextThemeProviderProps

const ColorContext = React.createContext<{
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
}>({
  primaryColor: "346.8 77.2% 49.8%",
  setPrimaryColor: () => null,
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [primaryColor, setPrimaryColor] = React.useState("346.8 77.2% 49.8%")

  React.useEffect(() => {
    document.documentElement.style.setProperty("--primary", primaryColor)
  }, [primaryColor])

  return (
    <NextThemesProvider {...props}>
      <ColorContext.Provider value={{ primaryColor, setPrimaryColor }}>
        {children}
      </ColorContext.Provider>
    </NextThemesProvider>
  )
}

export const useColor = () => React.useContext(ColorContext) 