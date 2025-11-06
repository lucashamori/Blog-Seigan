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
        <h2 className=' text-2xl dark:text-neutral-200 font-black'>{post?.title}</h2>
        <p className='my-2 text-purple-500  dark:text-purple-300 font-medium'>
            {new Date(post?.publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
        </p>
        <p className='mb-4 line-clamp-2 font-normal'>{post?.excerpt}</p>
      </Link>


    {/* Tags */}
    <div>
        {post?.tags?.map((tag)=> 
        <span key={tag?._id} className='mr-2 p-1 text-sm lowercase dark:text-purple-300 text-light-300'>#{tag?.name} </span>
        )}
    </div>




    </div>
  )
}

export default PostComponent

export const cardStyle = `
 mb-8 
 p-4 

`;
