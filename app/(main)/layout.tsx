import { ReactNode } from "react"

import Header from "@/components/nav/Header"
import Sidebar from "@/components/nav/Sidebar"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <section className="">
        <Sidebar />
      </section>
      <section>
        <Header />
        {children}
      </section>
    </main>
  )
}
