import * as z from "zod"

export type PropertyType = z.infer<typeof propertySchema>

export const propertySchema = z.object({
  propertyType: z.string().min(1),
  bedroom: z.number(),
  bathroom: z.number(),
  carSpace: z.number(),
  transcriptionType: z.string(),
  outdoorFeatures: z.string().array(),
  indoorFeatures: z.string().array(),
  climateControl: z.string().array(),
  wrtingStyle: z.string().array(),
  descriptionLength: z.number().min(1).max(500),
  other: z.string(),
  newProperty: z.string(),
  landSize: z.number().array(),
})

export const initialValues: PropertyType = {
  propertyType: "",
  bedroom: 0,
  bathroom: 0,
  carSpace: 0,
  transcriptionType: "",
  outdoorFeatures: [],
  indoorFeatures: [],
  climateControl: [],
  wrtingStyle: [],
  descriptionLength: 0,
  other: "",
  newProperty: "",
  landSize: [0],
}

export const outdoorFeatures = [
  { label: "Swimming Pool", value: "swimming_pool" },
  { label: "Garden", value: "garden" },
  { label: "Balcony", value: "balcony" },
  { label: "Patio", value: "patio" },
  { label: "Deck", value: "deck" },
  { label: "Fenced Yard", value: "fenced_yard" },
]

export const indoorFeatures = [
  { label: "Hardwood Floors", value: "hardwood_floors" },
  { label: "Fireplace", value: "fireplace" },
  { label: "Walk-In Closet", value: "walk_in_closet" },
  { label: "Granite Countertops", value: "granite_countertops" },
  { label: "Stainless Steel Appliances", value: "stainless_steel_appliances" },
  { label: "High Ceilings", value: "high_ceilings" },
]

export const climateControl = [
  { label: "Central Heating", value: "central_heating" },
  { label: "Air Conditioning", value: "air_conditioning" },
  { label: "Ceiling Fans", value: "ceiling_fans" },
  { label: "Smart Thermostat", value: "smart_thermostat" },
  { label: "Radiant Floor Heating", value: "radiant_floor_heating" },
  { label: "Ductless Mini-Split", value: "ductless_mini_split" },
]

export const writingStyle = [
  { label: "Formal", value: "formal" },
  { label: "Casual", value: "casual" },
  { label: "Descriptive", value: "descriptive" },
  { label: "Engaging", value: "engaging" },
  { label: "Concise", value: "concise" },
  { label: "Persuasive", value: "persuasive" },
]
