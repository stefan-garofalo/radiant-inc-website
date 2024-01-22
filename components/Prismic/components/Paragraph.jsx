import { PrismicRichText } from '@prismicio/react'

export default function Paragraph({ value }) {
  return (
    <section className="body-lg container w-2/3">
      <PrismicRichText field={value.primary.content}></PrismicRichText>
    </section>
  )
}
