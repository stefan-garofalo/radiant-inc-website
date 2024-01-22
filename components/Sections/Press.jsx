import ArrowTitle from '../ArrowTitle'
import CardPress from '../Card/Press'

export default function SectionPress({ content }) {
  return (
    <section className="py-16 container grid grid-cols-2">
      <ArrowTitle className="py-8 h-fit">Information</ArrowTitle>
      <ul className="flex flex-col h-[75vh] overflow-auto">
        {content.map((item, index) => (
          <li key={`press-${index}`}>
            <CardPress item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
