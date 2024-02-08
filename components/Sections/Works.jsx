import ArrowTitle from '../ArrowTitle'
import FilteredList from '@/components/Tag/FilteredList'

export default function SectionWorks({ content, className = '' }) {
  return (
    <section id="works" className={`py-10 lg:py-16 overflow-hidden ${className}`}>
      <ArrowTitle className="pl-container lg:pl-container-lg py-8">Work</ArrowTitle>
      <FilteredList items={content} />
    </section>
  )
}
