import prismic from '@/lib/prismic'

import PrismicEditor from '@/components/Prismic'

export function generateStaticParams() {
  return [{ slug: 'team' }]
}

export default async function TeamPage({ params }) {
  const page = await prismic.getSingleton(params.slug)
  return (
    <main className="py-16 flex flex-col gap-y-12">
      <PrismicEditor slices={page.data.slices} />
    </main>
  )
}
