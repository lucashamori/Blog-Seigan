import { client } from '@/sanity/lib/client'
import Header from '@/app/components/Header'
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import { richTextStyles } from '@/app/components/richTextStyles';

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getPost(slug:string) {
    const query = `*[_type=="post" && slug.current == "${slug}"] [0]{ 
  title,
  slug,
  publishedAt,
  excerpt,
  _id,
  body,
  tags[]-> {
    _id,
    slug,
    name
  }  
}`;

const post = await client.fetch(query);
return post;

}

const page = async ({ params }: PageProps) => {
  const resolvedParams = await params
  const slug = resolvedParams.slug
  console.log(slug, 'slug')
  const post = await getPost(slug)
  console.log(post, 'post')

  return (
    <div>
      <Header title={post?.title} />
      <div className='text-center'>
        <span className='my-2 text-purple-500  dark:text-purple-300 font-medium'>{new Date(post?.publishedAt).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            })}
        </span>
        <div className='mt-5'>
            {post?.tags?.map((tag)=> 
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                <span className='mr-2 p-1 text-sm lowercase text-neutral-100 text-light-300 '>
                    #{tag?.name}
                </span>
            </Link>
            )}


            <div className={`prose prose-neutral dark:prose-invert ${richTextStyles}`}>
                <PortableText value={post?.body} />
            </div>


        </div>
      </div>
    </div>
  )
}

export default page;