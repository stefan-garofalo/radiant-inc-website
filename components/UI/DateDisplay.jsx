export default function DateDisplay({ value, className }) {
  const date = new Date(value)
  return (
    <div className={`${className} flex items-center gap-1`}>
      <span className="flex flex-col body-xs lg:body-sm">
        <span>{date.getFullYear()}</span>
        <span>
          {date.toLocaleString('en-US', {
            month: 'short',
          })}
        </span>
      </span>
      <span className="text-[35px] lg:title-sm">{date.getDate()}</span>
    </div>
  )
}
