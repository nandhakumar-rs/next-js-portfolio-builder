'use client'
import React, { useEffect } from 'react'
import FormHeader from './form-header.component'
import FormInput from './form-input.component'
import FormTextarea from './form-textarea.component'
import FormMultiSelect from './form-multi-select.component'
import { skills, tools } from '../constant'
import FormGroup from './form-group.component'
import usePortfolioStore from '../store'
import { addPortfolio, updatePortfolioById } from '@/lib/firebase/user'
import { useAuth } from '@/provider/auth.provider'
import { useCollection } from 'react-firebase-hooks/firestore'
import { collection, orderBy, query } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { useRouter } from 'next/navigation'

const UserForm = () => {
  const { setData, data, setPortfolioId, portfolioId } = usePortfolioStore()
  const { user } = useAuth()

  const { push } = useRouter()

  const [portfolios] = useCollection(
    query(
      collection(db, `portfolio`),
      orderBy('createdAt', 'desc'),
    ),
  )

  useEffect(() => {
    if (portfolios?.docs.length) {
      setPortfolioId(portfolios?.docs[0].data().id)
    }
  }, [portfolios])

  if (user)
    return (
      <main className="flex flex-col gap-4 bg-white h-screen w-96 overflow-y-scroll fixed top-14 left-0 hide-scrollbar px-5 py-8">
        <FormHeader label="Your Info" />
        <FormInput
          defaultValue={data.name}
          label="Name"
          keyProp="name"
          onChange={(key, value) => {
            setData({ [key]: value })
          }}
        />
        <FormInput
          defaultValue={data.role}
          label="Role or Title"
          keyProp="role"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormInput
          defaultValue={data.email}
          label="Email"
          keyProp="email"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormInput
          defaultValue={data.phone}
          label="Phone"
          keyProp="phone"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormTextarea
          defaultValue={data.bio}
          label="Bio"
          keyProp="bio"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormMultiSelect
          defaultValue={data.skills?.map((skill) => ({
            label: skill,
            value: skill,
          }))}
          label="Skills"
          options={skills}
          keyProp="skills"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormMultiSelect
          defaultValue={data.tools?.map((tool) => ({
            label: tool,
            value: tool,
          }))}
          label="Tools & Technology"
          options={tools}
          keyProp="tools"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormHeader label="Social Profile" />
        <FormInput
          defaultValue={data.github}
          label="Github"
          keyProp="github"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormInput
          defaultValue={data.linkedIn}
          label="Linked In"
          keyProp="linkedin"
          onChange={(key, value) => setData({ [key]: value })}
        />
        <FormHeader label="Projects" />
        <FormGroup
          defaultValue={data.projectOne}
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
          defaultValue={data.educationOne}
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
        />{' '}
        <button
          onClick={async () => {
            console.log(portfolioId)
            if (!portfolioId) {
              const id = await addPortfolio(data, user?.uid)
              setPortfolioId(id)
              push(`/portfolio/${id}`)

              return
            }

            await updatePortfolioById(data, user.uid, portfolioId)

            push(`/portfolio/${portfolioId}`)
          }}
          className="bg-green-500 rounded-lg  w-full py-2 px-3"
        >
          Publish
        </button>
        <div className="pb-8" />
        {/* <FormHeader label="Customization" /> */}
        {/* <FormInput
        label="Theme (in Hex Eg: #D7C6F4)"
        keyProp="theme"
        onChange={(key, value) => setData({ [key]: value })}
      />{' '} */}
      </main>
    )

  return <></>
}

export default UserForm
