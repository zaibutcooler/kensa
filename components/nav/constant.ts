import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import {
  Box,
  HelpCircleIcon,
  LayoutDashboard,
  Mail,
  MapIcon,
  MessageSquareDashed,
  Paintbrush,
  Pencil,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react"

export const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, route: "/dashboard" },
  {
    label: "Lead Gen",
    icon: MapIcon,
    route: "/leadgen",
  },
  {
    label: "Emailing",
    icon: Mail,
    route: "/emailing",
  },
  {
    label: "Property Description",
    icon: MessageSquareDashed,
    route: "/property-description",
  },
  { label: "Drawing Conversion", icon: Pencil, route: "/image-conversion" },
]

export const extraSidebarLinks = [
  { label: "Setting", icon: Settings, route: "" },
  { label: "Account", icon: User, route: "" },
  { label: "Support", icon: HelpCircleIcon, route: "" },
]

export interface LinkType {
  label: string
  icon: any
  route: string
}
