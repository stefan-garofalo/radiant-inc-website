import Picture from '@/components/UI/Picture'

export default function Image({ value }) {
  return (
    <section className="ml-auto container lg:w-3/5">
      <Picture className="rounded-2xl" image={value.primary.picture} />
    </section>
  )
}
