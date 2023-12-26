import IconArrowRight from '../icons/ArrowRight'

const colorMap = {
  white:
    'border-dark-400 dark:border-dark-100 text-dark-400 dark:text-dark-100 title-xs hover:bg-dark-400 dark:hover:bg-dark-100 hover:text-dark-100 dark:hover:text-dark-400',
  dark: 'dark:border-dark-400 border-dark-100 dark:text-dark-400 text-dark-100 title-xs hover:dark:bg-dark-400 hover:bg-dark-100 hover:dark:text-dark-100 hover:text-dark-400',
}

export default function Button({
  tag = 'button',
  mode = 'dark',
  children,
  ...props
}) {
  const Component = tag
  return (
    <Component
      className={`
        ${colorMap[mode]} 
        inline-flex w-fit items-center gap-2 p-4 rounded-[4px] border transition-colors duration-300
      `}
      {...props}
    >
      {children}
      <IconArrowRight className="size-8" />
    </Component>
  )
}
