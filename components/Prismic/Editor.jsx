import Title from '@/components/Prismic/components/Title'
import Paragraph from '@/components/Prismic/components/Paragraph'
import Slider from '@/components/Prismic/components/Slider'
import List from '@/components/Prismic/components/List'

export default function PrismicEditor({ slices }) {
  const components = {
    title: Title,
    slider: Slider,
    paragraph: Paragraph,
    list: List,
  }
  return slices.map((slice, index) => {
    const Component = components[slice.slice_type]
    return <Component value={slice} key={`editor-${index}`} index={index} />
  })
}
