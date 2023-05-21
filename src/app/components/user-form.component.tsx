'use client'
import React, { useEffect } from 'react'
import FormHeader from './form-header.component'
import FormInput from './form-input.component'
import FormTextarea from './form-textarea.component'
import FormMultiSelect from './form-multi-select.component'
import { skills, tools } from '../constant'
import FormGroup from './form-group.component'
import usePortfolioStore from '../store'

const UserForm = () => {
  const { setData, data } = usePortfolioStore()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <main className="flex flex-col gap-4 bg-white h-screen w-96 overflow-y-scroll fixed top-14 left-0 hide-scrollbar px-5 py-8">
      <FormHeader label="Your Info" />
      <FormInput
        label="Name"
        keyProp="name"
        onChange={(key, value) => {
          console.log(key, value)
          setData({ [key]: value })
        }}
      />
      <FormInput
        label="Role or Title"
        keyProp="role"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormInput
        label="Email"
        keyProp="email"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormInput
        label="Phone"
        keyProp="phone"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormTextarea
        label="Bio"
        keyProp="bio"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormMultiSelect
        label="Skills"
        options={skills}
        keyProp="skills"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormMultiSelect
        label="Tools & Technology"
        options={tools}
        keyProp="tools"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormHeader label="Social Profile" />
      <FormInput
        label="Github"
        keyProp="github"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormInput
        label="Linked In"
        keyProp="linkedin"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormHeader label="Projects" />
      <FormGroup
        name="projectOne"
        keyOne="title"
        keyTwo="description"
        labelOne="Title"
        labelTwo="Description"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormGroup
        name="projectTwo"
        keyOne="title"
        keyTwo="description"
        labelOne="Title"
        labelTwo="Description"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormHeader label="Education" />
      <FormGroup
        name="educationOne"
        keyOne="university"
        keyTwo="specialization"
        labelOne="University"
        labelTwo="Specialization"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormGroup
        name="educationTwo"
        keyOne="university"
        keyTwo="specialization"
        labelOne="University"
        labelTwo="Specialization"
        onChange={(key, value) => setData({ [key]: value })}
      />
      <FormHeader label="Customization" />
      <FormInput
        label="Theme (in Hex Eg: #D7C6F4)"
        keyProp="theme"
        onChange={(key, value) => setData({ [key]: value })}
      />{' '}
      <div className="pb-8" />
    </main>
  )
}

export default UserForm
