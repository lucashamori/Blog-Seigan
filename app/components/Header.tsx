import React from 'react'

interface Props {
    title: string;
}



const Header = ({title = ''}: Props) => {
  return (
   <header className='py-14 px-4 mb-12 text-center '>
    <h2 className='uppercase text-2xl mx-auto max-w-wxl font-bold'>{title}</h2>
   </header>
  )
}

export default Header
