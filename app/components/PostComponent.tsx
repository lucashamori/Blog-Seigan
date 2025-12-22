import React from 'react'
import Link from 'next/link';
import { Post } from '../utils/interface';

interface Props {
    post: Post;
}

const PostComponent = ({post}: Props) => {
  return (
    <div className={cardStyle}>
      <Link href={`/posts/${post.slug.current}`}>
        <h2 className=' text-2xl dark:text-neutral-200 font-black text-neutral-800' >{post?.title}</h2>
        <p className=' my-2 text-xs md:text-sm tracking-[0.2em] uppercase text-purple-600 dark:text-purple-300 font-bold'>
            {new Date(post?.publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
        </p>
        <p className='mb-4 line-clamp-2 font-normal'>{post?.excerpt}</p>
      </Link>


    {/* Tags */}
   




    </div>
  )
}

export default PostComponent

export const cardStyle = `
 mb-8 
 p-4 

`;
