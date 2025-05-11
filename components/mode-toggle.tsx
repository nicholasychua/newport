"use client"

import { useEffect, useState } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

type ModeType = "work" | "play" | "writing"

export function ModeToggle() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Get the current mode from URL or default to "work"
  const currentMode = searchParams.get('mode') as ModeType || "work"
  const [mode, setMode] = useState<ModeType>(currentMode)
  
  // Update state when URL changes
  useEffect(() => {
    setMode(currentMode)
  }, [currentMode])

  const handleModeChange = (newMode: ModeType) => {
    // First update the UI state immediately for responsive feel
    setMode(newMode)
    
    // Get current scroll position
    const scrollPosition = window.scrollY
    
    // If we're at the bottom of the page (or close to it), smooth scroll to top first
    const nearBottom = scrollPosition > window.innerHeight / 2
    
    if (nearBottom) {
      // Smooth scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' })
      
      // Then update URL after animation (reduced to 300ms)
      setTimeout(() => {
        const params = new URLSearchParams(searchParams)
        params.set('mode', newMode)
        router.push(`${pathname}?${params.toString()}`)
      }, 300)
    } else {
      // If we're already near the top, just update the URL immediately
      const params = new URLSearchParams(searchParams)
      params.set('mode', newMode)
      router.push(`${pathname}?${params.toString()}`)
    }
  }

  return (
    <div className="bg-secondary/80 p-1 rounded-full inline-flex shadow-sm backdrop-blur-sm">
      <button
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
          mode === "work" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => handleModeChange("work")}
      >
        work
      </button>
      <button
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
          mode === "play" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => handleModeChange("play")}
      >
        play
      </button>
      <button
        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
          mode === "writing" ? "bg-white text-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
        }`}
        onClick={() => handleModeChange("writing")}
      >
        writing
      </button>
    </div>
  )
}
