"use client"

import { useEffect, useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Label } from "@radix-ui/react-label"
import { Select } from "@radix-ui/react-select"
import axios from "axios"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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

import MultipleChoice from "../test"
import {
  PropertyType,
  climateControl,
  demo,
  indoorFeatures,
  initialValues,
  newPropertyData,
  propertySchema,
} from "./constant"

const PropertyForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm<PropertyType>({
    resolver: zodResolver(propertySchema),
    defaultValues: demo,
  })

  useEffect(() => {}, [])

  const onSubmit = async (values: PropertyType) => {
    try {
      setLoading(true)
      const response = await axios.post("/api/property-description", {
        prompt: values,
      })
      console.log("res", response)
    } catch (error) {
      toast.error("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4 pt-6 mb-4">
            <FormField
              name="bedroom"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <Label>Bedform</Label>
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
                  <Label>Bathroom</Label>
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
                  <Label>Car space</Label>
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
                  <Label>Description Length</Label>
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
                  <Label>Land Size</Label>
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
                  <FormLabel>Sizes</FormLabel>
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
            {/* <Card>
              <CardHeader>Property Type</CardHeader>
              <CardContent>
                <FormField
                  name="propertyType"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex items-center space-x-2">
                          <MultipleChoice
                            options={[
                              { label: "Option 1", value: "option-1" },
                              { label: "Option 2", value: "option-2" },
                            ]}
                            selectedOption={field.value}
                            onChange={(selectedOption: any) => {
                              field.onChange(selectedOption)
                              console.log(field.value)
                            }}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Transcription Type</CardHeader>
              <CardContent>
                <FormField
                  name="transcriptionType"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <MultipleChoice
                          options={[
                            { label: "Option 1", value: "option-1" },
                            { label: "Option 2", value: "option-2" },
                          ]}
                          onChange={(selectedOption: any) =>
                            field.onChange(selectedOption)
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
              <CardHeader>Writing Style</CardHeader>
              <CardContent>
                <FormField
                  name="writingStyle"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <RadioGroup defaultValue="option-one">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="option-one"
                              id="option-one"
                            />
                            <Label htmlFor="option-one">Option One</Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card> */}
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
                          options={indoorFeatures}
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
                        <RadioGroup defaultValue="option-one">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem
                              value="option-one"
                              id="option-one"
                            />
                            <Label htmlFor="option-one">Option One</Label>
                          </div>
                        </RadioGroup>
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
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue="option-one"
                        >
                          {climateControl.map((item, index) => (
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                key={index}
                                value={item.value}
                                id={item.value}
                              />
                              <Label htmlFor={item.value}>{item.label}</Label>
                            </div>
                          ))}
                        </RadioGroup>
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
                  <Label>Others</Label>
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
