import Link from "next/link"

import { Button } from "../ui/button"
import { ThemeToggle } from "../ui/theme-toggle"

const LandingNavbar = () => {
  return (
    <nav className="fixed left-0 top-0 w-full h-16 shadow-sm bg-white dark:bg-black">
      <div className="flex items-center justify-between  h-full px-4">
        <section>
          <Link href="/">Logo</Link>
        </section>
        <section className="flex items-center gap-4">
          <Link href="/sign-in">
            <Button className="rounded-full" variant="outline">
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="rounded-full">Get Started</Button>
          </Link>
          <ThemeToggle />
        </section>
      </div>
    </nav>
  )
}

export default LandingNavbar
