import { AnimatePresence, motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { FC, useEffect, useRef } from 'react'

import profilePic from '../../public/images/profile.jpg'
import { Title } from '../components/Title'

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
}

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const AboutPage: FC = () => {
  const containerRef = useRef()
  const control = useAnimation()
  const isInView = useInView(containerRef, { amount: 0.5 })

  const title = 'About'
  const description = 'About page'

  useEffect(() => {
    if (isInView) {
      control.start('visible')
    } else {
      control.start('hidden')
    }
  }, [control, isInView])

  return (
    <AnimatePresence mode="wait">
      <div className="bg-gradient-about relative flex h-screen w-screen flex-col text-black ">
        <NextSeo title={title} description={description} openGraph={{ title, description }} />
        <motion.div
          variants={pageVariants}
          initial="hidden"
          animate={control}
          ref={containerRef}
          className="max-h-screen overflow-y-scroll px-24 tablet:px-48"
        >
          <div className="pt-64 tablet:w-1/2 tablet:pt-96">
            <section>
              <Title className="pb-32 mobile:text-96">Engineer</Title>
            </section>
            <motion.section variants={sectionVariants} className="text-16 tablet:text-24">
              <p>Frontend engineer based in New York.</p>
            </motion.section>
          </div>
          <div className="flex flex-1 py-24 tablet:py-48">
            <div className="flex flex-col tablet:grid tablet:grid-cols-2">
              <motion.section
                variants={sectionVariants}
                className="relative h-[38.4rem] w-full mobile:w-1/2 tablet:w-full "
              >
                <Image
                  src={profilePic}
                  alt="Picture of Andrew"
                  fill
                  sizes={`(max-width: 640px) 100vw, 50vw`}
                  style={{
                    objectFit: 'cover',
                  }}
                  priority
                  placeholder="blur"
                />
              </motion.section>
              <motion.section
                variants={sectionVariants}
                className="relative flex flex-1 flex-col py-24 tablet:ml-48 tablet:py-0"
              >
                <div>
                  <h4 className={`mb-16 flex flex-col text-14`}>What I do</h4>
                  <p className="text-16 tablet:text-24">
                    Developing websites and applications with a focus on joyful experiences,
                    impactful features, and pragmatic builds.
                  </p>
                </div>
                <div className="pt-24 tablet:pt-48">
                  <h4 className={`mb-16 flex flex-col text-14`}>Contact</h4>
                  <div className="link-list flex text-16 tablet:text-24">
                    <a href="mailto:andrewngorain@gmail.com?Subject=Hello">Email</a>
                    <a href="https://www.linkedin.com/in/andrewqngo/" className="ml-24">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </motion.section>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

export default AboutPage
