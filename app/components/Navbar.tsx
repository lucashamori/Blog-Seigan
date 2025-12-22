import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import SearchInput from './SearchInput'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'

const query = groq`*[_type == "post"] {
  title,
  "slug": slug.current,
  excerpt
}`;

const Navbar = async () => {
  const posts = await client.fetch(query);

  return (
    <div className='mx-auto max-w-5xl px-6'>
      <div className='flex justify-between items-center h-16 w-full'>
        {/* Container do Logo com efeito Hover/Active */}
        <Link href='/' className="group relative">
            <div 
              className="w-[110px] h-12 transition-colors duration-300 
                         bg-black dark:bg-white 
                         group-hover:bg-purple-300 group-active:bg-purple-300"
              style={{
                maskImage: 'url(/seigan.svg)',
                maskRepeat: 'no-repeat',
                maskSize: 'contain',
                WebkitMaskImage: 'url(/seigan.svg)',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
              }}
              role="img"
              aria-label="seigan logo"
            />
        </Link>
        
        {/* Lado Direito: Busca + Theme Switch */}
        <div className="flex items-center gap-4">
          <SearchInput posts={posts} />
          
          {/* Divisor Minimalista */}
          <div />
          
          <ThemeSwitch/>
        </div>
      </div>
    </div>
  )
}

export default Navbar