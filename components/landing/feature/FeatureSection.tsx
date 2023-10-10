"use client"

import { FC } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Header } from "@/components/ui/header"

import { featureDatas } from "./constant"

interface SectionProps {}

const FeaturesSection: FC<SectionProps> = () => {
  const data = featureDatas

  return (
    <div className="min-h-[70vh]">
      <Header title={data.title} description={data.description} id="feature" />
      <main className="flex justify-center font-medium ">
        <div className="w-full md:w-[1200px]  md:grid grid-cols-3 gap-4">
          {data.features.map((item) => (
            <Link
              href={`/feature/${item.route}`}
              key={item.title}
              className="p-4 md:p-6 w-full block transition-colors group duration-500 ease-in-out mb-6 dark:hover:bg-stone-950 hover:bg-gray-50 rounded-md"
            >
              <div className="flex gap-4 items-center mb-5">
                <div>
                  <div
                    className={cn(
                      "w-fit p-1.5 rounded-md",
                      `${item.bgColor} ${item.iconColor}`
                    )}
                  >
                    <item.icon />
                  </div>
                </div>
                <div className="">
                  <h1 className="font-semibold">{item.title}</h1>
                  <p className="text-gray-500 text-xs">{item.subTitle}</p>
                </div>
              </div>
              <div>
                <p
                  className="leading-6 text-sm mb-4"
                  style={{ textAlign: "justify" }}
                >
                  {item.description}
                </p>

                <div className="text-gray-500 text-sm">
                  Development Duration : {item.developmentDuration}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default FeaturesSection
