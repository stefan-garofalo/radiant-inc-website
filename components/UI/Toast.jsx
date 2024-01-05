'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Toast({ onClose, persistent, children }) {
  useEffect(() => {
    if (!persistent) {
      setTimeout(() => {
        onClose()
      }, 5000)
    }
  }, [])

  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      className="fixed right-5 bottom-5 w-2/5 rounded-3xl p-8 bg-light-300 dark:bg-dark-300"
    >
      {children}
    </motion.div>
  )
}
