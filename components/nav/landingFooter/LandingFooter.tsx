import Link from "next/link"

import AddressCard from "@/components/mini/AddressCard"

import {
  LinkType,
  companyData,
  footerContact,
  footerLinks,
  gradientStyle,
  solutionData,
  supportData,
} from "./constant"

const LandingFooter = () => {
  const renderLink = (input: LinkType) => {
    return (
      <Link
        href={input.link}
        className="text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
      >
        {input.label}
      </Link>
    )
  }

  return (
    <div className=" mt-6 md:mt-24 dark:bg-stone-950">
      <section className="h-36 md:h-60 border-t ">
        <main className="md:flex justify-between container mx-auto py-6 hidden">
          <div className="w-2/5 text-gray-700 dark:text-gray-300">
            <AddressCard primary={false} />
          </div>
          <div className="w-full text-sm md:w-3/5 grid grid-cols-3 text-gray-500">
            <div className="space-y-5">
              <p className="pb-3 text-gray-900 dark:text-gray-200">Solutions</p>
              {solutionData.map((item, index) => (
                <div key={index}>{renderLink(item)}</div>
              ))}
            </div>
            <div className="space-y-5">
              <p className="pb-3 text-gray-900 dark:text-gray-200">Company</p>
              {companyData.map((item, index) => (
                <div key={index}>{renderLink(item)}</div>
              ))}
            </div>
            <div className="space-y-5">
              <p className="pb-3 text-gray-900 dark:text-gray-200">Support</p>
              {supportData.map((item, index) => (
                <div key={index}>{renderLink(item)}</div>
              ))}
            </div>
          </div>
        </main>
        <main className="md:hidden block text-center pt-4 space-y-4">
          <section className="text-lg font-semibold" style={gradientStyle}>
            ShopDoora
          </section>
          <section className="flex gap-6 justify-center text-sm">
            {footerLinks.map((item, index) => (
              <div key={index}>{renderLink(item)}</div>
            ))}
          </section>
        </main>
      </section>
      <section className="h-12 container mx-auto flex flex-col-reverse md:flex-row justify-between items-center text-gray-600">
        <p className=" text-xs text-center md:text-left pb-4 md:pb-4">
          Copyright © 2020 Myanmar High Society Co., Ltd.All Rights Reserved
        </p>
        <div className="flex items-center text-gray-500 space-x-10 text-xl mb-4 md:mb-0">
          {footerContact.map((item) => (
            <Link href={item.link} key={item.platform}>
              <span className="hover:text-gray-800 dark:hover:text-gray-300">
                <item.icon />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default LandingFooter
