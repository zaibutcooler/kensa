import {
  HelpCircleIcon,
  Layout,
  LayoutDashboard,
  Mail,
  Settings,
  ShoppingBag,
  User,
} from "lucide-react"

export const sidebarLinks = [
  { label: "Dashboard", icon: LayoutDashboard, route: "" },
  { label: "Convertor", icon: Layout, route: "" },
  { label: "Email", icon: Mail, route: "" },
  { label: "Etc", icon: ShoppingBag, route: "" },
]

export const extraSidebarLinks = [
  { label: "Setting", icon: Settings, route: "" },
  { label: "Account", icon: User, route: "" },
  { label: "Support", icon: HelpCircleIcon, route: "" },
]
