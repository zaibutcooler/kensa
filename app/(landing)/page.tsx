import { scrapeAndStore } from "@/lib/actions"
import ScrapingForm from "@/components/main/ScrapingForm"

export default function LandingPage() {
  scrapeAndStore(
    "https://www.realestate.com.au/buy/in-nsw/list-1?sourcePage=rea:homepage&sourceElement=suburb-select:recent%20searches%20tiles"
  )

  return (
    <main>
      <ScrapingForm />
    </main>
  )
}
