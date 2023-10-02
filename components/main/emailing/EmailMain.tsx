"use client"

import { useState } from "react"
import axios from "axios"
import toast from "react-hot-toast"

import { Button } from "@/components/ui/button"

import EmailForm from "./form/EmailForm"
import { EmailType } from "./form/constant"
import EmailSummerize from "./summerize/EmailSummerize"

const EmailMain = () => {
  const [display, setDisplay] = useState("none")
  const [pastDatas, setPastDatas] = useState([])
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<string>("")

  const handleFormSubmit = async (values: EmailType) => {
    try {
      setLoading(true)
      const response = await axios.post("/api/emailing", {
        prompt: values,
      })
      setData(response.data.content)
      setDisplay("none")
      toast.success("Successfully Generated")
    } catch (error) {
      toast.error("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  const handleSummarySubmit = async (values: EmailType) => {
    //haven't decided yet
  }

  const render = () => {
    switch (display) {
      case "none":
        return (
          <div>
            <Button
              onClick={() => {
                setDisplay("form")
              }}
            >
              Email
            </Button>
            <Button
              onClick={() => {
                setDisplay("sum")
              }}
            >
              Summerize
            </Button>
          </div>
        )
      case "form":
        return <EmailForm handleBack={handleBack} onSubmit={handleFormSubmit} />
      case "sum":
        return <EmailSummerize />
    }
  }

  const handleBack = () => {
    setDisplay("none")
  }

  return (
    <>{loading ? <div>Loading</div> : <div className="pt-4">{render()}</div>}</>
  )
}

export default EmailMain
