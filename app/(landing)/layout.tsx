import { ReactNode } from "react"

import LandingFooter from "@/components/nav/LandingFooter"
import LandingNavbar from "@/components/nav/LandingNavbar"

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <LandingNavbar />
      <div className="pt-16">{children}</div>
      <LandingFooter />
    </main>
  )
}
