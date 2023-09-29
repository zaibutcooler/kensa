import { FC } from "react"

import { PropertyType } from "../../property-description/form/constant"

interface Props {
  handleBack: () => void
  onSubmit: (input: PropertyType) => void
}

const EmailForm: FC<Props> = ({ handleBack, onSubmit }) => {
  return <div>EmailForm</div>
}

export default EmailForm
