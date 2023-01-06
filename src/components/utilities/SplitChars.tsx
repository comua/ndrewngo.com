import { motion, Variants } from 'framer-motion'
import React, { FC, PropsWithChildren, useMemo } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  variants?: Variants
  className?: string
}

const SplitChars: FC<PropsWithChildren<Props>> = ({ children, variants, className }) => {
  if (typeof children !== 'string') {
    throw new Error('SplitChars only accepts a string as child.')
  }

  const chars = children.split('')

  const classNames = useMemo(() => {
    return twMerge('inline-block', className)
  }, [className])

  return (
    <>
      {chars.map((char, index) => {
        if (char === ' ') {
          return <> </>
        }
        return (
          <motion.div key={index} className={classNames} variants={variants}>
            {char}
          </motion.div>
        )
      })}
    </>
  )
}

export default SplitChars
