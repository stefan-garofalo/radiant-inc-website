import Button from '../UI/Button'
import DateDisplay from '../UI/DateDisplay'

export default function CardPress({ item }) {
  return (
    <div className="w-[80vw] lg:w-auto h-full flex flex-col justify-between lg:flex-row lg:items-start lg:justify-start gap-6 border-r group-last:border-r-0 pr-8 lg:pb-6 lg:border-r-0 lg:pr-0 lg:border-b border-light-200 dark:border-dark-200">
      <span className="lg:hidden body-lg lg:body-xl">{item.title}</span>
      <DateDisplay value={item.date} className="hidden lg:flex lg:min-w-20" />
      <div className="flex flex-col gap-y-2 lg:gap-y-6">
        <DateDisplay value={item.date} className="lg:hidden" />
        <span className="hidden lg:inline body-xl">{item.title}</span>
        <Button
          tag="a"
          href={item?.url?.url}
          target={item?.url?.target}
          mode="light"
        >
          Press release
        </Button>
      </div>
    </div>
  )
}
