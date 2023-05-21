'use client'
import makeAnimated from 'react-select/animated'
import React from 'react'
import Select from 'react-select'

const animatedComponents = makeAnimated()

const FormMultiSelect = ({
  options = [],
  onChange,
  keyProp,
  label,
}: {
  label: string
  options: string[]
  onChange?: (keyProp: string, value: string) => void
  keyProp: string
}) => {
  return (
    <div className="mb-4">
      <p className="m-0 text-gray-800 text-sm "> {label}</p>
      <Select
        className="mt-2 w-full border rounded-md border-gray-300 h-max"
        classNamePrefix="react-select"
        styles={{
          control: (baseStyles, state) => {
            return {
              ...baseStyles,
              color: 'black',
            }
          },
        }}
        closeMenuOnSelect={false}
        components={animatedComponents}
        onChange={(event: any) => {
          if (onChange) {
            onChange(keyProp, event.map((ev:any) => ev.value))
          }
        }}
        isMulti
        options={options.map((option: string) => ({
          value: option,
          label: option,
        }))}
      />
    </div>
  )
}

export default FormMultiSelect
