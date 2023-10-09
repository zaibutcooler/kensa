"use client"

import { useState } from "react"

import { scrapeAndStore } from "@/lib/actions"

const ScrapingForm = () => {
  const [url, setUrl] = useState("")

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      console.log("Enter key pressed. URL:", url)
      try {
        scrapeAndStore(url)
      } catch (err) {
        console.log("err->", err)
      }
      setUrl("")
    }
  }

  return (
    <div>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

export default ScrapingForm
