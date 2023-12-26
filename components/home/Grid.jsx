import { PrismicRichText } from '@prismicio/react'
import Button from '../UI/Button'
import Picture from '../UI/Picture'

export default function HomeGrid({ content }) {
  return (
    <section className="container py-8 grid grid-cols-2 gap-5">
      <div className="col-span-full py-8">tags</div>
      <div className="bg-gradient-to-br dark:bg-gradient-to-r from-[#3E3C41] to-[#FEF6D9] dark:from-[#95ECFD] dark:to-[#E5FFFB] rounded-3xl container py-10 flex flex-col justify-between text-light-400 dark:text-dark-400">
        <h2 className="title-sm">{content.title_link}</h2>
        <Button tag="a" href={content.link.url} target={content.link.target}>
          Contact
        </Button>
      </div>
      <Picture image={content.image} className="rounded-3xl aspect-[1.3]" />
      <div className="container py-10 col-span-full grid grid-cols-2 gap-10 rounded-3xl body-xl text-light-100 dark:text-dark-100 bg-light-300 dark:bg-dark-300">
        <h2 className="title-sm">{content.title}</h2>
        <PrismicRichText field={content.text} />
      </div>
    </section>
  )
}
