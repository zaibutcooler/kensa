import { ReactNode } from "react"

import LandingNavbar from "@/components/nav/landingNavbar/LandingNavbar"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <LandingNavbar />
      {children}
    </main>
  )
}
