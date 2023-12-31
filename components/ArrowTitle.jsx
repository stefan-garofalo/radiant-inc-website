import IconArrowRight from './icons/ArrowRight'

export default function ArrowTitle({ children }) {
  return (
    <h2 className="title-sm text-light-100 dark:text-dark-100 flex items-center gap-1">
      <span>{children}</span>
      <IconArrowRight className="size-8" />
    </h2>
  )
}
