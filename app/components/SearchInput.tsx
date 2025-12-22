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

  return (
    <div className="relative flex items-center justify-end">
      
      {/* CONTAINER DO INPUT REDUZIDO 
          - Desktop: w-48 (192px) - antes era w-64 (256px)
          - Mobile: w-[50vw] - ocupa apenas metade da largura da tela
      */}
      <div className={`
        flex items-center transition-all duration-300 ease-in-out
        absolute right-10 md:static
        ${isOpen 
          ? 'w-[55vw] md:w-48 opacity-100 md:mr-2 pointer-events-auto' 
          : 'w-0 opacity-0 pointer-events-none'
        }
      `}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar..."
          className="w-full p-2 text-sm rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 outline-none focus:ring-1 focus:ring-zinc-400 dark:focus:ring-zinc-600"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === 'Escape' && setIsOpen(false)}
        />
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors z-10"
        aria-label="Procurar"
      >
        {isOpen ? <X  /> : <Search  />}
      </button>

      {/* Dropdown também ajustado para a nova largura compacta */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full right-0 mt-2 w-[70vw] md:w-64 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-xl z-50 overflow-hidden">
          {results.map(post => (
            <Link 
              key={post.slug} 
              href={`/posts/${post.slug}`}
              className="block p-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 border-b last:border-none border-zinc-100 dark:border-zinc-800"
              onClick={() => {
                setQuery('');
                setIsOpen(false);
              }}
            >
              <h4 className="text-xs font-bold truncate">{post.title}</h4>
              <p className="text-[10px] text-zinc-500 truncate mt-1">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}