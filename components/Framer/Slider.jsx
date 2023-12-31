'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Slider({ title, items, className, ...props }) {
  const sliderRef = useRef(null)
  const slidesRef = useRef(null)

  const [sliderWidth, setSliderWidths] = useState(0)
  const [slidesWidth, setSlidesWidths] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const slideMarginRight = 15
  const totalSlidesMarginRight = slideMarginRight * items.length

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
    <div ref={sliderRef} className={`${className} overflow-hidden`} {...props}>
      <motion.ul
        ref={slidesRef}
        className="flex items-center gap-4"
        drag="x"
        dragConstraints={{
          left: -(slidesWidth - sliderWidth + totalSlidesMarginRight),
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
            className="shrink-0 size-48 bg-dark-200 relative"
            onClick={(e) => isDragging && e.preventDefault()}
            onPointerDownCapture={(e) => e.preventDefault()}
          >
            <a href="/404" className="absolute inset-0">
              AAAA
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
