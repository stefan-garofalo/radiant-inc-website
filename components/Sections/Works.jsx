import ArrowTitle from '../ArrowTitle'
import FilteredList from '@/components/Tag/FilteredList'

export default function SectionWorks({ content }) {
  return (
    <section id="works" className="py-16 flex flex-col gap-8 overflow-hidden">
      <ArrowTitle className="pl-container">Work</ArrowTitle>
      <FilteredList items={content}/>
    </section>
  )
}
