import prismic from '@/lib/prismic'

import SectionHero from '@/components/Sections/Hero'
import SectionGrid from '@/components/Sections/Grid'
import SectionWorks from '@/components/Sections/Works'
import SectionServices from '@/components/Sections/Services'

export default async function Section() {
  const [page, works, services, tags] = await Promise.all([
    prismic.getSingleton('homepage'),
    prismic.getCollection({ type: 'work' }),
    prismic.getCollection({ type: 'service' }),
    prismic.getAllTags(),
  ])

  return (
    <>
      <SectionHero content={page.data.title} />
      <SectionGrid content={page.data.grid[0]} tags={tags} />
      <SectionWorks content={works} />
      <SectionServices content={services} />
    </>
  )
}
