import Title from '@/components/Prismic/Editor/components/Title'
import Paragraph from '@/components/Prismic/Editor/components/Paragraph'
import Slider from '@/components/Prismic/Editor/components/Slider'
import List from '@/components/Prismic/Editor/components/List'
import Image from '@/components/Prismic/Editor/components/Image'

export default function PrismicEditor({ slices }) {
  const components = {
    title: Title,
    slider: Slider,
    paragraph: Paragraph,
    list: List,
    image: Image,
  }
  return slices.map((slice, index) => {
    const Component = components[slice.slice_type]
    return <Component value={slice} key={`editor-${index}`} index={index} />
  })
}
