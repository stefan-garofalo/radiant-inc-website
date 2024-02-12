import './globals.css'
import { Almarai } from 'next/font/google'

import LayoutHeader from '@/components/Layout/header'
import LayoutFooter from '@/components/Layout/footer'

const almarai = Almarai({ subsets: ['arabic'], weight: ['400', '700'] })

export const metadata = {
  title: 'Radiant Inc',
  description: "Experience the forefront of nuclear innovation with Radiant Inc. Learn about our commitment to sustainable energy solutions, from cutting-edge reactor technologies to visionary urban greening initiatives. Explore how we're shaping a brighter, cleaner future today",
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
