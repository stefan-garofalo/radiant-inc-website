import JotaiProvider from '@/components/Providers/Jotai'
import ActiveTags from '@/components/Tag/ActiveTags'

export default async function TaggedLayout({ children }) {
  return (
    <JotaiProvider>
      <main>{children}</main>
      <ActiveTags/>
    </JotaiProvider>
  )
}
