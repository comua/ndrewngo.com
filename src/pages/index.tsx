import { AnimatePresence, useAnimation, useInView } from 'framer-motion'
import { NextSeo } from 'next-seo'
import { FC, useRef } from 'react'

import { CompanyCards } from '../components/company/CompanyCards'
import { ClipboardCopy } from '../components/utilities/ClipboardCopy'
import { DEFAULT_PAGE_TITLE } from '../lib/constants'

const Home: FC = () => {
  const containerRef = useRef()
  const control = useAnimation()
  const isInView = useInView(containerRef, { amount: 0.5 })

  const title = DEFAULT_PAGE_TITLE
  const description = 'Home page'

  return (
    <AnimatePresence>
      <div
        className={`bg-gradient relative h-screen w-screen items-center justify-center bg-black text-white`}
        ref={containerRef}
      >
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        {/* <div className="bg-gradient-mask-top fixed inset-x-0 top-0 z-10" />
        <div className="bg-gradient-mask-bottom fixed inset-x-0 top-[100vh] z-10 translate-y-[-100%]" /> */}
        <section className="flex max-h-screen flex-col">
          <CompanyCards {...{ pageControl: control, isPageInView: isInView }} />
        </section>
        <div className="absolute left-0 bottom-0 m-24 text-14 tablet:m-48">
          <ClipboardCopy {...{ label: 'Frontend Engineer' }}>andrewngorain@gmail.com</ClipboardCopy>
        </div>
      </div>
    </AnimatePresence>
  )
}

export default Home
