import React, { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div className="mx-auto max-w-6xl px-4 md:px-8">{children}</div>
    </main>
  )
}
