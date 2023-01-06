import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getBackgroundColorFromPath, getTextColorFromPath } from '../lib/helpers'

const useColorFromPath = () => {
  const router = useRouter()
  const [backgroundColor, setBackgroundColor] = useState('')
  const [textColor, setTextColor] = useState('')

  useEffect(() => {
    setBackgroundColor(getBackgroundColorFromPath(router.asPath))
    setTextColor(getTextColorFromPath(router.asPath))
  }, [router.asPath])

  return { backgroundColor, textColor }
}

export default useColorFromPath
