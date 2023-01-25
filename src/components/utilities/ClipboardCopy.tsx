import React, { FC, PropsWithChildren, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

interface Props {
  label: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ClipboardCopy: FC<PropsWithChildren<Props>> = ({ label, children }) => {
  const [, copy] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)

  if (typeof children !== 'string') {
    throw new Error('ClipboardCopy only accepts a string as child.')
  }

  const handleCopy = () => {
    copy(children)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }

  return (
    <button type="button" className="flex flex-col" onClick={handleCopy}>
      <span className="opacity-50">{isCopied ? 'Copied' : 'Copy to clipboard'}</span>
      <span>{children}</span>
    </button>
  )
}
