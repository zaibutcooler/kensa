"use client"

import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"

import EmailForm from "./form/EmailForm"
import { EmailType } from "./form/constant"

const EmailMain = () => {
  const [displayMain, setDisplayMain] = useState(true)
  const [pastDatas, setPastDatas] = useState([])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<string>("")

  const handleSubmit = async (values: EmailType) => {
    try {
      setDisplayMain(true)
      setLoading(true)
      const response = await axios.post("/api/emailing", {
        prompt: values,
      })
      setData(response.data.content)
      toast.success("Successfully Generated")
    } catch (error) {
      toast.error("Something went wrong.")
      setDisplayMain(false)
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    setDisplayMain(true)
  }

  return (
    <>
      {displayMain ? (
        <main className="flex md:flex-row flex-col h-full pb-4 pt-4 ">
          <section className="w-full h-full flex justify-center items-center">
            {loading ? (
              <div>Loading</div>
            ) : (
              <>
                {data ? (
                  <div>{data}</div>
                ) : (
                  <div>
                    <Button onClick={() => setDisplayMain(false)}>
                      Generate New
                    </Button>
                  </div>
                )}
              </>
            )}
          </section>
          <section className="w-80 h-full">Past Displays</section>
        </main>
      ) : (
        <main className="h-full overflow-y-auto pt-4 ">
          <EmailForm handleBack={handleBack} onSubmit={handleSubmit} />
        </main>
      )}
    </>
  )
}

export default EmailMain
