import prismic from '@/lib/prismic'

import HomeHero from '@/components/home/Hero'
import HomeGrid from '@/components/home/Grid'

export default async function Home() {
  const page = await prismic.getSingleton('homepage')
  return (
    <>
      <HomeHero content={page.data.title} />
      <HomeGrid content={page.data.grid[0]} />
    </>
  )
}
