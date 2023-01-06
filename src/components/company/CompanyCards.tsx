import React from 'react'

import { COMPANY_MAP } from '../../lib/constants'
import { CompanyCard } from './CompanyCard'

export const CompanyCards = ({ pageControl, isPageInView }) => {
  return (
    <div className="flex flex-col items-center justify-start overflow-y-scroll px-24">
      {Object.values(COMPANY_MAP).map((company) => (
        <CompanyCard key={company.name} {...{ company, pageControl, isPageInView }} />
      ))}
    </div>
  )
}
