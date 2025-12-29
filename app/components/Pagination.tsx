import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number;
  hasMore: boolean;
}

export default function Pagination({ currentPage, hasMore }: PaginationProps) {
  return (
    <nav className="flex justify-between items-center mt-12 px-4 md:px-0">
      {currentPage > 1 ? (
        <Link 
          href={`/?page=${currentPage - 1}`}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-purple-500 transition-colors group font-bold"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Anterior
        </Link>
      ) : <div />}

      <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-500 dark:text-zinc-200 font-bold opacity-60">
         {currentPage}
      </span>

      {hasMore ? (
        <Link 
          href={`/?page=${currentPage + 1}`}
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-200 hover:text-purple-500 transition-colors group font-bold"
        >
          Próximo
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      ) : <div />}
    </nav>
  )
}