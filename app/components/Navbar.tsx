import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'
import SearchInput from './SearchInput'
import { client } from '@/sanity/lib/client'
import { groq } from 'next-sanity'
import { User } from 'lucide-react'

const query = groq`*[_type == "post"] {
  title,
  "slug": slug.current,
  excerpt
}`;

const Navbar = async () => {
  const posts = await client.fetch(query);

  return (
    <header className='sticky top-0 z-[100] w-full bg-stone-100/40 dark:bg-neutral-800/80 backdrop-blur-md  border-zinc-100/50 dark:border-zinc-900 transition-all'>
      <div className='mx-auto max-w-5xl px-6'>
        <div className='flex justify-between items-center h-20 w-full relative'>
          
          {/* LOGO */}
          <Link href='/' className="group relative z-10 shrink-0">
              <div 
                className="w-[110px] h-12 transition-all duration-300 
                           bg-black dark:bg-white 
                           group-hover:bg-purple-400 group-active:bg-purple-400"
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
          
          {/* LADO DIREITO PADRONIZADO 
              - gap-0: Removido o gap para que o espaçamento venha apenas do padding (p-2).
          */}
          <div className="flex items-center gap-0 p-2">
            
            {/* LINK ABOUT 
                - p-2: 8px de respiro em cada lado (Total 16px entre ícones).
            */}
            <Link 
              href="/about" 
              className="p-2 rounded-full transition-colors duration-200 
                         text-zinc-800 dark:text-zinc-200 
                         hover:text-purple-500 dark:hover:text-purple-400 
                         active:text-purple-600"
              aria-label="Sobre o autor"
            >
              <User  />
            </Link>

            {/* BUSCA
                IMPORTANTE: O botão dentro deste componente DEVE ter a classe 'p-2'.
            */}
            <SearchInput posts={posts} />
            
            {/* THEME SWITCH
                IMPORTANTE: O botão dentro deste componente DEVE ter a classe 'p-2'.
            */}
            <ThemeSwitch />
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar