import { AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { FC, useRef } from 'react'

import { CompanyCards } from '../components/company/CompanyCards'
import { ClipboardCopy } from '../components/utilities/ClipboardCopy'

const Home: FC = () => {
  const containerRef = useRef()
  const control = useAnimation()
  const isInView = useInView(containerRef, { amount: 0.5 })

  const title = 'Frontend Engineer'
  const description = 'Home page'

  return (
    <AnimatePresence>
      <div
        className={`bg-gradient relative h-[100svh] items-center justify-center bg-black text-white`}
        ref={containerRef}
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <section className="flex max-h-[100svh] flex-col">
          <CompanyCards {...{ pageControl: control, isPageInView: isInView }} />
        </section>
        <div className="fixed left-0 bottom-0 m-24 text-14 tablet:m-48">
          <ClipboardCopy {...{ label: 'Frontend Engineer' }}>andrewngorain@gmail.com</ClipboardCopy>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Home
