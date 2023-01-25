import { StaticImageData } from 'next/image'

import collectionBestsellers from '../../public/images/everlane/collection-bestsellers.png'
import collectionProduct from '../../public/images/everlane/collection-product.png'
import homeHero from '../../public/images/everlane/home-hero.png'
import productDenim from '../../public/images/everlane/product-denim.png'
import storeWilliamsburg from '../../public/images/everlane/store-williamsburg.png'
import everlaneHero from '../../public/images/everlane-hero.jpeg'
import compassOnMount from '../../public/images/future/compass-on-mount.gif'
import compassOverview from '../../public/images/future/compass-overview.png'
import productApp from '../../public/images/future/product-app.jpeg'
import sidebarEquipmentEntry from '../../public/images/future/sidebar-equipment-entry.gif'
import sidebarLikes from '../../public/images/future/sidebar-likes.png'
import sidebarSchedule from '../../public/images/future/sidebar-schedule.png'
import siteCoaches from '../../public/images/future/site-coaches.png'
import wocHeartRateZones from '../../public/images/future/woc-heart-rate-zones.png'
import futureHero from '../../public/images/future-hero.jpeg'
import googleHero from '../../public/images/google-hero.jpg'
import merakiHero from '../../public/images/meraki-hero.jpeg'
import xirrusHero from '../../public/images/xirrus-hero.jpeg'

interface ICompanyAttributes {
  employment: { startedAt: string; endedAt: string }
  role: string
  team: string
  url: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface ICompanyProps {
  name: string
  route: Company
  description: string
  attributes: ICompanyAttributes
  colorClass: string
  backgroundClass: string
  heroImage: StaticImageData
  images: []
}

export enum Company {
  Future = 'future',
  Everlane = 'everlane',
  Meraki = 'meraki',
  Google = 'google',
  Xirrus = 'xirrus',
}

export const COMPANY_MAP = {
  [Company.Future]: {
    name: 'Future',
    route: Company.Future,
    description: 'Digital Personal Training',
    attributes: {
      employment: {
        startedAt: 'Mar 2021',
        endedAt: 'Dec 2022',
      },
      role: 'Senior Frontend Engineer',
      team: 'Product',
      url: 'https://www.future.co',
    },
    colorClass: 'text-cyan-700',
    backgroundClass: 'bg-cyan-100',
    heroImage: futureHero,
    projects: [
      { name: 'Website', highlight: { images: [siteCoaches], description: '' } },

      { name: 'Workouts', highlight: { images: [wocHeartRateZones], description: '' } },
      {
        name: 'Compass',
        highlight: { images: [compassOverview, compassOnMount], description: '' },
      },
      {
        name: 'Product',
        highlight: { images: [productApp], description: '' },
      },
      {
        name: 'Sidebar',
        highlight: {
          images: [sidebarSchedule, sidebarLikes, sidebarEquipmentEntry],
          description: '',
        },
      },
    ],
  },
  [Company.Everlane]: {
    name: 'Everlane',
    route: Company.Everlane,
    description: 'Direct-to-Consumer Clothing',
    attributes: {
      employment: {
        startedAt: 'Nov 2018',
        endedAt: 'Sep 2020',
      },
      role: 'Software Engineer',
      team: 'Growth',
      url: 'https://www.everlane.com',
    },
    colorClass: 'text-purple-700',
    backgroundClass: 'bg-purple-100',
    heroImage: everlaneHero,
    projects: [
      { name: 'Homepage', highlight: { images: [homeHero], description: '' } },
      { name: 'Product', highlight: { images: [productDenim], description: '' } },
      {
        name: 'Collection',
        highlight: { images: [collectionBestsellers, collectionProduct], description: '' },
      },
      { name: 'Store', highlight: { images: [storeWilliamsburg] } },
    ],
  },
  [Company.Meraki]: {
    name: 'Meraki',
    route: Company.Meraki,
    description: 'Cloud-Managed Networking',
    attributes: {
      employment: {
        startedAt: 'Oct 2014',
        endedAt: 'Nov 2018',
      },
      role: 'Software Engineer',
      team: 'Business Systems',
      url: 'https://meraki.cisco.com',
    },
    colorClass: 'text-green-700',
    backgroundClass: 'bg-green-100',
    heroImage: merakiHero,
    projects: [
      { name: 'Dashboard', highlight: { images: [], description: '' } },
      { name: 'Business', highlight: { images: [], description: '' } },
    ],
  },
  [Company.Google]: {
    name: 'Google',
    route: Company.Google,
    description: 'Search',
    attributes: {
      employment: {
        startedAt: 'Oct 2012',
        endedAt: 'Aug 2014',
      },
      role: 'Contract Software Engineer',
      team: 'Ads',
      url: 'https://www.google.com',
    },
    colorClass: 'text-red-700',
    backgroundClass: 'bg-red-100',
    heroImage: googleHero,
    projects: [{ name: 'Ads', highlight: { images: [], description: '' } }],
  },
  [Company.Xirrus]: {
    name: 'Xirrus',
    route: Company.Xirrus,
    description: 'Networking',
    attributes: {
      employment: {
        startedAt: 'Jun 2010',
        endedAt: 'Oct 2012',
      },
      role: 'Software Engineer',
      team: 'Ads',
      url: 'https://www.cambiumnetworks.com/xirrus',
    },
    colorClass: 'text-orange-700',
    backgroundClass: 'bg-orange-100',
    heroImage: xirrusHero,
    projects: [
      { name: 'Dashboard', highlight: { images: [], description: '' } },
      { name: 'Reports', highlight: { images: [], description: '' } },
    ],
  },
}

export const EXPO_OUT = [0.19, 1, 0.22, 1]

export const DEFAULT_PAGE_TITLE = 'Andrew Ngo - Frontend Engineer'
