"use client"

import React, { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import ImageUpload from "@/components/ui/image-upload"
import loading from "@/app/(landing)/loading"

import { ImageType, imageSchema } from "./constant"

const To3DForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<ImageType>({
    resolver: zodResolver(imageSchema),
    defaultValues: { imageUrl: "" },
  })

  return (
    <div>
      <Form {...form}>
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload The Image</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value ? [field.value] : []}
                  disabled={loading}
                  onChange={(url) => field.onChange(url)}
                  onRemove={() => field.onChange("")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
    </div>
  )
}

export default To3DForm
