import { FC } from "react"

import { gradientStyle } from "../nav/landingFooter/constant"
import Copyer from "./Copyer"

interface Props {
  primary: boolean
}

const AddressCard: FC<Props> = ({ primary }) => {
  return (
    <div
      className={`font-base text-gray-500  ${
        primary ? "text-base" : "text-sm"
      }`}
    >
      <h1 className={` ${primary ? "text-2xl mb-8" : "text-xl mb-4"}`}>
        <span style={gradientStyle} className="font-bold">
          ShopDoora
        </span>
        {"  "}
        Co., Ltd
      </h1>
      <div className={`flex ${primary ? "mb-6" : " mb-3"}`}>
        <p className="w-[100px]">Address :</p>
        <div className="space-y-1">
          <p>Orchid Condo, No189, 18th Floor,</p>
          <p>Ahlone Township,Yangon, Myanmar</p>
        </div>
      </div>

      <div className={`flex ${primary ? "mb-6" : " mb-3"}`}>
        <p className="w-[100px]">Phone :</p>
        <div className="space-y-1">
          <p>
            09 5231938 <Copyer large={false} copy="095231938" />
          </p>
          <p>
            09 450880001 <Copyer large={false} copy="09450880001" />
          </p>
        </div>
      </div>
      <div className={`flex ${primary ? "mb-6" : " mb-3"}`}>
        <p className="w-[100px]">Email :</p>
        <div className="space-y-2">
          <p>
            Shopdoora@gmail.com
            <Copyer large={false} copy="shopdoora@gmail.com" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard
