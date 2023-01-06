import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

import { EXPO_OUT } from '../../lib/constants'
import { NoScrollLink } from '../navigation/NoScrollLink'
import { Title } from '../Title'

const buttonVariant = {
  hidden: {},
  visible: {},
}

const buttonItemTransition = { delay: 0.3, duration: 0.9, ease: EXPO_OUT }

const buttonItemVariant = {
  hidden: {
    opacity: 0,
    transition: buttonItemTransition,
  },
  visible: {
    opacity: 1,
    transition: buttonItemTransition,
  },
}

export const CompanyLink = ({ company }) => {
  const containerRef = useRef()
  const control = useAnimation()
  const isInView = useInView(containerRef, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, isInView])

  return (
    <AnimatePresence>
      <NoScrollLink
        href={`/company/${company.route}`}
        className="button-hover z-10 flex cursor-pointer flex-col items-center justify-center"
      >
        <motion.div
          variants={buttonVariant}
          initial="hidden"
          animate={control}
          ref={containerRef}
          className="flex flex-col items-center justify-center"
        >
          <motion.p variants={buttonItemVariant} className="text-14 font-bold">
            {company.description}
          </motion.p>
          <Title className="mb-16">{company.name}</Title>
          <motion.div
            variants={buttonItemVariant}
            className="button-background-white relative flex h-64 w-64 items-center justify-center rounded-full bg-black/60"
          >
            <span className="button-text-black absolute flex -rotate-90 items-center justify-center text-24">
              ↓
            </span>
          </motion.div>
        </motion.div>
      </NoScrollLink>
    </AnimatePresence>
  )
}
