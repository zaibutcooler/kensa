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
  writingStyle: z.string().array(),
  descriptionLength: z.number().min(1).max(500),
  other: z.string(),
  newProperty: z.string(),
  landSize: z.number(),
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
  writingStyle: [],
  descriptionLength: 0,
  other: "",
  newProperty: "",
  landSize: 0,
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

export const newPropertyData = [
  { label: "Yes", value: "yes" },
  { label: "No", value: "No" },
]

export const demo: PropertyType = {
  propertyType: "House",
  bedroom: 3,
  bathroom: 2,
  carSpace: 2,
  transcriptionType: "Manual",
  outdoorFeatures: ["swimming_pool", "garden"],
  indoorFeatures: ["hardwood_floors", "fireplace"],
  climateControl: ["central_heating", "air_conditioning"],
  writingStyle: ["formal", "engaging"],
  descriptionLength: 250,
  other: "Additional information about the property.",
  newProperty: "Yes",
  landSize: 1200,
}
