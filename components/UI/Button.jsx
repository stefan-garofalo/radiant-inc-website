import Link from 'next/link'
import IconArrowRight from '../icons/ArrowRight'

const colorMap = {
  light:
    'border-dark-400 dark:border-light-400 text-dark-400 dark:text-light-400 hover:bg-dark-400 dark:hover:bg-light-400 hover:text-light-400 dark:hover:text-dark-400',
  dark: 'dark:border-dark-400 border-light-400 dark:text-dark-400 text-light-400 hover:dark:bg-dark-400 hover:bg-light-400 hover:dark:text-light-400 hover:text-dark-400',
}

export default function Button({
  tag = 'button',
  mode = 'dark',
  arrow = true,
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
        ${arrow ? 'p-3 lg:p-4 rounded-[14px] body-xl lg:title-xs' : 'py-1 px-3.5 rounded-[30px] body-sm lg:body-xl'}
        inline-flex w-fit items-center gap-2 border transition-colors duration-300
      `}
      {...props}
    >
      {children}
      {arrow && <IconArrowRight className="size-8" />}
    </Component>
  )
}
