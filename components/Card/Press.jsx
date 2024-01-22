import Button from '../UI/Button'
import DateDisplay from '../UI/DateDisplay'

export default function CardPress({ item }) {
  return (
    <div className="py-6 flex items-start justify-start gap-6 border-b border-light-200 dark:border-dark-200">
      <DateDisplay value={item.date} className="min-w-20" />
      <div className="flex flex-col gap-y-6">
        <span className="body-xl">{item.title}</span>
        <Button tag="a" href={item?.url?.url} target={item?.url?.target} mode="light">
          Press release
        </Button>
      </div>
    </div>
  )
}
