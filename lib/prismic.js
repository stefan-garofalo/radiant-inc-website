import { createClient } from '@/prismicio'

const prismicio = createClient()

const prismic = {
  async getItem({ type = 'page', uid }) {
    return await prismicio.getByUID(type, uid )
  },
  async getAdjacent({ type = 'post', id }) {
    return await Promise.all([
      prismicio.getByType(type, {
        pageSize: 1,
        after: id,
        orderings: {
          field: `document.first_publication_date`,
          
        },
      }),
      prismicio.getByType(type, {
        pageSize: 1,
        after: id,
        orderings: {
          field: `document.first_publication_date`,
          direction: 'desc',
        },
      }),
    ])
  },
  async getCollection({ type = 'article', page = 1, pageSize = 20, field = 'document.first_publication_date', direction = 'desc'}) {
    return await prismicio.getAllByType(type, {
      pageSize,
      page,
      orderings: {
        field,
        direction
      },
    })
  },
  async getSingleton(type) {
    return await prismicio.getSingle(type)
  },
  async getAllTags() {
    return await prismicio.getTags()
  },
}

export default prismic
