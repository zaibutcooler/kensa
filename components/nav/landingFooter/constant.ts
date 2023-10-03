import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"

export const footerContact = [
  {
    platform: "Facebook",
    link: "https://www.facebook.com/dummy-link",
    icon: FaFacebook,
  },
  {
    platform: "YouTube",
    link: "https://www.youtube.com/dummy-link",
    icon: FaYoutube,
  },
  {
    platform: "GitHub",
    link: "https://www.github.com/dummy-link",
    icon: FaGithub,
  },
  {
    platform: "LinkedIn",
    link: "https://www.linkedin.com/dummy-link",
    icon: FaLinkedin,
  },
]

export const footerLinks = [
  { label: "About", link: "#" },
  { label: "Partners", link: "#" },
  { label: "Blogs", link: "#" },
  { label: "Contact", link: "#" },
]

export const solutionData: LinkType[] = [
  { label: "Commerce", link: "#" },
  { label: "Software", link: "#" },
  { label: "Marketing", link: "#" },
  { label: "Analytics", link: "#" },
]

export const companyData: LinkType[] = [
  { label: "About", link: "#" },
  { label: "Partners", link: "#" },
]

export const supportData: LinkType[] = [
  { label: "Contact", link: "#" },
  { label: "Join", link: "#" },
  { label: "Email", link: "#" },
]

export interface LinkType {
  label: string
  link: string
}

export const gradientStyle = {
  background: "linear-gradient(45deg, #ff00ff, #00ffff)",
  WebkitBackgroundClip: "text",
  color: "transparent",
}
