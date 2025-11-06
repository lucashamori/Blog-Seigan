import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { tag } from './tag'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag],
}
