import prismic from '@/lib/prismic'

import Link from 'next/link'
import IconArrowRight from '@/components/icons/ArrowRight'
import IconFacebook from '@/components/icons/Facebook'
import IconTwitter from '@/components/icons/Twitter'
import IconInstagram from '@/components/icons/Instagram'

export default async function LayoutFooter() {
  const footer = await prismic.getSingleton('footer')
  return (
    <footer className="container py-container flex flex-col gap-y-6 border-t border-light-300 dark:border-dark-300">
      <nav className="grid grid-cols-4">
        <div>
          <span className="body-lg flex gap-x-2">
            <span>Company</span>
            <IconArrowRight className="size-6 -rotate-45" />
          </span>
          <ul className="pt-3 flex flex-col gap-y-3 body-sm">
            {footer.data.philosophy_nav.map((item, i) => (
              <li key={`link-philosophy-${i}`}>
                <Link
                  className="hover:opacity-50 transition-opacity duration-300 capitalize"
                  href={
                    item.link.link_type === 'Web'
                      ? item.link.url
                      : `/${item.link.type}`
                  }
                >
                  {item.label || item.link.type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span className="body-lg flex gap-x-2">
            <span>Job</span>
            <IconArrowRight className="size-6 -rotate-45" />
          </span>
          <ul className="pt-3 flex flex-col gap-y-3 body-sm">
            {footer.data.company_nav.map((item, i) => (
              <li key={`link-company-${i}`}>
                <Link
                  className="hover:opacity-50 transition-opacity duration-300 capitalize"
                  href={
                    item.link.link_type === 'Web'
                      ? item.link.url
                      : `/${item.link.type}`
                  }
                >
                  {item.label || item.link.type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="w-1/12 pt-8 flex flex-col body-sm">
        <span>Radiant Inc.</span>
        <span className="break-words text-light-200 dark:text-dark-200">
          {footer.data.address}
        </span>
      </div>
      <span className="title-sm">Radiant Inc.</span>
      <div className="pt-6 grid grid-cols-3 body-xs text-light-200 dark:text-dark-200 border-t border-current">
        <span>© 2023 Radiant Inc. All Rights Reserved.</span>
        <ul className="flex items-center justify-center gap-3">
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <IconFacebook className="size-4 fill-current text-current" />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <IconInstagram className="size-4 fill-current text-current" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <IconTwitter className="size-4 fill-current text-current" />
            </a>
          </li>
        </ul>
        <a
          href="https://google.com"
          className="ml-auto hover:opacity-50 transition-opacity duration-300"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
