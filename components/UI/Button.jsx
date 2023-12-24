import IconArrowRight from '../icons/ArrowRight'

export default function Button({ children, ...props }) {
  return (
    <button
      className="inline-flex gap-8 p-4 rounded-[4px] border border-dark-400 dark:border-dark-100 text-dark-400 dark:text-dark-100 title-xs"
      {...props}
    >
      {children}
      <IconArrowRight className="size-8" />
    </button>
  )
}
