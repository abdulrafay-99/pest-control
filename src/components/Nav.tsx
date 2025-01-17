'use client'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'


const Links=[
    {name:'Home',path:'/'},
    {name:'About Us',path:'/about'},
    {name:'Contact Us',path:'/contact'},
    {name:'Our Services',path:'/services'},
    {name:'FAQs',path:'/faq'},
  ]


const Nav = () => {
    const pathName=usePathname();
  return (
    <nav className='flex flex-col container md:flex-row items-center'>
        {Links.map((link)=>{
            return<Link href={link.path}  key={link.name}><Button variant='link' className={`${pathName==link.path && 'underline'}`}>{link.name}</Button></Link>
        })}
    </nav>
  )
}




export default Nav