import "@/styles/globals.css"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"

import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/nav/Navbar"
import { ThemeProvider } from "@/components/providers/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Toaster />
            <ClerkProvider>
              <Navbar />
              <div className="mx-auto max-w-7xl">{children}</div>
            </ClerkProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
