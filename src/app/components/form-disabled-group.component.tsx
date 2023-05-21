'use client'

import React, { useState } from 'react'
import FormTextarea from './form-textarea.component'
import FormInput from './form-input.component'

const FormDisabledGroup = ({
  onChange,
  keyOne,
  labelOne,
  labelTwo,
  keyTwo,
}: {
  labelTwo: string
  labelOne: string
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
        <FormInput
          disabled={true}
          label={labelOne}
          keyProp={keyOne}
          defaultValue={labelOne}
          onChange={(inputValue: any) => {
            setValue((value) => ({ ...value, [labelOne]: inputValue.value }))
            if (onChange) {
              onChange(keyTwo, { ...value, [labelOne]: inputValue.value })
            }
          }}
        />
      </div>
      <div className="flex flex-col gap-4">
        <FormTextarea
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

export default FormDisabledGroup
