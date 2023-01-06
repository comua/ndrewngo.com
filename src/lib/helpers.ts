import { Company, COMPANY_MAP } from './constants'

const getMatchingCompany = (path: string) => {
  return Object.values(Company).find((project) => path === `/company/${project}`)
}

export const getTextColorFromPath = (path: string) => {
  if (path === '/about') {
    return 'text-black'
  }

  const matchingCompany = getMatchingCompany(path)
  if (matchingCompany) {
    return COMPANY_MAP[matchingCompany].colorClass
  }

  return 'text-white'
}

export const getBackgroundColorFromPath = (path: string) => {
  if (path === '/about') {
    return 'bg-white'
  }

  const matchingCompany = getMatchingCompany(path)
  if (matchingCompany) {
    return COMPANY_MAP[matchingCompany].backgroundClass
  }

  return 'bg-black'
}
