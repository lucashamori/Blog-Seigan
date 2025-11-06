import { init } from "next/dist/compiled/webpack/webpack";
import { validation } from "sanity";

export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule: Rule) => Rule.required().error('required'),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule: Rule) => Rule.required().error('required'),
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
            validation: (Rule: Rule) => Rule.required().error('required'),
        },
        {   
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            validation: (Rule: Rule) => Rule.required().error('required'),
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule: Rule) => Rule.required().error('required'),
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }

    ],
}