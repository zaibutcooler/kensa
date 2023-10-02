import { ReactNode } from "react"

import Header from "@/components/nav/Header"
import Sidebar from "@/components/nav/Sidebar"

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <section className="hidden md:flex md:w-72 md:h-full md:fixed border-r px-4">
        <Sidebar />
      </section>
      <section
        className="ml-0 md:ml-72 w-full px-4 md:pb-20 pb-14"
        style={{ overflowY: "hidden" }}
      >
        <Header />
        <main className="h-full">{children}</main>
      </section>
    </main>
  )
}
