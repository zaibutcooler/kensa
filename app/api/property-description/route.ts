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

    const input = `Please generate a professional property description based on the following details:

    Property Type: ${prompt.propertyType}
    ${prompt.bedroom ? `Bedrooms: ${prompt.bedroom}` : ""}
    ${prompt.bathroom ? `Bathrooms: ${prompt.bathroom}` : ""}
    ${prompt.carSpace ? `Car Spaces: ${prompt.carSpace}` : ""}
    Transcription Type: ${prompt.transcriptionType}
    Outdoor Features: ${prompt.outdoorFeatures.join(", ")}
    Indoor Features: ${prompt.indoorFeatures.join(", ")}
    Climate Control: ${prompt.climateControl.join(", ")}
    Writing Style: ${prompt.writingStyle.join(", ")}
    Description Length: ${prompt.descriptionLength} characters
    Other Information: ${prompt.other}
    New Property: ${prompt.newProperty}
    Land Size: ${prompt.landSize} sq. ft
    
    Please create a compelling and detailed property description that highlights the unique features and selling points of this house. Ensure that the writing style is formal and engaging. The description should be concise but informative, and it should capture the essence of the property to attract potential buyers or renters.`

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
