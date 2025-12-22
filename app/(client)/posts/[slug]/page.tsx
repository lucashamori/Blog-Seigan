import { client } from '@/sanity/lib/client'
import Header from '@/app/components/Header'
import { PortableText } from 'next-sanity';
import { richTextStyles } from '@/app/components/richTextStyles';
import ScrollProgressBar from '@/app/components/ScrollProgressBar';

interface PageProps {
  params: Promise<{ slug: string }>
}

/**
 * Calcula o tempo de leitura com base no conteúdo do PortableText.
 */
function calculateReadingTime(body: any[]) {
  if (!body) return 0;
  const text = body
    .map((block) => {
      if (block._type !== 'block' || !block.children) return '';
      return block.children.map((child: any) => child.text).join('');
    })
    .join(' ');

  const wordsPerMinute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

async function getPost(slug: string) {
  const query = `*[_type=="post" && slug.current == "${slug}"] [0]{ 
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body
  }`;

  const post = await client.fetch(query);
  return post;
}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const post = await getPost(slug);
  
  const readingTime = calculateReadingTime(post?.body);

  return (
    <div>
      {/* 1. Componente de Scroll Progress */}
      <ScrollProgressBar />

      <Header title={post?.title} />
      
      <div className='text-center'>
        {/* Container de metadados centralizado conforme original */}
        <div className='flex flex-col items-center gap-2 mb-8'>
          <span className='text-xs md:text-sm tracking-[0.2em] uppercase text-purple-400 dark:text-purple-300 font-bold'>
            {new Date(post?.publishedAt).toLocaleDateString('pt-BR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          
          {/* 2. Tempo de Leitura Estimado */}
          <span className='text-xs uppercase tracking-widest text-zinc-500 dark:text-zinc-400'>
            {readingTime} min de leitura
          </span>
        </div>

        <div className='mt-5'>
          {/* 3. Estilização lilás nos Headings mantendo as proporções originais */}
          <div className={`
            prose prose-neutral dark:prose-invert mx-auto
            prose-headings:text-purple-500 dark:prose-headings:text-purple-300
            ${richTextStyles}
          `}>
            <PortableText value={post?.body} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page;