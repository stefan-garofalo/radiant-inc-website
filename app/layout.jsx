import './globals.css'
import { Almarai } from 'next/font/google'

import LayoutHeader from '@/components/Layout/header'
import LayoutFooter from '@/components/Layout/footer'

const almarai = Almarai({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata = {
  robots: {
    index: false,
    follow: false,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${almarai.className} bg-light-400 text-light-100 dark:text-dark-100 dark:bg-dark-400`}
      >
        <LayoutHeader/>
        {children}
        <LayoutFooter/>
      </body>
    </html>
  )
}
