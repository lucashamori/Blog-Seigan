'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

interface SearchPost {
  title: string;
  slug: string;
  excerpt: string;
}

export default function SearchInput({ posts }: { posts: SearchPost[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const results = query 
    ? posts.filter(p => 
        p.title.toLowerCase().includes(query.toLowerCase()) || 
        p.excerpt?.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleClose = () => {
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="flex items-center">
      
      {/* OVERLAY DE BUSCA: Ocupa a Navbar toda */}
      <div className={`
        flex items-center transition-all duration-300 ease-in-out
        fixed inset-x-0 top-0 h-20 bg-white dark:bg-zinc-900 px-6 z-[60]
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
      `}>
        
        <div className="flex items-center w-full max-w-5xl mx-auto relative">
          <Search  className="text-zinc-400 mr-3 shrink-0" />

          <input
            ref={inputRef}
            type="text"
            placeholder="O que você procura?"
            className="w-full py-2 text-base md:text-sm bg-transparent outline-none text-zinc-800 dark:text-zinc-100"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Escape' && handleClose()}
          />

          <button onClick={handleClose} className="ml-4 p-1 text-zinc-500 hover:text-purple-500 transition-colors">
            <X   />
          </button>

          {/* LISTA DE RESULTADOS (CORRIGIDA)
              - No mobile: fixed para ignorar paddings do pai e cobrir a largura da janela.
              - No desktop: md:absolute para se alinhar ao container max-w-5xl.
          */}
          {isOpen && query && (
            <div className="
              fixed md:absolute 
              top-20 md:top-full 
              left-0 right-0 
              w-full md:max-w-xl md:left-auto md:right-0
              bg-white/98 dark:bg-zinc-900/98 backdrop-blur-xl
              border-b md:border md:rounded-xl border-zinc-200 dark:border-zinc-800 
              shadow-2xl z-[70] overflow-hidden
            ">
              {results.length > 0 ? (
                results.map(post => (
                  <Link 
                    key={post.slug} 
                    href={`/posts/${post.slug}`}
                    className="block p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 border-b last:border-none border-zinc-100 dark:border-zinc-800 group"
                    onClick={handleClose}
                  >
                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 group-hover:text-purple-500 transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-[10px] text-zinc-500 line-clamp-1 mt-1  ">
                      {post.excerpt}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="p-5 text-center text-xs text-zinc-400">
                  Nenhum resultado encontrado para "{query}"
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ÍCONE LUPA (Gatilho inicial) */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Procurar"
        >
          <Search   />
        </button>
      )}
    </div>
  );
}