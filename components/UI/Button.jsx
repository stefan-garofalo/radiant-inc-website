import Link from 'next/link'
import IconArrowRight from '../icons/ArrowRight'

const colorMap = {
  white:
    'border-dark-400 dark:border-light-400 text-dark-400 dark:text-light-400 title-xs hover:bg-dark-400 dark:hover:bg-light-400 hover:text-light-400 dark:hover:text-dark-400',
  dark: 'dark:border-dark-400 border-light-400 dark:text-dark-400 text-light-400 title-xs hover:dark:bg-dark-400 hover:bg-light-400 hover:dark:text-light-400 hover:text-dark-400',
}

export default function Button({
  tag = 'button',
  mode = 'dark',
  children,
  className,
  ...props
}) {
  const Component = tag === 'Link' ? Link : tag
  return (
    <Component
      className={`
        ${colorMap[mode]} 
        ${className}
        inline-flex w-fit items-center gap-2 p-4 rounded-[14px] border transition-colors duration-300
      `}
      {...props}
    >
      {children}
      <IconArrowRight className="size-8" />
    </Component>
  )
}
