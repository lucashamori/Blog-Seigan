// sanity/lib/queries.ts
import { groq } from "next-sanity";

export const searchPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  "slug": slug.current,
  excerpt,
  "tags": tags[]->name
}`;