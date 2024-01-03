import prismic from '@/lib/prismic'

import SectionHero from '@/components/Sections/Hero'
import SectionGrid from '@/components/Sections/Grid'
import SectionWorks from '@/components/Sections/Works'
import SectionServices from '@/components/Sections/Services'

export default async function Section() {
  const [page, works, services] = await Promise.all([
    prismic.getSingleton('homepage'),
    prismic.getCollection({ type: 'work' }),
    prismic.getCollection({ type: 'service' }),
  ])

  return (
    <>
      <SectionHero content={page.data.title} />
      <SectionGrid content={page.data.grid[0]} />
      <SectionWorks content={works} />
      <SectionServices content={services} />
    </>
  )
}
