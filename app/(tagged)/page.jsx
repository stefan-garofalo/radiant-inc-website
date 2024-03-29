import prismic from '@/lib/prismic'
import metadata from '@/lib/metadata'

import SectionHero from '@/components/Sections/Hero'
import SectionGrid from '@/components/Sections/Grid'
import SectionWorks from '@/components/Sections/Works'
import SectionServices from '@/components/Sections/Services'
import SectionBlog from '@/components/Sections/Blog'
import SectionPress from '@/components/Sections/Press'
import SectionContact from '@/components/Sections/Contact'
import SectionCompany from '@/components/Sections/Company'

export async function generateMetadata() {
  const page = await prismic.getSingleton('homepage')

  return metadata.generate({
    title: page.data.meta_title,
    excerpt: page.data.meta_description,
    image: page.data.meta_image,
    canonical: '/',
  })
}

export default async function HomePage() {
  const [page, works, services, posts, tags] = await Promise.all([
    prismic.getSingleton('homepage'),
    prismic.getCollection({ type: 'work' }),
    prismic.getCollection({ type: 'service' }),
    prismic.getCollection({ type: 'post' }),
    prismic.getAllTags(),
  ])

  return (
    <>
      <SectionHero content={page.data.title} />
      <SectionGrid content={page.data.grid[0]} tags={tags} />
      <SectionWorks content={works} />
      <SectionServices content={services} />
      <SectionBlog content={posts} />
      <SectionPress content={page.data.press} />
      <SectionCompany content={page.data.company_links} />
      <SectionContact />
    </>
  )
}
