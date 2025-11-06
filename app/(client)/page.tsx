import { client } from '../../sanity/lib/client';
import Header from '../components/Header';
import PostComponent from '../components/PostComponent';
import { Post } from '../utils/interface';
import React from 'react';
import {cardStyle} from '../components/PostComponent'

async function getPosts() {
  const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  publishedAt,
  excerpt,
  tags[]-> {
    _id,
    slug,
    name
  } 
}`;


  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60; // Revalidate every 60 seconds


export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, 'posts');
  return (
    <div >
      <Header title="Sua Revolução Humana começa aqui"/>
      <div className={`${cardStyle}`}>
        {posts?.length > 0 && posts?.map((post) => (
          <PostComponent key={post?._id} post={post}/>
        ))}
      </div>

    </div>
  );
}