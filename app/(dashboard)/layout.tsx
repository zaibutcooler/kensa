import React, { ReactNode } from "react"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  )
}
