"use client"

import { useState } from "react"

interface CustomCSS extends React.CSSProperties {
  '--theme-primary': string;
}

export function ThemeButtons() {
  const [selectedColor, setSelectedColor] = useState("346.8 77.2% 49.8%")
  
  const themes = [
    { color: "240 5.2% 33.9%" },
    { color: "346.8 77.2% 49.8%" },
    { color: "217.2 91.2% 59.8%" },
    { color: "142.1 70.6% 45.3%" },
    { color: "20.5 90.2% 48.2%" },
  ]

  const handleColorChange = (color: string) => {
    setSelectedColor(color)
    document.documentElement.style.setProperty("--primary", color)
  }

  return (
    <div className="hidden md:flex items-center space-x-2">
      <div className="space-x-1 flex items-center">
        {themes.map((theme, i) => (
          <button
            key={i}
            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs ${
              theme.color === selectedColor ? "border-[--theme-primary]" : "border-transparent"
            }`}
            style={{ "--theme-primary": `hsl(${theme.color})` } as CustomCSS}
            onClick={() => handleColorChange(theme.color)}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]">
              {theme.color === selectedColor && (
                <svg 
                  className="h-4 w-4 text-white"
                  viewBox="0 0 15 15"
                >
                  <path 
                    d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z" 
                    fill="currentColor" 
                    fillRule="evenodd" 
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
} 