


export const post = {
    name: 'post',
    title: 'Post',
    type: 'document',
    
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'publishedAt',
            title: 'Published At',
            type: 'datetime',
            initialValue: (new Date()).toISOString(),
        },
        {   
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'array',
            of: [{ type: 'block' }],
            
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }

    ],
}

export function getSearchIndex() {
  const allPosts = getAllPosts(); // Sua função existente que lê o diretório de posts
  
  return allPosts.map(post => ({
    title: post.title,
    description: post.description,
    slug: post.slug,
    tags: post.tags || [],
  }));
}