'use client'

import { useState } from 'react'
import { tagAtom } from '@/store/atoms'
import { useAtom } from 'jotai'

const colorMap = {
  white:
    'border-dark-400 dark:border-light-400 text-dark-400 dark:text-light-400 body-xl hover:bg-dark-400 dark:hover:bg-light-400 hover:text-light-400 dark:hover:text-dark-400',
  dark: 'dark:border-dark-400 border-light-400 dark:text-dark-400 text-light-400 body-xl dark:hover:bg-dark-400 hover:bg-light-400 dark:hover:text-light-400 hover:text-dark-400',
}

export default function Tag({ children, mode = 'dark', className, ...props }) {
  const [active, setActive] = useState(false)
  const [tags, setTags] = useAtom(tagAtom)

  function pushTag() {
    if (active) {
      setTags(tags.filter((tag) => tag !== children))
      setActive(false)
    } else {
      setTags([...tags, children])
      setActive(true)
    }
  }

  return (
    <button
      className={`
        px-3.5 py-1 rounded-[30px] text-xl whitespace-nowrap border transition-all duration-300 
        ${colorMap[mode]} 
        ${className}
        ${tags.length > 0 && !active && 'opacity-50'}
      `}
      onClick={pushTag}
      {...props}
    >
      {children}
    </button>
  )
}
