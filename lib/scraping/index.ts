import axios from "axios"

export async function scrapeItem(url: string) {
  if (!url) return

  const username = String(process.env.BRIGHT_DATA_USERNAME)
  const password = String(process.env.BRIGHT_DATA_PASSWORD)
  const port = 22225
  const session_id = (1000000 * Math.random()) | 0
  const options = {
    auth: {
      username: `${username}-session-${session_id}`,
      password: password,
    },
    host: "brd.superproxy.io",
    port,
    rejectUnauthorized: false,
  }

  try {
    const response = await axios.get(url, options)

    console.log("res", response)
  } catch (error: any) {
    throw new Error(`Failed to scrape data :${error.message}`)
  }
}
