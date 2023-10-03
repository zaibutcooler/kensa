import * as z from "zod"

export type ImageType = z.infer<typeof imageSchema>

export const imageSchema = z.object({
  imageUrl: z.string().min(1),
})
