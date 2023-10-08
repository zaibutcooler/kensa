"use server"

import { scrapeItem } from "./scraping"

export async function scrapeAndStore(productUrl: string) {
  if (!productUrl) return

  try {
    const item = scrapeItem(productUrl)
  } catch (error: any) {
    throw new Error(`scrapte and store error :${error.message}`)
  }
}
