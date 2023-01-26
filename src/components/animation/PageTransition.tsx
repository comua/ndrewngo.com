import gsap from 'gsap'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect, useRef } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'

const EASING = 'power4.inOut'
const DURATION = {
  in: 1,
  out: 1,
  dim: 0.2,
}

enum PathTransition {
  FromIndexToPage = 'FromIndexToPage',
  FromPageToIndex = 'FromPageToIndex',
  FromCompanyToCompany = 'FromCompanyToCompany',
}

const PATH_MAP = {
  [PathTransition.FromIndexToPage]: {
    onEnter: (node) => {
      const enterTimeline = gsap.timeline()
      enterTimeline.set(node, { autoAlpha: 1, zIndex: 1 }).fromTo(
        node,
        { xPercent: 100 },
        {
          xPercent: 0,
          duration: DURATION.in,
          ease: EASING,
        }
      )
    },
    onExit: (node) => {
      const exitTimeline = gsap.timeline()
      exitTimeline
        .set(node, { zIndex: -10 })
        .fromTo(
          node,
          { autoAlpha: 1 },
          { autoAlpha: 0.5, duration: DURATION.dim, ease: 'power1.inOut' }
        )
        .fromTo(
          node,
          { xPercent: 0 },
          {
            xPercent: -25,
            duration: DURATION.out - DURATION.dim,
            ease: EASING,
          }
        )
    },
  },
  [PathTransition.FromPageToIndex]: {
    onEnter: (node) => {
      const enterTimeline = gsap.timeline()
      enterTimeline
        .set(node, { autoAlpha: 0.5, zIndex: -10 })
        .fromTo(
          node,
          { xPercent: -25 },
          {
            xPercent: 0,
            duration: DURATION.out - DURATION.dim,
            ease: EASING,
          }
        )
        .fromTo(
          node,
          { autoAlpha: 0.5 },
          { autoAlpha: 1, duration: DURATION.dim, ease: 'power1.inOut' }
        )
        .set(node, { zIndex: 1 })
    },
    onExit: (node) => {
      const enterTimeline = gsap.timeline()
      enterTimeline
        .set(node, { autoAlpha: 1, zIndex: 1 })
        .fromTo(
          node,
          { xPercent: 0 },
          {
            xPercent: 100,
            duration: DURATION.in,
            ease: EASING,
          }
        )
        .set(node, { zIndex: -10 })
    },
  },
  [PathTransition.FromCompanyToCompany]: {
    onEnter: (node) => {
      const enterTimeline = gsap.timeline()
      enterTimeline.set(node, { autoAlpha: 1 }).fromTo(
        node,
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: DURATION.in,
          ease: EASING,
        }
      )
    },
    onExit: (node) => {
      const exitTimeline = gsap.timeline()
      exitTimeline
        .set(node, { zIndex: -10 })
        .fromTo(
          node,
          { autoAlpha: 1 },
          { autoAlpha: 0.5, duration: DURATION.dim, ease: 'power1.inOut' }
        )
        .fromTo(
          node,
          {},
          {
            yPercent: -25,
            duration: DURATION.out - DURATION.dim,
            ease: EASING,
          }
        )
    },
  },
}

const getPathState = ({ prev, next }) => {
  if (next === '/') {
    return PathTransition.FromPageToIndex
  }
  if (prev.includes('company') && next.includes('company')) {
    return PathTransition.FromCompanyToCompany
  }

  return PathTransition.FromIndexToPage
}

export const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter()
  const prevPathRef = useRef<string>()
  const nextPathRef = useRef<string>()
  const scrollYRef = useRef<number>()

  useEffect(() => {
    const handleRouteChange = (url) => {
      nextPathRef.current = url
      scrollYRef.current = window.scrollY
    }

    router.events.on('routeChangeStart', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    prevPathRef.current = router.asPath
  }, [router.asPath])

  const onPageEnter = (node: gsap.TweenTarget) => {
    const pathState = getPathState({ prev: prevPathRef.current, next: nextPathRef.current })
    PATH_MAP[pathState].onEnter(node)
  }

  const onPageExit = (node: gsap.TweenTarget) => {
    const pathState = getPathState({ prev: prevPathRef.current, next: nextPathRef.current })
    PATH_MAP[pathState].onExit(node)
  }

  return (
    <TransitionGroup className="relative">
      <Transition
        key={router.asPath}
        timeout={DURATION.out * 1000}
        in={true}
        onEnter={onPageEnter}
        onExit={onPageExit}
        // onExited={() => window.scrollTo(0, 0)}
        mountOnEnter={true}
        unmountOnExit={true}
        className="absolute w-[100svw]"
      >
        {children}
      </Transition>
    </TransitionGroup>
  )
}
