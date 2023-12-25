import HomeHero from '@/components/home/Hero'
import prismic from '@/lib/prismic'

export default async function Home() {
  const page = await prismic.getSingleton('homepage')
  return (
    <>
      <HomeHero content={page.data.title} />
    </>
  )
}
