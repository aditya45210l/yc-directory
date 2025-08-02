
import { defineQuery } from 'next-sanity';
export const STARTUPS_QUERY = defineQuery(`
  *[_type == "startups" && defined(slug.current)]{
    _id,
    title,
    slug,
    _createdAt,
    description,
    author -> {
      _id,name,image,bio
    } ,
    views,
    category,
    image,
}`)