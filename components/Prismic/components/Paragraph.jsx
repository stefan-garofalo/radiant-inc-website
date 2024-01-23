import { PrismicRichText } from '@prismicio/react'

export default function Paragraph({ value }) {
  return (
    <section className="body-lg container ml-auto w-3/5">
      <PrismicRichText field={value.primary.content}></PrismicRichText>
    </section>
  )
}
