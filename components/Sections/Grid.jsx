import { PrismicRichText } from '@prismicio/react'
import Button from '../UI/Button'
import Tag from '../UI/Tag'
import Picture from '../UI/Picture'
import IconArrowRight from '../icons/ArrowRight'

export default function SectionGrid({ content, tags }) {
  return (
    <section className="lg:container w-full py-8 grid lg:grid-cols-2 gap-5">
      <div className="col-span-full w-full flex flex-col-reverse gap-y-3 lg:flex-row lg:items-start lg:justify-between lg:py-8">
        <div className="w-svw lg:w-auto overflow-auto">
          <ul className="flex items-center lg:flex-wrap gap-3 ">
            {tags.map((tag, i) => (
              <li
                key={`tag-${i}`}
                className="first:pl-4 last:pr-4 first:lg:pl-0 last:lg:pr-0"
              >
                <Tag
                  className="shrink-0 lg:shrink hover:bg-light-100 hover:border-light-100 hover:text-dark-100 transition-colors duration-300"
                  mode="light"
                >
                  {tag}
                </Tag>
              </li>
            ))}
          </ul>
        </div>
        <a
          href="#works"
          className="self-end lg:self-start mr-container border rounded-full p-1 border-dark-400 dark:border-light-400 text-dark-400 dark:text-light-400 body-xl hover:bg-dark-400 dark:hover:bg-light-400 hover:text-light-400 dark:hover:text-dark-400 transition-colors duration-300"
        >
          <IconArrowRight className="size-5 rotate-90 " />
        </a>
      </div>
      <div className="mx-container lg:mx-0 bg-gradient-to-br dark:bg-gradient-to-r from-[#3E3C41] to-[#FEF6D9] dark:from-[#95ECFD] dark:to-[#E5FFFB] rounded-3xl container py-10 flex flex-col gap-y-6 lg:gap-y-0 justify-between text-light-400 dark:text-dark-400">
        <h2 className="title-xs lg:title-sm">{content.title_link}</h2>
        <Button tag="a" href={content.link.url} target={content.link.target}>
          Contact
        </Button>
      </div>
      <div className="container lg:px-0">
        <Picture image={content.image} className="rounded-3xl aspect-[1.3]" />
      </div>
      <div className="mx-container container lg:mx-0 py-6 lg:py-10 col-span-full grid lg:grid-cols-2 gap-6 lg:gap-10 rounded-3xl body-lg lg:body-xl  bg-light-300 dark:bg-dark-300">
        <h2 className="title-xs lg:title-sm">{content.title}</h2>
        <PrismicRichText field={content.text} />
      </div>
    </section>
  )
}
