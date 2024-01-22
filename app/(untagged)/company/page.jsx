import prismic from '@/lib/prismic'
import Picture from '@/components/UI/Picture'
import { PrismicRichText } from '@prismicio/react'

export default async function CompanyPage() {
  const page = await prismic.getSingleton('company')
  console.log(page)
  return (
    <main className="container">
      <section className="py-16 grid grid-cols-2">
        <h1 className="title-sm">Company</h1>
        <div className="flex flex-col gap-y-6">
          <h2 className="title-md">{page.data.title}</h2>
          <Picture className="aspect-cover rounded-3xl" image={page.data.cover}></Picture>
          <PrismicRichText field={page.data.paragraph}></PrismicRichText>
        </div>
      </section>
    </main>
  )
}
