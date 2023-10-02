import { FC } from "react"

import { EmailType } from "./constant"

interface Props {
  handleBack: () => void
  onSubmit: (input: EmailType) => void
}

const EmailForm: FC<Props> = ({ handleBack, onSubmit }) => {
  return <div>EmailForm</div>
}

export default EmailForm
