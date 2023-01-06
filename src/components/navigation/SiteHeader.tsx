import { FC } from 'react'

import useColorFromPath from '../../hooks/useColorFromPath'
import { NoScrollLink } from './NoScrollLink'

const NAV_MAP = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
]

export const SiteHeader: FC = () => {
  const { textColor } = useColorFromPath()

  return (
    <header
      className={`${textColor} fixed z-50 flex w-screen transition-colors duration-1000
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
                <li key={navItem.path} className="mr-24 last:mr-0">
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
