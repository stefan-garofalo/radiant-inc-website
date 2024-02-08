'use client'

import { tagAtom } from '@/store/atoms'
import { useAtom } from 'jotai'

const colorMap = {
  light:
    'border-dark-400 dark:border-light-400 text-dark-400 dark:text-light-400 body-xl hover:bg-dark-400 dark:hover:bg-light-400 hover:text-light-400 dark:hover:text-dark-400',
  dark: 'dark:border-dark-400 border-light-400 dark:text-dark-400 text-light-400 body-xl dark:hover:bg-dark-400 hover:bg-light-400 dark:hover:text-light-400 hover:text-dark-400',
}

export default function Tag({ children, mode = 'dark', className, ...props }) {
  const [tags, setTags] = useAtom(tagAtom)

  function pushTag() {
    if (tags.includes(children)) {
      setTags(tags.filter((tag) => tag !== children))
    } else {
      setTags([...tags, children])
    }
  }

  return (
    <button
      className={`
        px-3.5 py-1 rounded-[30px] body-lg lg:text-xl whitespace-nowrap border transition-all duration-300 
        ${colorMap[mode]} 
        ${className}
        ${
          tags.length > 0 && !tags.includes(children)
            ? 'opacity-20'
            : 'opacity-100'
        }
      `}
      onClick={pushTag}
      {...props}
    >
      {children}
    </button>
  )
}
