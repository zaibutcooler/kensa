import { sendEmail } from "@/lib/mailing"
import ScrapingForm from "@/components/main/ScrapingForm"

export default async function DashboardPage() {
  await sendEmail()

  return (
    <main className="min-h-[80vh] flex items-center gap-8 flex-col md:flex-row">
      <section className="w-full md:w-1/2">
        <ScrapingForm />
      </section>
      <section className="w-full md:w-1/2 bg-gray-500">Humm</section>
    </main>
  )
}
