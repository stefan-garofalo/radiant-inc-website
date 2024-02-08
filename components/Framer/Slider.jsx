'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Slider({ title, items, card, className, ...props }) {
  const sliderRef = useRef(null)
  const slidesRef = useRef(null)

  const [sliderWidth, setSliderWidths] = useState(0)
  const [slidesWidth, setSlidesWidths] = useState(0)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const [isDragging, setIsDragging] = useState(false)

  const slideMarginRight = 22.5
  const totalSlidesMarginRight = slideMarginRight * items.length
  const CardComponent = card

  useEffect(() => {
    const measureSliderWidth = () => {
      setSliderWidths(sliderRef.current.clientWidth)
    }

    const measureSlidesWidth = () => {
      const slidesNode = slidesRef.current.childNodes
      const slidesArr = Array.from(slidesNode)
      const slidesSumWidth = slidesArr.reduce(
        (acc, node) => acc + node.clientWidth,
        0
      )
      setSlidesWidths(slidesSumWidth)
      setIsOverflowing(slidesSumWidth > sliderWidth)
    }

    measureSliderWidth()
    measureSlidesWidth()

    window.addEventListener('resize', measureSliderWidth)
    window.addEventListener('resize', measureSlidesWidth)

    return () => {
      window.removeEventListener('resize', measureSliderWidth)
      window.removeEventListener('resize', measureSlidesWidth)
    }
  }, [sliderWidth, slidesWidth])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      ref={sliderRef}
      className={`${className} overflow-hidden`}
      {...props}
    >
      <motion.ul
        ref={slidesRef}
        className="flex items-center gap-4"
        drag="x"
        dragConstraints={{
          left: isOverflowing
            ? -(slidesWidth - sliderWidth + totalSlidesMarginRight)
            : 0,
          right: 0,
        }}
        dragElastic={0.15}
        dragTransition={{ bounceDamping: 20 }}
        dragPropagation
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        {items.map((item, index) => (
          <li
            key={`slide-${index}`}
            className="shrink-0 last:mr-container-lg first:ml-container-lg"
          >
            <CardComponent item={item} isDragging={isDragging} />
          </li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
