'use client'

import Link from 'next/link'
import Picture from '../UI/Picture'
import DateDisplay from '../UI/DateDisplay'

export default function CardBlog({ item, isDragging }) {
  return (
    <figure className="relative hover:opacity-40 transition-opacity duration-300">
      <div className="aspect-blog h-66.5 rounded-2xl overflow-hidden">
        <Picture
          className="w-full h-full object-cover"
          image={item.data.cover}
        />
      </div>
      <figcaption className="pt-2">
        <DateDisplay value={item.last_publication_date} />
        <Link
          onClick={(e) => isDragging && e.preventDefault()}
          onPointerDownCapture={(e) => e.preventDefault()}
          className="body-lg line-clamp-1 capitalize after:absolute after:inset-0"
          href={`/blog/${item.uid}`}
        >
          {item.uid.split('-').join(' ')}
        </Link>
      </figcaption>
    </figure>
  )
}
