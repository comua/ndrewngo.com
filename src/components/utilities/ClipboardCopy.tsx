import React, { FC, PropsWithChildren, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

interface Props {
  label: string
}

export const ClipboardCopy: FC<PropsWithChildren<Props>> = ({ label, children }) => {
  const [, copy] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

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
    <button
      type="button"
      className="flex flex-col pt-4 pr-4"
      onClick={handleCopy}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className={`flex h-[2rem] flex-col items-start overflow-hidden`}>
        <span className={`${isHovered && 'translate-y-[-100%]'} transition-all duration-300`}>
          {label}
        </span>
        <span
          className={`${
            isHovered && 'translate-y-[-100%] delay-200'
          } text-12 opacity-50 transition-all duration-300`}
        >
          {isCopied ? 'Copied' : 'Copy to clipboard'}
        </span>
      </span>
      <span className={`flex h-[2rem] flex-col items-start overflow-hidden`}>
        <span
          className={`${isHovered && 'translate-y-[-100%] delay-100'} transition-all duration-300`}
        >
          Contact ↗
        </span>
        <span
          className={`${isHovered && 'translate-y-[-100%] delay-300'} transition-all duration-300`}
        >
          {children}
        </span>
      </span>
    </button>
  )
}
