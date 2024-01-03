import prismic from '@/lib/prismic'

import HomeHero from '@/components/home/Hero'
import HomeGrid from '@/components/home/Grid'
import HomeWorks from '@/components/home/Works'
import HomeServices from '@/components/home/Services'

export default async function Home() {
  const [page, works, services] = await Promise.all([
    prismic.getSingleton('homepage'),
    prismic.getCollection({ type: 'work' }),
    prismic.getCollection({ type: 'service' }),
  ])

  return (
    <>
      <HomeHero content={page.data.title} />
      <HomeGrid content={page.data.grid[0]} />
      <HomeWorks content={works} />
      <HomeServices content={services} />
    </>
  )
}
