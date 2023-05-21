'use client'

import React, { useState } from 'react'
import FormTextarea from './form-textarea.component'
import Select, {
  components,
  ControlProps,
  Props,
  StylesConfig,
} from 'react-select'
import FormInput from './form-input.component'

const FormSelectGroup = ({
  options = [],
  onChange,
  keyOne,
  labelOne,
  labelTwo,
  keyTwo,
}: {
  labelTwo: string
  labelOne: string
  options: string[]
  onChange?: (key: string, value: any) => void
  keyOne: string
  keyTwo: string
}) => {
  const [value, setValue] = useState({
    [labelOne]: '',
    [labelTwo]: '',
  })

  return (
    <div className="flex flex-col gap-4 mt-4 mb-4">
      <div className="flex flex-col gap-4">
        <p className="m-0 text-gray-800 text-sm "> {labelOne}</p>

        <Select
          classNamePrefix="react-select"
          isSearchable
          name={keyOne}
          options={options.map((option: string) => ({
            value: option,
            label: option,
          }))}
          onChange={(event: any) => {
            setValue((value) => ({ ...value, [labelOne]: event.target.value }))
            if (onChange) {
              onChange(keyOne, {
                ...value,
                [labelOne]: event.target.value,
              })
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <FormInput
          label={labelTwo}
          keyProp={keyTwo}
          onChange={(inputValue: any) => {
            setValue((value) => ({ ...value, [labelTwo]: inputValue.value }))
            if (onChange) {
              onChange(keyTwo, { ...value, [labelTwo]: inputValue.value })
            }
          }}
        />
      </div>
    </div>
  )
}

export default FormSelectGroup
