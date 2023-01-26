import Image from 'next/image'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export const Project = ({ project, index = 0 }) => {
  const [paddingTop, setPaddingTop] = useState('0')

  const placement = index + 1
  const isDivisibleBy2 = placement % 2 === 0
  const isDivisibleBy3 = placement % 3 === 0

  const containerClasses = twMerge(
    'flex w-full tablet:mt-64 mt-24 tablet:px-0 px-24',
    isDivisibleBy2 && 'justify-center',
    isDivisibleBy3 && 'justify-end'
  )

  return (
    <div className={containerClasses}>
      <div className="flex w-full flex-col tablet:w-3/4 tablet:flex-row">
        {project.highlight.images?.map((image) => {
          return (
            <div
              key={image}
              className="mt-24 flex w-full flex-col first:ml-0 first:mt-0 tablet:mt-0 tablet:ml-24"
            >
              <div className="relative w-full" style={{ paddingTop }}>
                <Image
                  src={image}
                  alt="project hero image"
                  fill
                  sizes={`100vw`}
                  style={{
                    objectFit: 'contain',
                  }}
                  priority
                  onLoad={({ target }) => {
                    const { naturalWidth, naturalHeight } = target as HTMLImageElement
                    setPaddingTop(`calc(100% / (${naturalWidth} / ${naturalHeight})`)
                  }}
                />
              </div>
              {/* <div className="mt-16 text-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magnam vero
                cupiditate illum? Autem pariatur, molestias fugit nemo dolor delectus reiciendis
                animi iusto magni excepturi vitae consequuntur itaque nostrum provident.
              </div> */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
