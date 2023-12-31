import prismic from '@/lib/prismic'

import HomeHero from '@/components/home/Hero'
import HomeGrid from '@/components/home/Grid'
import HomeWorks from '@/components/home/Works'

export default async function Home() {
  const [page, works] = await Promise.all([
    prismic.getSingleton('homepage'),
    prismic.getCollection({ type: 'work' }),
  ])
  return (
    <>
      <HomeHero content={page.data.title} />
      <HomeGrid content={page.data.grid[0]} />
      <HomeWorks content={works} />
    </>
  )
}
