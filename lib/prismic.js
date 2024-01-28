import { createClient } from "@/prismicio";

const prismicio = createClient();

const prismic = {
  async getItem({ type = "page", uid }) {
    return await prismicio.getByUID(type, uid);
  },
  async getCollection({ type = "article", page = 1, pageSize = 20 }) {
    return await prismicio.getAllByType(type, {
      pageSize,
      page,
    });
  },
  async getSingleton(type) {
    return await prismicio.getSingle(type);
  },
  async getAllTags(){
    return await prismicio.getTags();
  }
};

export default prismic;
