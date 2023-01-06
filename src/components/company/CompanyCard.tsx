import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'

import { EXPO_OUT } from '../../lib/constants'
import { CompanyLink } from './CompanyLink'

const imageVariants = {
  hidden: {
    y: '100vh',
  },
  visible: {
    y: 0,
    transition: {
      duration: 1.2,
      ease: EXPO_OUT,
    },
  },
}

export const CompanyCard = ({ company, pageControl, isPageInView }) => {
  useEffect(() => {
    if (isPageInView) {
      pageControl.start('visible')
    } else {
      pageControl.start('hidden')
    }
  }, [pageControl, isPageInView])

  return (
    <div className="relative mt-96 flex min-h-[50vh] min-w-full snap-center items-center justify-center first:mt-96 last:mb-96 tablet:min-h-[60vh] tablet:min-w-[50vw]">
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate={pageControl}
        className="absolute h-full w-full overflow-hidden"
      >
        <Image
          src={company.heroImage}
          alt="project hero image"
          fill
          sizes={`(max-width: 640px) 100vw, 50vw`}
          style={{
            objectFit: 'cover',
            zIndex: 0,
            transition: 'all 0.3s',
          }}
        />
        <div className="absolute h-full w-full bg-black/20" />
      </motion.div>
      <CompanyLink {...{ company }} />
    </div>
  )
}
