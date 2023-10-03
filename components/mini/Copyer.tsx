"use client"

import { FC } from "react"
import { Copy } from "lucide-react"
import toast from "react-hot-toast"
import { useClipboard } from "use-clipboard-copy"

interface Props {
  large: boolean
  copy: string
}

const Copyer: FC<Props> = ({ large, copy }) => {
  const clipboard = useClipboard()

  const handleClick = () => {
    clipboard.copy(copy)
    toast.success("Copied To ClipBoard")
  }

  return (
    <button
      className="p-1 border rounded-md ml-2 text-gray-500 hover:bg-gray-200 dark:hover:bg-gray-800"
      onClick={handleClick}
    >
      <Copy className={large ? "w-4 h-4" : "w-3 h-3"} />
    </button>
  )
}

export default Copyer
