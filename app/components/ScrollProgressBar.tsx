'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      // Calculamos a posição atual do scroll
      const currentProgress = window.scrollY;
      // Calculamos a altura total "scrollável" (altura total - altura da janela)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    // Adicionamos o listener de scroll
    window.addEventListener('scroll', updateScrollProgress);
    
    // Limpeza ao desmontar o componente
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-150 pointer-events-none">
      <div 
        className="h-full bg-purple-400 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}