import ArrowTitle from '../ArrowTitle'
import Slider from '../Framer/Slider'

export default function HomeWorks({ content }) {
  return (
    <section className="py-16 flex flex-col gap-8 overflow-hidden">
      <ArrowTitle className="pl-container">Work</ArrowTitle>
      <Slider items={content} />
    </section>
  )
}
