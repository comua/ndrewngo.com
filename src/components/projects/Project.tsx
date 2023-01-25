import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

export const Project = ({ project, index = 0 }) => {
  const placement = index + 1
  const isDivisibleBy2 = placement % 2 === 0
  const isDivisibleBy3 = placement % 3 === 0

  const containerClasses = twMerge(
    'flex w-full tablet:mt-64 mt-24 tablet:px-0',
    isDivisibleBy2 && 'justify-center',
    isDivisibleBy3 && 'justify-end'
  )

  const imageContainerClasses = twMerge(
    'flex flex-col w-full tablet:flex-row tablet:w-4/5',
    isDivisibleBy2 && 'tablet:w-full'
  )

  return (
    <div className={containerClasses}>
      {/* {isEvenPlace && (
        <div className="mt-32 text-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam vero cupiditate
          illum? Autem pariatur, molestias fugit nemo dolor delectus reiciendis animi iusto magni
          excepturi vitae consequuntur itaque nostrum provident.
        </div>
      )} */}
      <div className={imageContainerClasses}>
        {project.highlight.images?.map((image) => {
          return (
            <div
              key={image}
              className="relative mt-24 aspect-video w-full first:mt-0 first:ml-0 tablet:ml-24 tablet:mt-0 tablet:aspect-auto tablet:h-[60vh]"
            >
              <Image
                src={image}
                alt="project hero image"
                fill
                sizes={`100vw`}
                style={{
                  objectFit: 'contain',
                }}
                priority
              />
            </div>
          )
        })}
      </div>
      {/* {!isEvenPlace && (
        <div className="mt-32 text-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam vero cupiditate
          illum? Autem pariatur, molestias fugit nemo dolor delectus reiciendis animi iusto magni
          excepturi vitae consequuntur itaque nostrum provident.
        </div>
      )} */}
    </div>
  )
}
