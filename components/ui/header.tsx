import { FC } from "react"

interface Props {
  title: string
  description: string
  id: string
}

export const Header: FC<Props> = ({ title, description, id }) => {
  return (
    <div id={id} className="w-full flex justify-center text-center pt-14">
      <header className="leading-6 mb-10">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-500 text-sm md:text-base">{description}</p>
      </header>
    </div>
  )
}
