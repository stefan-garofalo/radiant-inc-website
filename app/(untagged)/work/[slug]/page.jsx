import prismic from '@/lib/prismic'
import Picture from '@/components/UI/Picture'
import { PrismicRichText } from '@prismicio/react'
import SectionContact from '@/components/Sections/Contact'

export async function generateStaticParams() {
  const works = await prismic.getCollection({ type: 'work' })
  return works.results.map((work) => ({ slug: work.uid }))
  
}

export default async function WorkPage({ params }) {
  const page = await prismic.getItem({ type: 'work', uid: params.slug })
  const header = [
    {
      label: 'Project type',
      content: page.data.service_type.uid.split('-').join(' '),
    },
    {
      label: 'Timeline',
      content: `${new Date(page.data.timeframe[0].start).toLocaleString(
        'en-GB',
        {
          month: 'long',
          year: 'numeric',
        }
      )} - ${new Date(page.data.timeframe[0].end).toLocaleString('en-GB', { month: 'long', year: 'numeric' })}`,
    },
    { label: 'Client', content: page.data.client },
  ]
  const content = ['about', 'solution']

  return (
    <main className="container">
      <h1 className="title-lg py-16">{page.data.title}</h1>
      <div className="grid grid-cols-3 gap-10 pb-10">
        {header.map((item, i) => (
          <div key={`head-${i}`} className="flex flex-col">
            <span className="text-light-200 dark:text-dark-200 uppercase body-lg">
              {item.label}
            </span>
            <span className="body-xl capitalize">{item.content}</span>
          </div>
        ))}
      </div>
      {content.map((key) => (
        <section
          className="grid grid-cols-3 gap-10 py-10 border-t border-light-200 dark:border-dark-200"
          key={`section-${key}`}
        >
          <h2 className="capitalize title-sm">{key}</h2>
          <div className="col-span-2 flex flex-col gap-y-6 text-xl">
            <PrismicRichText field={page.data[key]} />
            {page.data[`${key}_gallery`].map((item, i) => (
              <Picture
                key={`gallery-${key}-${i}`}
                image={item.image}
                className="rounded-3xl aspect-blog w-full object-cover"
              />
            ))}
          </div>
        </section>
      ))}
      <SectionContact />
    </main>
  )
}
