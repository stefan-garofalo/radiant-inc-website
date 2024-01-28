import Slider from '@/components/Framer/Slider'
import Item from './Item'

export default function EditorSlider({ value }) {
  return (
    <section className="overflow-hidden">
      <Slider items={value.items} card={Item} />
    </section>
  )
}
