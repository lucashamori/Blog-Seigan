import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react';



const CMSNavbar = () => {
  return (
    <div className='flex justify-between items-center py-1 px-5'>
    
    
    <Link className='bg-white' href='/'>
        <ArrowLeft/>
    </Link>
      
      
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
    </div>
  )
}

export default CMSNavbar
