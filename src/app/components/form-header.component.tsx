import React from 'react'

const FormHeader = ({ label }: { label: string }) => {
  return (
    <div className="border-gray-800 border-b pb-2">
      <p className=" text-base text-gray-950 font-medium m-0">{label}</p>
    </div>
  )
}

export default FormHeader
