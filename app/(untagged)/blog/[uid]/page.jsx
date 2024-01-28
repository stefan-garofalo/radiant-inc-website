import prismic from '@/lib/prismic'
import Image from 'next/image'
import Avatar from '@/public/images/portrait.webp'
import Picture from '@/components/UI/Picture'
import { PrismicRichText } from '@prismicio/react'
import Button from '@/components/UI/Button'

const gradientList = [
  'bg-gradient-to-132 dark:bg-gradient-to-r from-[#3B3D35_-2.99%] dark:from-[#CDFDF5] to-[#DDD9D7_107.43%] dark:to-[#56E1F9]',
  'bg-gradient-to-132 dark:bg-gradient-to-r from-[#3B3D35_-2.99%] dark:from-[#CDFDF5] to-[#DDD9D7_107.43%] dark:to-[#56E1F9]',
]

export default async function BlogPage({ params }) {
  const page = await prismic.getItem({ type: 'post', uid: params.uid })
  return (
    <main className="py-16 mx-auto w-1/2 flex flex-col gap-y-16 body-xl">
      <div>
        <h1 className="title-md first-letter:capitalize">
          {page.uid.split('-').join(' ')}
        </h1>
        <div className="pt-4 flex items-stretch gap-4">
          <Image
            src={Avatar}
            className="rounded-full aspect-square w-14 object-cover"
          />
          <span className="h-full flex flex-col">
            <span className="text-lg">John Doe</span>
            <span className="text-md text-light-200 dark:text-dark-200">
              {new Date(page.last_publication_date).toLocaleString('en-GB', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </span>
          </span>
        </div>
        <Picture
          image={page.data.cover}
          className="mt-6 aspect-cover rounded-3xl"
        />
      </div>
      <PrismicRichText field={page.data.content} />
      <ol className="flex items-stretch gap-5">
        {[1, 2].map((_, i) => (
          <li
            className={`h-full w-full p-10 flex flex-col justify-between aspect-nav rounded-3xl ${gradientList[i]}`}
          >
            <span className="text-light-400 dark:text-dark-400">Title</span>
            <Button tag="a" href="/blog" className="capitalize">
              Link
            </Button>
          </li>
        ))}
      </ol>
    </main>
  )
}
