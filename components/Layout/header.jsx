import prismic from '@/lib/prismic'
import Link from 'next/link'

export default async function LayoutHeader() {
  const header = await prismic.getSingleton('header')

  return (
    <header className="container py-6 flex items-center justify-between body-xl hover:opacity-50 transition-opacity duration-300">
      <Link href="/">Radiant Inc.</Link>
      <nav>
        <ol className="flex items-center gap-5">
          {header.data.links.map((item) => (
            <li
              key={item.id}
              className="hover:opacity-50 transition-opacity duration-300 capitalize"
            >
              {item.link.link_type === 'Web' ? (
                <Link href={item.link.url}>
                  {item.link.url.replace('/', '')}
                </Link>
              ) : (
                <Link href={item.link.type}>{item.link.type}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </header>
  )
}
