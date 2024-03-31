import prismic from '@/lib/prismic'

import Link from 'next/link'
import IconArrowRight from '@/components/icons/ArrowRight'
import IconTwitter from '@/components/icons/Twitter'
import IconGithub from '@/components/icons/Github'
import IconFigma from '@/components/icons/Figma'

export default async function LayoutFooter() {
  const footer = await prismic.getSingleton('footer')
  return (
    <footer className="container py-container-lg flex flex-col gap-y-6 border-t border-light-300 dark:border-dark-300">
      <nav className="grid grid-cols-2 lg:grid-cols-4">
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
      <div className="w-1/4 lg:w-1/12 pt-8 flex flex-col body-sm">
        <span>Radiant Inc.</span>
        <span className="break-words text-light-200 dark:text-dark-200">
          {footer.data.address}
        </span>
      </div>
      <span className="title-sm">Radiant Inc.</span>
      <div className="pt-6 flex justify-between items-center lg:grid lg:grid-cols-3 body-xs text-light-200 dark:text-dark-200 border-t border-current">
        <span className="w-1/3 lg:w-full">© 2023 Radiant Inc. All Rights Reserved.</span>
        <ul className="w-1/3 lg:w-full flex items-center justify-center gap-3">
          <li>
            <a
              href="https://www.figma.com/file/0ulzWeqbCedfrPvqnL7quD/Agency-Service-Website-(Community)?type=design&node-id=5-2197&mode=design&t=RztPvxyW6JXyRwyk-0"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <IconFigma className="size-4 fill-current text-current" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/stefan-garofalo"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <IconGithub className="size-4 fill-current text-current" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/stefangarofalo"
              target="_blank"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              <IconTwitter className="size-4 fill-current text-current" />
            </a>
          </li>
        </ul>
        <a
          href="https://google.com"
          className="w-1/3 lg:w-full text-end ml-auto hover:opacity-50 transition-opacity duration-300"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  )
}
