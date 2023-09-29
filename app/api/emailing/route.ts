import { NextResponse } from "next/server"
import { auth } from "@clerk/nextjs"
import OpenAi from "openai"

const openai = new OpenAi({
  apiKey: process.env.OPENAI_SECRET_KEY,
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { prompt } = body

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    if (!prompt) {
      return new NextResponse("Messages are required", { status: 400 })
    }

    const input = ``

    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: String(input) }],
      model: "gpt-3.5-turbo",
    })

    console.log(response)

    return NextResponse.json(response.choices[0].message)
  } catch (error) {
    console.log("[GENERATION_ERROR]", error)
    return new NextResponse("Internal Error", { status: 500 })
  }
}
