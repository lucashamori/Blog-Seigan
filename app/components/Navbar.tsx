import Image from 'next/image'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import SearchInput from './SearchInput'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

// Query para buscar posts para o índice de busca
const query = groq`*[_type == "post"] {
  title,
  "slug": slug.current,
  excerpt
}`;

const Navbar = async () => {
  // Busca os dados no servidor para performance e SEO
  const posts = await client.fetch(query);

  return (
    <div className='mx-auto max-w-5xl px-6'>
      <div className='flex justify-between items-center h-16 w-full'>
        <Link href='/'>
            <Image
                src="/seigan.svg"
                alt="blog logo"
                className='invert dark:invert-0'
                width={110}
                height={100}
                priority
            />
        </Link>
        
        {/* Lado Direito: Busca + Theme Switch */}
        <div className="flex items-center gap-2">
          <SearchInput posts={posts} />
          <div  /> {/* Divisor minimalista */}
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  )
}

export default Navbar