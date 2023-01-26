import { useRouter } from 'next/router'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'

import useColorFromPath from '../../hooks/useColorFromPath'
import { NoScrollLink } from './NoScrollLink'

const NAV_MAP = [
  { label: 'Portfolio', path: '/' },
  { label: 'About', path: '/about' },
]

export const SiteHeader: FC = () => {
  const router = useRouter()
  const { textColor } = useColorFromPath()

  const getClasses = (path) => {
    return twMerge(
      'mr-24 last:mr-0 opacity-50 hover:opacity-100 transition-opacity duration-200 focus:opacity-100',
      path === router.asPath && 'opacity-100'
    )
  }

  return (
    <header
      className={`${textColor} fixed z-50 flex transition-colors duration-1000
    ease-in-out-expo`}
    >
      <div className="fixed top-24 left-24 text-14 tablet:top-48 tablet:left-48">
        <NoScrollLink href="/">Andrew Ngo</NoScrollLink>
      </div>
      <div className="fixed top-24 right-24 text-14 tablet:top-48 tablet:right-48">
        <nav>
          <ul className="flex">
            {NAV_MAP.map((navItem) => {
              return (
                <li key={navItem.path} className={getClasses(navItem.path)}>
                  <NoScrollLink href={navItem.path}>{navItem.label}</NoScrollLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
