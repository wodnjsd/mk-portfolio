"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '../../public/assets/logos/logo-full-transparent.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import { BsInstagram } from 'react-icons/bs'


const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Treatments", to: "/treatments", id: 3 },
  { name: "Portfolio", to: "/portfolio", id: 4 },
  { name: "Tutoring", to: "/tutoring", id: 5 },
  { name: "Contact", to: "/contact", id: 6 }
]

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const pathname = usePathname()


  return (
    <div className='bg-neutral-700 flex justify-between px-6 md:px-10 py-12'>
      
      {/* Logos */}
      <div>
        <Link href= "/" className='sm:hidden' ><Image src={logo} alt="logo" width={150}/></Link>
        <Link href="/" className='hidden sm:inline'><Image src={logo} alt="logo" width={220} /></Link>
      </div>

      {/* Nav Links */}
      <div>
        <div className='hidden lg:flex text-base font-light py-3'>
          <ul className='flex gap-5'>
            {links.map((link) => (
              <li key={link.id} className={pathname === link.to ? 'text-logo font-normal underline underline-offset-8' : 'hover:underline underline-offset-8'}><Link href={link.to}>{link.name}</Link></li>
            ))}
          </ul>
        </div>
        <button onClick={toggle} className='lg:hidden sticky z-50 p-2 text-xl'>
          {isOpen ? <IoClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* SideNav */}
      {isOpen && (
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }}
          transition={{ duration: 0.2 }}
          className='absolute bg-stone-400 top-0 left-0 z-40 w-full h-full flex flex-col justify-center items-center lg:hidden'>
          <ul className='flex flex-col items-center gap-6 text-lg'>
            {links.map((link) => (
              <li key={link.id} onClick={toggle} className={pathname === link.to ? 'font-normal underline underline-offset-8' : 'hover:underline underline-offset-8'}>
                <Link href={link.to}>{link.name}</Link>
              </li>
            ))}
            <button className='my-10 p-2 text-2xl'>
              <a href="https://www.instagram.com/dr.kimdental/" target="_blank"><BsInstagram /></a>
            </button>
          </ul>
        </motion.div>
      )}
    </div>
  )
}

export default Nav