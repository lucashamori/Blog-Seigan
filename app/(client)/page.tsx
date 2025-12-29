import { client } from '../../sanity/lib/client';
import Header from '../components/Header';
import PostComponent from '../components/PostComponent';
import Pagination from '../components/Pagination'; // Vamos criar este componente abaixo
import { Post } from '../utils/interface';
import React from 'react';
import { cardStyle } from '../components/PostComponent'

// Definimos o limite recomendado para seu design minimalista
const POSTS_PER_PAGE = 7;

async function getPosts(page: number) {
  const start = (page - 1) * POSTS_PER_PAGE;
  const end = start + POSTS_PER_PAGE;

  // Alteramos a query para retornar os posts fatiados e o total geral
  const query = `{
    "posts": *[_type == "post"] | order(publishedAt desc) [${start}...${end}] {
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
    },
    "total": count(*[_type == "post"])
  }`;

  return await client.fetch(query);
}

export const revalidate = 60;

export default async function Home({ 
  searchParams 
}: { 
  searchParams: Promise<{ page?: string }> 
}) {
  // Capturamos a página atual da URL (ex: ?page=2)
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  
  const { posts, total } = await getPosts(currentPage);
  const hasMore = total > currentPage * POSTS_PER_PAGE;

  return (
    <div>
      <Header title="Sua Revolução Humana começa aqui"/>
      
      <div className={`${cardStyle}`}>
        {posts?.length > 0 && posts?.map((post: Post) => (
          <PostComponent key={post?._id} post={post}/>
        ))}
      </div>

      {/* Componente de Paginação integrado ao final do grid */}
      <div className="max-w-2xl mx-auto mb-20">
        <Pagination currentPage={currentPage} hasMore={hasMore} />
      </div>
    </div>
  );
}