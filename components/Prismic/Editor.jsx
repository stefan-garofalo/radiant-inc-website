import Title from '@/components/Prismic/components/Title'
import Paragraph from '@/components/Prismic/components/Paragraph'
import Slider from '@/components/Prismic/components/Slider'

export default function PrismicEditor({ slices }) {
  const components = {
    title: Title,
    slider: Slider,
    paragraph: Paragraph,
  }
  return slices.map((slice, index) => {
    const Component = components[slice.slice_type]
    return <Component value={slice} key={`editor-${index}`} />
  })
}
