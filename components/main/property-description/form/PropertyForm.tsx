"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { PropertyType, initialValues, propertySchema } from "./constant"

const PropertyForm = () => {
  const form = useForm<PropertyType>({
    resolver: zodResolver(propertySchema),
    defaultValues: initialValues,
  })

  const onSubmit = async () => {}

  return <div>PropertyForm</div>
}

export default PropertyForm
