import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { extraSidebarLinks, sidebarLinks } from "./constant"

const Sidebar = () => {
  return (
    <div className="w-full">
      <header className="h-20">Logo</header>
      {sidebarLinks.map((item, index) => (
        <Link
          key={index}
          href={item.route}
          className="text-sm group flex p-3 justify-start font-medium cursor-pointer dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg w-full"
        >
          <div className="flex items-center flex-1">
            <item.icon className={cn("h-5 w-5 mr-3")} />
            {item.label}
          </div>
        </Link>
      ))}
      <hr className="py-1" />
      {extraSidebarLinks.map((item, index) => (
        <Link
          key={index}
          href={item.route}
          className="text-sm group flex p-3 justify-start font-medium cursor-pointer dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg w-full"
        >
          <div className="flex items-center flex-1">
            <item.icon className={cn("h-5 w-5 mr-3")} />
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
