"use client"

import { FC, useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-label"
import { Select } from "@radix-ui/react-select"
import axios from "axios"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import MultipleChoice from "@/components/ui/checkbox-group"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/text-area"

import {
  PropertyType,
  climateControlData,
  demo,
  indoorFeaturesData,
  initialValues,
  newPropertyData,
  outdoorFeaturesData,
  propertySchema,
  propertyTypeData,
  transcriptionTypeData,
  writingStyleData,
} from "./constant"

interface Props {
  handleBack: () => void
  onSubmit: (input: PropertyType) => void
}

const PropertyForm: FC<Props> = ({ handleBack, onSubmit }) => {
  const [loading, setLoading] = useState(false)

  const form = useForm<PropertyType>({
    resolver: zodResolver(propertySchema),
    defaultValues: demo,
  })

  useEffect(() => {}, [])

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="location"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-3 gap-4 pt-6 mb-4">
            <FormField
              name="bedroom"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bedform</FormLabel>
                  <FormControl>
                    <Input placeholder="BedRooms" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="bathroom"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bathroom</FormLabel>
                  <FormControl>
                    <Input placeholder="Bathrooms" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="carSpace"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Car space</FormLabel>
                  <FormControl>
                    <Input placeholder="Carspace" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="descriptionLength"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description Length</FormLabel>
                  <FormControl>
                    <Input placeholder="Description Length" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="landSize"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Land Size</FormLabel>
                  <FormControl>
                    <Input placeholder="Land Size" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newProperty"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Property</FormLabel>

                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="select a size"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {newPropertyData.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Property Type</FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="select a size"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {newPropertyData.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transcriptionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transcription Type</FormLabel>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder="select a size"
                          defaultValue={field.value}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {newPropertyData.map((item) => (
                        <SelectItem key={item.value} value={item.value}>
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Card>
              <CardHeader>Writing Style</CardHeader>
              <CardContent>
                <FormField
                  name="writingStyle"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <MultipleChoice
                          options={writingStyleData}
                          selectedOptions={field.value}
                          onChange={(selectedOptions: any) =>
                            field.onChange(selectedOptions)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Indoor Feature</CardHeader>
              <CardContent>
                <FormField
                  name="indoorFeatures"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <MultipleChoice
                          options={indoorFeaturesData}
                          selectedOptions={field.value}
                          onChange={(selectedOptions: any) =>
                            field.onChange(selectedOptions)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Outdoor Features</CardHeader>
              <CardContent>
                <FormField
                  name="outdoorFeatures"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <MultipleChoice
                          options={outdoorFeaturesData}
                          selectedOptions={field.value}
                          onChange={(selectedOptions: any) =>
                            field.onChange(selectedOptions)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Climate Control</CardHeader>
              <CardContent>
                <FormField
                  name="climateControl"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <MultipleChoice
                          options={climateControlData}
                          selectedOptions={field.value}
                          onChange={(selectedOptions: any) =>
                            field.onChange(selectedOptions)
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <FormField
              name="other"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Others</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Others" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default PropertyForm
