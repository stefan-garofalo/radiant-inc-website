import ArrowTitle from '../ArrowTitle'
import Button from '../UI/Button'

const gradientList = [
  'bg-gradient-to-124 dark:bg-gradient-to-r from-[#DCEFF0_-16.8%] dark:from-[#C8F2FD] to-[#524F4D_76.6%] dark:to-[#DBFEE3]',
  'bg-gradient-to-132 dark:bg-gradient-to-r from-[#3B3D35_-2.99%] dark:from-[#CDFDF5] to-[#DDD9D7_107.43%] dark:to-[#56E1F9]',
  'bg-gradient-to-r from-[#999] dark:from-[#E0FEFE] to-[#000] dark:to-[#E0FCCE]',
]

export default function SectionCompany({ content }) {
  return (
    <section className="container py-8 flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <ArrowTitle>Company</ArrowTitle>
        <div className="flex items-center gap-3.5">
          <Button
            tag="a"
            href="https://dictionary.cambridge.org/dictionary/english/partner"
            target="_blank"
            mode="light"
            arrow={false}
          >
            Partners
          </Button>
          <Button
            tag="a"
            href="https://dictionary.cambridge.org/dictionary/english/environment"
            target="_blank"
            mode="light"
            arrow={false}
          >
            Environmental organizations
          </Button>
        </div>
      </div>
      <ul className="grid grid-cols-3 gap-5">
        {content.map((item, i) => (
          <li
            className={`aspect-company w-full rounded-3xl p-10 flex flex-col justify-between ${gradientList[i]}`}
            key={`company-${i}`}
          >
            <span className="title-sm text-light-400 dark:text-dark-400">
              {item.description}
            </span>
            <Button tag="a" href={`/${item.link.type}`} className="capitalize">
              {item.link.type}
            </Button>
          </li>
        ))}
      </ul>
    </section>
  )
}
