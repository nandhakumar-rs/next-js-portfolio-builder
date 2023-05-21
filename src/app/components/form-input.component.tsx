'use client'
import React, { ChangeEvent, useState } from 'react'

const FormInput = ({
  label,
  keyProp = '',
  defaultValue = '',
  onChange,
  disabled = false,
}: {
  label: string
  keyProp: string
  defaultValue?: string
  disabled?: boolean
  onChange?: (keyProp: string, value: string) => void
}) => {
  const [value, setValue] = useState(defaultValue)

  return (
    <div>
      <p className="m-0 text-gray-800 text-sm "> {label}</p>
      <input
        disabled={disabled}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value)
          if (onChange) {
            onChange(keyProp, event.target.value)
          }
        }}
        className="mt-2 w-full border rounded-md h-10 px-2 border-gray-300 text-gray-950"
      />
    </div>
  )
}

export default FormInput
