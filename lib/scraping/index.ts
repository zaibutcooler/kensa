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

    console.log("Response:", response.data)
  } catch (error: any) {
    console.log(error)
  }
}

// import axios from "axios"

// // Function to make a request with rate limiting
// async function makeRequestWithRateLimit(url: string, options: any) {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const response = await axios.get(url, options)
//       resolve(response.data)
//     } catch (error) {
//       reject(error)
//     }
//   })
// }

// // Function to scrape data
// export async function scrapeItem(url: string) {
//   if (!url) return

//   const username = String(process.env.BRIGHT_DATA_USERNAME)
//   const password = String(process.env.BRIGHT_DATA_PASSWORD)
//   const port = 22225
//   const session_id = (1000000 * Math.random()) | 0
//   const options = {
//     auth: {
//       username: `${username}-session-${session_id}`,
//       password: password,
//     },
//     host: "brd.superproxy.io",
//     port,
//     rejectUnauthorized: false,
//   }

//   try {
//     const scrapedData = await makeRequestWithRateLimit(url, options)
//     console.log("Scraped Data:", scrapedData)
//   } catch (error: any) {
//     console.error("Error:", error.message)
//     throw new Error(`Failed to scrape data: ${error.message}`)
//   }
// }
