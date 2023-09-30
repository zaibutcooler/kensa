"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { UserButton } from "@clerk/nextjs"

import { ThemeToggle } from "../ui/theme-toggle"
import MobileSidebar from "./MobileSidebar"
import { LinkType, extraSidebarLinks, sidebarLinks } from "./constant"

const Header = () => {
  const pathname = usePathname()

  const [routeItem, setRouteItem] = useState<LinkType | null>(null)

  useEffect(() => {
    const chooseRoute = () => {
      const links = [...sidebarLinks, ...extraSidebarLinks]
      const route = links.filter((item) => item.route === pathname)
      setRouteItem(route ? route[0] : null)
    }
    chooseRoute()
  }, [pathname])

  if (!routeItem) {
    return null
  }

  return (
    <nav className="w-full items-center flex justify-between h-14 md:h-20 border-b">
      <section className="space-x-2 md:space-x-4 flex items-center">
        <div className="block md:hidden">
          <MobileSidebar />
        </div>
        <div className="flex gap-5 items-center">
          <routeItem.icon className="hidden md:block w-6 h-6" />
          <div>
            <h1 className="text-lg md:text-xl font-bold">{routeItem.label}</h1>
            <p className="hidden md:block">Texts and etc</p>
          </div>
        </div>
      </section>
      <section className="flex items-center gap-4">
        <ThemeToggle />
        <UserButton />
      </section>
    </nav>
  )
}

export default Header
