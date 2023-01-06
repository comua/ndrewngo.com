import { motion } from 'framer-motion'
import React from 'react'

const rowVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const CompanyAttributes = ({ attributes }) => {
  return (
    <ul className="flex w-full flex-wrap text-14 tablet:w-1/2 tablet:justify-between">
      <Row>
        <Label>Title</Label>
        <div>{attributes.role}</div>
      </Row>
      <Row>
        <Label>Team</Label>
        <div>{attributes.team}</div>
      </Row>
      <Row>
        <Label>Timespan</Label>
        <div>
          {attributes.employment.startedAt} - {attributes.employment.endedAt}
        </div>
      </Row>
      <Row>
        <Label>URL</Label>
        <a href={attributes.url}>{new URL(attributes.url).hostname.replace('www.', '')} ↗</a>
      </Row>
    </ul>
  )
}

const Row = ({ children }) => {
  return (
    <motion.li variants={rowVariants} className="mb-24 flex w-1/2 flex-col tablet:w-auto">
      {children}
    </motion.li>
  )
}

const Label = ({ children }) => {
  return <div className="mb-4 opacity-50">{children}</div>
}
