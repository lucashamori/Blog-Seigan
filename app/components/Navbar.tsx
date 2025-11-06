import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ThemeSwitch from './ThemeSwitch'


const Navbar = () => {
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
        <ThemeSwitch/>
      </div>
    </div>
  )
}

export default Navbar
