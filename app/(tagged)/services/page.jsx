import prismic from '@/lib/prismic'
import metadata from '@/lib/metadata'

import Tag from '@/components/UI/Tag'
import SectionWorks from '@/components/Sections/Works'
import { PrismicRichText } from '@prismicio/react'
import SectionContact from '@/components/Sections/Contact'

export function generateMetadata() {
  return metadata.generate({
    title: 'Services',
    excerpt: `Discover Radiant Inc's services and how we can help you contribute to the radiant future that awaits us.`,
    canonical: '/services',
  })
}

export default async function ServicesPage() {
  const [services, works] = await Promise.all([
    prismic.getCollection({ type: 'service' }),
    prismic.getCollection({ type: 'work' }),
  ])

  return (
    <main className="">
      <h1 className="container py-16 title-md lg:title-lg">Services</h1>
      {services.map((service, i) => (
        <section key={`service-${i}`} className="flex flex-col lg:grid lg:grid-cols-2 py-8 gap-5 lg:gap-0">
          <h2
            id={service.uid}
            className="pl-container lg:pl-container-lg title-sm lg:scroll-mt-16"
          >
            {service.data.title}
          </h2>
          <div className="flex flex-col gap-y-4 pl-container lg:pl-0 lg:pr-container-lg">
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
