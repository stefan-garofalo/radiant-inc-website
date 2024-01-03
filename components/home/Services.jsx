import { PrismicRichText } from '@prismicio/react'
import Button from '@/components/UI/Button'
import Tag from '@/components/UI/Tag'

const backgroundList = [
  'bg-gradient-to-208 dark:bg-gradient-to-r from-[#23222E] to-[#D3E0E4] dark:from-[#68F7EF] dark:to-[#F8FED1]',
  'bg-gradient-to-132 dark:bg-gradient-to-r from-[#3B3D35] to-[#DDD9D7] dark:from-[#E2FFE0] dark:to-[#FEFDB8]',
]

export default function HomeServices({ content }) {
  console.log(content)
  return (
    <section className="container py-5 text-light-400 dark:text-dark-400">
      <ul className="flex flex-col gap-y-5">
        {content.map((item, i) => (
          <li
            key={`service-${i}`}
            className={`container py-8 rounded-3xl flex flex-col gap-y-[4.625rem] ${backgroundList[i]}`}
          >
            <span className="title-lg">{item.data.title}</span>
            <div className="grid grid-cols-2 gap-10">
              <Button
                tag="Link"
                href={`/services#${item.uid}`}
                className="h-fit"
              >
                Service
              </Button>
              <div className="flex flex-col gap-y-4">
                <ul className="w-11/12 flex flex-wrap gap-y-4 gap-x-3.5">
                  {item.tags.map((tag, j) => (
                    <li key={`service-${i}-tag-${j}`}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
                <div className="line-clamp-4 text-xl">
                  <PrismicRichText field={item.data.description} />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
