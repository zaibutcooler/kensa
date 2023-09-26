"use client"

import { UserButton } from "@clerk/nextjs"

import MobileSidebar from "./MobileSidebar"

const Header = () => {
  return (
    <nav className="w-full items-center flex justify-between h-14 md:h-20 border-b">
      <section className="space-x-2 md:space-x-4 flex items-center">
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold">Header</h1>
          <p className="hidden md:block">Texts and etc</p>
        </div>
      </section>
      <section>
        <UserButton />
      </section>
    </nav>
  )
}

export default Header
