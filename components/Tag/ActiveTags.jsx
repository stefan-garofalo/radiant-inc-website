'use client'

import { useAtom } from 'jotai'
import { tagAtom } from '@/store/atoms'
import { motion, AnimatePresence } from 'framer-motion'

import Toast from '@/components/UI/Toast'

export default function ActiveTags() {
  const [tags, setTags] = useAtom(tagAtom)

  return (
    <AnimatePresence>
      {tags.length > 0 && (
        <Toast persistent>
          <div className="flex items-start justify-between gap-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`list-${tags.length}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-wrap gap-1"
              >
                <span>Active tags: </span>

                {tags.map((tag, i) => (
                  <span
                    key={`active-${i}`}
                    className="font-bold after:content-[','] last:after:content-none"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() => setTags([])}
              className="border rounded-3xl py-1.5 px-4 hover:bg-light-100 hover:border-light-100 hover:text-dark-100 transition-colors duration-300"
            >
              Reset
            </button>
          </div>
        </Toast>
      )}
    </AnimatePresence>
  )
}
