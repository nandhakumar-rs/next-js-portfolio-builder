'use client'
import Image from 'next/image'
import React from 'react'
import usePortfolioStore from '../store'

const Portfolio = () => {
  const { data, } = usePortfolioStore()

  return (
    <div className="w-full h-full bg-white max-w-[1000px] mx-auto">
      <div className={`h-[200px] flex flex-col justify-center px-10 bg-gradient-to-b  from-[#D7C6F4] to-[#FFFFFF]`}>
        <div className="self-start">
            
          <p className="text-gray-700 font-semi-bold m-0 mb-1">
            A {data?.role}
          </p>
          <p className="text-gray-950 text-5xl font-bold m-0">
            {data?.name}
          </p>
        </div>
        <div className="self-end mt-6 flex gap-4">
          {data?.github && (
            <a href={data.github} target="_blank">
              <Image alt="github" src={'/github.svg'} width={24} height={24} />
            </a>
          )}
          {data?.linkedIn && (
            <a href={data.linkedIn} target="_blank">
              <Image
                alt="github"
                src={'/linkedin.svg'}
                width={24}
                height={24}
              />
            </a>
          )}
          {data?.email && (
            <a href={`mailto:${data?.email}`} target="_blank">
              <Image alt="github" src={'/mail.svg'} width={24} height={24} />
            </a>
          )}
          {data?.phone && (
            <a href={`tel:${data?.phone}`} target="_blank">
              <Image alt="github" src={'/smartphone.svg'} width={24} height={24} />
            </a>
          )}
        </div>
      </div>
      <div className="px-10 py-[80px] flex flex-col gap-6  ">
        <div className=" flex justify-between">
          <p className="text-4xl min-w-[276px] text-gray-950 font-bold ">
            About
          </p>
          <p className="text-lg text-[#5B5C5F]">
            {data?.bio ||
              `Curious Full Stack Developer who always tries to keep up with the
            trending technologies. Believes communication & empathy is the key
            to understanding the problems and providing the best possible
            solution in both the tech and not tech world.`}
          </p>
        </div>

        <div className=" flex justify-between">
          <p className="text-4xl min-w-[276px] max-w-[276px] text-gray-950 font-bold ">
            Skills
          </p>
          <div className="flex w-full gap-4">
            {data?.skills ? (
              data.skills.map((tool: string, index: number) => (
                <p
                  key={index}
                  className="text-lg h-max w-max text-[#5B5C5F] m-0 bg-[#F0F1F4] px-2 py-1 rounded-md"
                >
                  {tool}
                </p>
              ))
            ) : (
              <p className="text-lg h-max w-max text-[#5B5C5F] m-0 bg-[#F0F1F4] px-2 py-1 rounded-md">
                Photoshop
              </p>
            )}
          </div>
        </div>

        <div className=" flex justify-between">
          <p className="text-4xl min-w-[276px] max-w-[276px] text-gray-950 font-bold ">
            Tools & Technology
          </p>
          <div className="flex w-full gap-4">
            {data?.tools ? (
              data.tools.map((tool: string, index: number) => (
                <p
                  key={index}
                  className="text-lg h-max w-max text-[#5B5C5F] m-0 bg-[#F0F1F4] px-2 py-1 rounded-md"
                >
                  {tool}
                </p>
              ))
            ) : (
              <p className="text-lg h-max w-max text-[#5B5C5F] m-0 bg-[#F0F1F4] px-2 py-1 rounded-md">
                Photoshop
              </p>
            )}
          </div>
        </div>

        <div className=" flex justify-between">
          <p className="text-4xl min-w-[276px] max-w-[276px] text-gray-950 font-bold ">
            Projects
          </p>
          <div className='w-full'>
            <p className="text-lg font-bold text-[#5B5C5F] mb-2 mt-0">
              {data?.projectOne?.title || 'Space Exploration'}
            </p>
            <p className="text-[#5B5C5F] text-lg m-0">
              {data?.projectOne?.description ||
                `Landing page to explore planets in space, the goal is to build an interactive and user-friendly user interface with a good transition effect`}
            </p>
          </div>
          {data?.projectTwo?.title && (
            <div className='w-full'>
              <p className="text-lg font-bold text-[#5B5C5F] mb-2 mt-0">
                {data?.projectTwo?.title || 'Space Exploration'}
              </p>
              <p className="text-[#5B5C5F] text-lg m-0">
                {data?.projectTwo?.description ||
                  `Landing page to explore planets in space, the goal is to build an interactive and user-friendly user interface with a good transition effect`}
              </p>
            </div>
          )}
        </div>

        <div className=" flex justify-between">
          <p className="text-4xl min-w-[276px] max-w-[276px] text-gray-950 font-bold ">
            Education
          </p>
          <div className='w-full'>
            <p className="text-lg font-bold text-[#5B5C5F] mb-2 mt-0">
              {data?.educationOne?.university || 'KGISL Institute Of Technology (2020 - 2024)'}
            </p>
            <p className="text-[#5B5C5F] text-lg m-0">
              {data?.educationOne?.specialization ||
                `Bachelor of Engineering Specialised in Computer Science`}
            </p>
          </div>

          {data?.educationTwo?.university && (
            <div className='w-full'>
              <p className="text-lg font-bold text-[#5B5C5F] mb-2 mt-0">
                {data?.educationTwo?.university || 'KGISL Institute Of Technology'}
              </p>
              <p className="text-[#5B5C5F] text-lg m-0">
                {data?.educationTwo?.specialization ||
                  `Bachelor of Engineering Specialised in Computer Science`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
