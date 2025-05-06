"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

type ModeType = "work" | "play" | "writing"

export function ModeToggle() {
  const [mode, setMode] = useState<ModeType>("work")
  const router = useRouter()

  const handleModeChange = (newMode: ModeType) => {
    setMode(newMode)
    // Add query parameter to URL without page reload
    const url = new URL(window.location.href)
    url.searchParams.set('mode', newMode)
    window.history.pushState({}, '', url)
    router.refresh()
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
