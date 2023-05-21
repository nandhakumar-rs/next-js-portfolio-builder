'use client'
import React, { ChangeEvent, useState } from 'react'

const FormTextarea = ({
  label,
  keyProp,
  onChange,
}: {
  label: string
  keyProp: string
  onChange?: (keyProp: string, value: string) => void
}) => {
  const [value, setValue] = useState('')

  return (
    <div>
      <p className="m-0 text-gray-800 text-sm "> {label}</p>
      <textarea
        rows={5}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
          setValue(event.target.value)
          if (onChange) {
            onChange(keyProp,event.target.value)
          }
        }}
        className="mt-2 w-full border rounded-md h-10 p-2 border-gray-300 text-gray-950"
      />
    </div>
  )
}

export default FormTextarea
