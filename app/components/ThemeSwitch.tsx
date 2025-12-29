"use client";

import React, {useEffect, useState} from 'react'
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitch = () => {

    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    
    
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }


  return (
   <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
   className="p-2 rounded-full transition-colors duration-200 
             text-zinc-800 dark:text-zinc-200 
             hover:text-purple-500 dark:hover:text-purple-300 
             active:text-purple-600 dark:active:text-purple-400"
   aria-label="Mudar Tema">
    {theme === 'dark' ? <Sun/> : <Moon/>}
    
        
   </button>
  )
}

export default ThemeSwitch;
