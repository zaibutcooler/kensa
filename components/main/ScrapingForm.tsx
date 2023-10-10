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
      <h1 className="font-bold text-4xl md:text-5xl mb-4 md:mb-6 text-indigo-600">
        You can start scraping datas from here
      </h1>
      <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
        aliquid reiciendis sapiente eaque quia, autem earum molestias sint ab,
        velit eum fugiat error, ea ipsa veritatis corporis iusto quidem eos!
      </p>
      <div className="flex w-full">
        <input
          value={url}
          className={"text-lg p-2 border rounded-l-full px-4 w-full"}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className=" h-12 px-4 bg-indigo-600 text-white rounded-r-full w-36">
          Search
        </button>
      </div>
    </div>
  )
}

export default ScrapingForm
