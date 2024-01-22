import prismic from '@/lib/prismic'
import Picture from '@/components/UI/Picture'
import { PrismicRichText } from '@prismicio/react'
import SectionContact from '@/components/Sections/Contact'

export default async function CompanyPage() {
  const page = await prismic.getSingleton('company')
  console.log(page.data.milestones)
  return (
    <main className="container">
      <section className="py-16 grid grid-cols-2">
        <h1 className="title-sm">Company</h1>
        <div className="flex flex-col gap-y-6 body-xl">
          <h2 className="title-md">{page.data.title}</h2>
          <Picture className="aspect-cover rounded-3xl" image={page.data.cover}></Picture>
          <PrismicRichText field={page.data.paragraph}></PrismicRichText>
        </div>
      </section>
      <section className="py-18 grid grid-cols-2 body-xl">
        <h2 className="title-sm">History</h2>
        <div className="flex flex-col gap-y-6">
          <PrismicRichText field={page.data.milestones_paragraph}></PrismicRichText>
          <ol className="flex flex-col">
            {page.data.milestones.map((milestone, index) => (
              <li key={`milestone-${index}`} className="py-8 border-b flex items-center gap-10 body-md">
                <span>{new Date(milestone.date).getFullYear()}</span>
                <span>
                  {new Date(milestone.date).toLocaleString('en-US', {
                    month: 'short',
                  })}
                </span>
                <span>{milestone.title}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <SectionContact/>
    </main>
  )
}
