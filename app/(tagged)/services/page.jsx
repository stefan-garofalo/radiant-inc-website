import prismic from '@/lib/prismic'
import Tag from '@/components/UI/Tag'
import SectionWorks from '@/components/Sections/Works'
import { PrismicRichText } from '@prismicio/react'
import SectionContact from '@/components/Sections/Contact'

export default async function ServicesPage() {
  const [services, works] = await Promise.all([
    prismic.getCollection({ type: 'service' }),
    prismic.getCollection({ type: 'work' }),
  ])

  return (
    <main className="">
      <h1 className="container py-16 title-lg">Services</h1>
      {services.map((service, i) => (
        <section key={`service-${i}`} className="grid grid-cols-2 py-8">
          <h2 id={service.uid} className="pl-container title-sm scroll-mt-16">
            {service.data.title}
          </h2>
          <div className="flex flex-col gap-y-4 pr-container">
            <ul className="flex gap-x-2 gap-y-3 flex-wrap">
              {service.tags.map((tag, j) => (
                <li key={`service-${i}-tag-${j}`}>
                  <Tag mode="light">{tag}</Tag>
                </li>
              ))}
            </ul>
            <PrismicRichText field={service.data.description} />
          </div>
          <SectionWorks
            className="col-span-2"
            content={works.filter(
              (work) => work.data.service_type.uid === service.uid
            )}
          ></SectionWorks>
        </section>
      ))}
      <SectionContact />
    </main>
  )
}
