import ArrowTitle from '../ArrowTitle'
import Slider from '@/components/Framer/Slider'
import CardBlog from '@/components/Card/Blog'

export default function SectionBlog({ content }) {
  return (
    <section className="py-10 lg:py-16 overflow-hidden">
      <ArrowTitle className="pl-container lg:pl-container-lg py-8">Blog</ArrowTitle>
      <Slider items={content} card={CardBlog} />
    </section>
  )
}
