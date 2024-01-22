import ArrowTitle from '../ArrowTitle'
import CardPress from '../Card/Press'

export default function SectionPress({ content }) {
  const items = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur.',
      date: '2024-01-20T14:38:33+0000',
      url: 'https://www.google.com',
    },
  ]
  return (
    <section className="py-16 container grid grid-cols-2">
      <ArrowTitle className="py-8 h-fit">Information</ArrowTitle>
      <ul className="flex flex-col">
        {[...items, ...items, ...items].map((item, index) => (
          <li key={`press-${index}`}>
            <CardPress item={item} />
          </li>
        ))}
      </ul>
    </section>
  )
}
