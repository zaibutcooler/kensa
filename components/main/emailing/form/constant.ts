import * as z from "zod"

export type EmailType = z.infer<typeof emailSchema>

export const emailSchema = z.object({})
