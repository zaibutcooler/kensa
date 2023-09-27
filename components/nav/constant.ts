import {
  HelpCircleIcon,
  Layout,
  LayoutDashboard,
  Mail,
  MessageSquareDashed,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react"

export const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, route: "" },
  { label: "Convertor", icon: Layout, route: "" },
  {
    label: "Property Description",
    icon: MessageSquareDashed,
    route: "/property-description",
  },
  { label: "Etc", icon: ShoppingBag, route: "" },
]

export const extraSidebarLinks = [
  { label: "Setting", icon: Settings, route: "" },
  { label: "Account", icon: User, route: "" },
  { label: "Support", icon: HelpCircleIcon, route: "" },
]
