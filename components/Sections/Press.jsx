import ArrowTitle from '../ArrowTitle'
import CardPress from '../Card/Press'

export default function SectionPress({ content }) {
  return (
    <section className="py-10 lg:py-16 container grid lg:grid-cols-2">
      <ArrowTitle className="py-4 lg:py-8 h-fit">Information</ArrowTitle>
      <ul className="flex flex-row gap-8 lg:gap-6 py-4 lg:flex-col lg:h-[85vh] overflow-auto">
        {content.map((item, index) => (
          <li key={`press-${index}`} className="shrink-0 lg:shrink group">
            <CardPress item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
