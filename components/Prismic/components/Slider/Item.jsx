'use client'

import Picture from '@/components/UI/Picture'

export default function Item({ item, isDragging }) {
  return (
    <figure
      className="flex flex-col gap-2 relative "
      onClick={e => isDragging && e.preventDefault()}
      onPointerDownCapture={e => e.preventDefault()}
    >
      <div className="aspect-company h-80 rounded-2xl overflow-hidden">
        <Picture className="w-full h-full object-cover object-[50%_25%]" image={item.picture} />
      </div>
      <figcaption className="body-lg">{item.caption}</figcaption>
    </figure>
  )
}
