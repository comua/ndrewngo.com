import { motion } from 'framer-motion'
import React, { FC, PropsWithChildren, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

import { EXPO_OUT } from '../lib/constants'
import SplitChars from './utilities/SplitChars'

interface Props {
  className?: string
}

const textVariant = {
  hidden: {
    opacity: 0,
    y: '25%',
    x: '25%',
    transition: { duration: 1.2, ease: EXPO_OUT, staggerChildren: 0.08 },
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 1.2, ease: EXPO_OUT, staggerChildren: 0.08 },
  },
}
const letterVariant = {
  hidden: {
    opacity: 0,
    rotateY: -100,
    scale: 0.6,
    transition: { duration: 0.5, ease: EXPO_OUT },
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: EXPO_OUT,
    },
  },
}

export const Title: FC<PropsWithChildren<Props>> = ({ children, className }) => {
  const classes = useMemo(() => {
    return twMerge('flex font-dahlia text-64 leading-tight tablet:text-144', className)
  }, [className])

  return (
    <motion.h1 variants={textVariant} className={classes}>
      <SplitChars variants={letterVariant}>{children}</SplitChars>
    </motion.h1>
  )
}
