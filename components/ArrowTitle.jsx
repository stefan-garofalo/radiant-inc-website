import IconArrowRight from './icons/ArrowRight'

export default function ArrowTitle({ children, className }) {
  return (
    <h2 className={`${className} text-4xl lg:title-sm flex items-center gap-1`}>
      <span>{children}</span>
      <IconArrowRight className="size-8" />
    </h2>
  )
}
