import prismic from '@/lib/prismic'

export default async function WorkPage({ params }) {
  const page = await prismic.getItem({ type: 'work', uid: params.slug })
  const header = [
    { label: 'Project type', content: page.data.service_type.uid.split('-').join(' ') },
    {
      label: 'Timeline',
      content: `${new Date(page.data.timeframe[0].start).toLocaleString('en-GB', {
        month: 'long',
        year: 'numeric',
      })} - ${new Date(page.data.timeframe[0].end).toLocaleString('en-GB', { month: 'long', year: 'numeric' })}`,
    },
    { label: 'Client', content: page.data.client },
  ]
  return (
    <main className="container">
      <h1 className="title-lg py-16">{page.data.title}</h1>
      <div className="grid grid-cols-3 gap-10 pb-10">
        {header.map((item, i) => (
          <div key={`head-${i}`} className="flex flex-col">
            <span className="text-light-200 dark:text-dark-200 uppercase body-lg">{item.label}</span>
            <span className="body-xl capitalize">{item.content}</span>
          </div>
        ))}
      </div>
    </main>
  )
}
