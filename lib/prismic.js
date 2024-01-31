import { createClient } from '@/prismicio'

const prismicio = createClient()

const prismic = {
  async getItem({ type = 'page', uid }) {
    return await prismicio.getByUID(type, uid, { after: uid })
  },
  async getAdjacent({ type = 'post', id }) {
    console.log(id)
    return await Promise.all([
      prismicio.getByType(type, {
        pageSize: 1,
        after: id,
        orderings: {
          field: `my.${type}.first_publication_date`,
          direction: 'asc',
        },
      }),
      prismicio.getByType(type, {
        pageSize: 1,
        after: id,
        orderings: {
          field: `my.${type}.first_publication_date`,
        },
      }),
    ])
  },
  async getCollection({ type = 'article', page = 1, pageSize = 20 }) {
    return await prismicio.getAllByType(type, {
      pageSize,
      page,
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
