import ArrowTitle from '../ArrowTitle'
import FilteredList from '@/components/Tag/FilteredList'

export default function SectionWorks({ content }) {
  return (
    <section id="works" className="py-16 overflow-hidden">
      <ArrowTitle className="pl-container py-8">Work</ArrowTitle>
      <FilteredList items={content} />
    </section>
  )
}
