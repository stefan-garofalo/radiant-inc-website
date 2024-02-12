import prismic from '@/lib/prismic'
import metadata from '@/lib/metadata'

import PrismicEditor from '@/components/Prismic'

export function generateStaticParams() {
  return [{ slug: 'team' }, { slug: 'jobs' }]
}

export async function generateMetadata({ params }) {
  const page = await prismic.getSingleton(params.slug)

  return metadata.generate({
    title: page.data.meta_title,
    excerpt: page.data.meta_description,
    image: page.data.meta_image,
    canonical: `/${params.slug}`,
  })
}

export default async function SlugPage({ params }) {
  const page = await prismic.getSingleton(params.slug)
  return (
    <main className="py-16 flex flex-col gap-y-12">
      <PrismicEditor slices={page.data.slices} />
    </main>
  )
}
