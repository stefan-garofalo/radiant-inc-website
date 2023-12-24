import IconArrowRight from '../icons/ArrowRight'

export default function Button({ children, ...props }) {
  return (
    <button
      className="inline-flex items-center gap-2 p-4 rounded-[4px] border border-dark-400 dark:border-dark-100 text-dark-400 dark:text-dark-100 title-xs hover:bg-dark-400 dark:hover:bg-dark-100 hover:text-dark-100 dark:hover:text-dark-400 transition-colors duration-300"
      {...props}
    >
      {children}
      <IconArrowRight className="size-8" />
    </button>
  )
}
