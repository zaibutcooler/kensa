import React from "react"

const MultipleChoice = ({ options, selectedOptions, onChange }: any) => {
  const handleOptionChange = (optionValue: any) => {
    const updatedOptions = selectedOptions.includes(optionValue)
      ? selectedOptions.filter((value: any) => value !== optionValue)
      : [...selectedOptions, optionValue]
    onChange(updatedOptions)
  }

  return (
    <div>
      {options.map((option: any) => (
        <label key={option.value} className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="multiple-choice"
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={() => handleOptionChange(option.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  )
}

export default MultipleChoice
