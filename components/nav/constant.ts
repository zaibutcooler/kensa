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
  { label: "Hand Drawing to 2D", icon: Pencil, route: "/Sketch-2D" },
  { label: "Colorize 2D Drawing", icon: Paintbrush, route: "/2D-Clean" },
  { label: "3D conversion", icon: Box, route: "/2D-3D" },
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
