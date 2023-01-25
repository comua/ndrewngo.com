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

export const NextCompanyLink = ({ nextCompany }) => {
  const containerRef = useRef()
  const control = useAnimation()
  const isInView = useInView(containerRef, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    }
  }, [control, isInView])

  return (
    <AnimatePresence>
      <NoScrollLink
        href={`/company/${nextCompany.route}`}
        className="button-hover flex min-h-[30vh] flex-col items-center justify-center py-32 tablet:min-h-[50vh] tablet:py-64 tablet:px-48"
      >
        <motion.div
          variants={buttonVariant}
          initial="hidden"
          animate={control}
          ref={containerRef}
          className="flex flex-col items-center justify-center"
        >
          <motion.p variants={buttonItemVariant} className="text-14 tablet:text-24">
            Next company
          </motion.p>
          <Title className="pb-24 tablet:pb-32 tablet:text-192">{nextCompany.name}</Title>
          <motion.div
            variants={buttonItemVariant}
            className="button-background-black flex h-64 w-64 items-center justify-center rounded-full bg-black/10"
          >
            <span className="button-text-white flex items-center justify-center text-24">↓</span>
          </motion.div>
        </motion.div>
      </NoScrollLink>
    </AnimatePresence>
  )
}
