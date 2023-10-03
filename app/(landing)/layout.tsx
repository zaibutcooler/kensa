import { ReactNode } from "react"

import LandingFooter from "@/components/nav/landingFooter/LandingFooter"
import LandingNavbar from "@/components/nav/landingNavbar/LandingNavbar"

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <LandingNavbar />
      <div className="pt-16 mx-auto container">{children}</div>
      <LandingFooter />
    </main>
  )
}
