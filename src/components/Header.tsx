import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'

const Header = () => {
  return (
    <header className=' bg-slate-950 text-white flex justify-around items-center p-4 '>
        <h1 className=' text-4xl font-semibold'>Brand Name<span className='text-accent'>.</span></h1>
        <div className='flex gap-4'>
            <a href='tel:+123-456-7890' className='hidden md:block bg-red-600 p-2 rounded-full w-fit'>Call +123-456-7890</a>
            <Link href='/contact' className='hidden md:block bg-green-600 p-2 rounded-full w-fit'>Get Free Quote</Link>
        </div>
        <div className='hidden md:flex'>
            <Nav/>
            </div>
            <div className='md:hidden'><MobileNav/></div>
    </header>
  )
}

export default Header