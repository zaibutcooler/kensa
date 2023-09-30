"use client"

import { useEffect, useState } from "react"

import FeatureFormModal from "../main/property-description/mini/FeatureFormModel"

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <>
      <FeatureFormModal />
    </>
  )
}
