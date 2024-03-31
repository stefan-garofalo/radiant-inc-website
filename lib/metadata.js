const locales = { it: 'it_IT', en: 'en_US' }

const metadata = {
  generate({ title, excerpt, image, canonical, lang = 'en' }) {
    return {
      title: title,
      description: excerpt,
      metadataBase: new URL(
        `${process.env.NEXT_PUBLIC_SITE_URL}${+process.env.IS_I18N ? `/${lang}` : ''}`
      ),
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${canonical}`,
      },
      openGraph: {
        title: title,
        description: excerpt,
        locale: locales[lang],
        type: 'website',
        ...(image && {
          images: [
            {
              url: image?.url,
              width: image?.dimensions?.width,
              height: image?.dimensions?.height,
            },
          ],
        }),
      },
    }
  },
}

export default metadata
