import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { ParsedUrlQuery } from 'querystring'
import React, { useEffect, useRef } from 'react'

import { CompanyAttributes } from '../../components/company/CompanyAttributes'
import { NextCompanyLink } from '../../components/company/NextCompanyLink'
import { Projects } from '../../components/projects/Projects'
import { Title } from '../../components/Title'
import { COMPANY_MAP } from '../../lib/constants'

interface IParams extends ParsedUrlQuery {
  slug: string
}

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const Company = ({ company, nextCompany }) => {
  const containerRef = useRef()
  const control = useAnimation()
  const isInView = useInView(containerRef, { amount: 0.5 })

  const title = company.name
  const description = `Experience at ${company.name}`

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, isInView])

  return (
    <AnimatePresence mode="wait">
      <div
        className={`${company.backgroundClass} ${company.colorClass} relative flex h-[100svh] flex-col`}
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate={control}
          className="max-h-[100svh] overflow-y-scroll"
          ref={containerRef}
        >
          <div className="flex min-h-[40vh] w-full flex-col items-center justify-center p-24 tablet:min-h-[75vh] tablet:p-48">
            <motion.p
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              className="pt-64 text-14"
            >
              {company.description}
            </motion.p>
            <Title className="pb-48 tablet:pb-96 tablet:text-192">{company.name}</Title>
            <CompanyAttributes
              {...{ attributes: company.attributes, pageControl: control, isInPageView: isInView }}
            />
          </div>
          <div className="relative min-h-[50vh] tablet:min-h-[70vh]">
            <Image
              src={company.heroImage}
              alt="project hero image"
              fill
              sizes={`(max-width: 640px) 100vw, 50vw`}
              style={{
                objectFit: 'cover',
              }}
              placeholder="blur"
            />
          </div>
          <div className="flex flex-col tablet:px-48">
            <Projects {...{ projects: company.projects }} />
          </div>
          <NextCompanyLink {...{ nextCompany }} />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams
  const company = COMPANY_MAP[slug]
  const companyKeys = Object.keys(COMPANY_MAP)
  const companyIndex = companyKeys.findIndex((key) => key === slug)
  let nextCompanyIndex = companyIndex + 1
  if (companyIndex === companyKeys.length - 1) {
    nextCompanyIndex = 0
  }
  const nextCompany = Object.values(COMPANY_MAP)[nextCompanyIndex]

  return { props: { company, nextCompany } }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const companies = Object.values(COMPANY_MAP)
  const paths = companies.map(({ route }) => {
    return {
      params: { slug: route },
    }
  })

  return { paths, fallback: false }
}

export default Company
