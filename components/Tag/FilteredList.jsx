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
      <Slider
        key={`filtered-${tags.length}`}
        items={tags.length > 0 ? filtered : items}
      />
    </AnimatePresence>
  )
}
