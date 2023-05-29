'use client'

import React, { useState } from 'react'
import FormTextarea from './form-textarea.component'
import FormInput from './form-input.component'

const FormGroup = ({
  onChange,
  keyOne,
  labelOne,
  labelTwo,
  keyTwo,
  name,
  defaultValue = {},
}: {
  labelTwo: string
  labelOne: string
  onChange?: (key: string, value: any) => void
  keyOne: string
  keyTwo: string
  name: string
  defaultValue?: any
}) => {
  const [value, setValue] = useState({})

  return (
    <div className="flex flex-col gap-4 mt-4 mb-4">
      <div className="flex flex-col gap-4">
        <FormInput
          defaultValue={defaultValue[keyOne]}
          label={labelOne}
          keyProp={keyOne}
          onChange={(key, changeValue) => {
            setValue((value) => ({ ...value, [keyOne]: changeValue }))
            if (onChange) {
              onChange(name, { ...value, [keyOne]: changeValue })
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <FormTextarea
          defaultValue={defaultValue[keyTwo]}
          label={labelTwo}
          keyProp={keyTwo}
          onChange={(key, changeValue) => {
            setValue((value) => ({ ...value, [keyTwo]: changeValue }))
            if (onChange) {
              onChange(name, { ...value, [keyTwo]: changeValue })
            }
          }}
        />
      </div>
    </div>
  )
}

export default FormGroup
