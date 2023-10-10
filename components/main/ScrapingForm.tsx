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
    <div className="w-full">
      <h1 className="font-bold text-5xl mb-6">
        You can start scraping datas from here
      </h1>
      <p className="mb-6">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        aliquid reiciendis sapiente eaque quia, autem earum molestias sint ab,
        velit eum fugiat error, ea ipsa veritatis corporis iusto quidem eos!
      </p>
      <div>
        <input
          value={url}
          className={"text-lg p-2 border"}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
    </div>
  )
}

export default ScrapingForm
