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
   <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
    {theme === 'dark' ? <Sun/> : <Moon/>}
        
   </button>
  )
}

export default ThemeSwitch;
