'use client'

import { useAtomValue } from 'jotai'
import { tagAtom } from '@/store/atoms'
import { AnimatePresence } from 'framer-motion'

import Slider from '../Framer/Slider'

export default function FilteredList({ items }) {
  const tags = useAtomValue(tagAtom)
  const filtered = items.filter((item) =>
    tags.every((tag) => item.tags.includes(tag))
  )

  return (
    <AnimatePresence mode="wait">
      {tags.length > 0 ? (
        filtered.length > 0 ? (
          <Slider key={`filtered-${tags.length}`} items={filtered} />
        ) : (
          <div className="container h-[353px] body-xl">
            No works are matching the tags...
          </div>
        )
      ) : (
        <Slider key={`filtered-${tags.length}`} items={items} />
      )}
    </AnimatePresence>
  )
}
