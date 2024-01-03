import Link from 'next/link'
import Picture from '../UI/Picture'

export default function CardWork({ item, isDragging }) {
  return (
    <figure className="flex flex-col gap-2 relative hover:opacity-40 transition-opacity duration-300">
      <div className="aspect-work h-80 rounded-2xl overflow-hidden">
        <Picture
          className="w-full h-full object-cover"
          image={item.data.solution_gallery[0].image}
        />
      </div>
      <figcaption className="body-lg text-light-100 dark:text-dark-100 ">
        <Link
          onClick={(e) => isDragging && e.preventDefault()}
          onPointerDownCapture={(e) => e.preventDefault()}
          className="after:absolute after:inset-0"
          href={`/work/${item.uid}`}
        >
          {item.data.title}
        </Link>
      </figcaption>
    </figure>
  )
}
