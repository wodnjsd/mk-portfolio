"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import logo from '../../public/assets/logos/logo-full-transparent.png'
import logoSmall from '../../public/assets/logos/logo-square-transparent.png'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { IoClose } from 'react-icons/io5'
import {BsInstagram} from 'react-icons/bs'

type Props = {}


const links = [
  // { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Treatments", to: "/treatments", id: 3 },
  { name: "Portfolio", to: "/portfolio", id: 4 },
  { name: "Tutoring", to: "/tutoring", id: 5 },
  { name: "Contact", to: "/contact", id: 6 }
]

const Nav = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const pathname = usePathname()


  return (
    <div className='flex justify-between px-10'>
      {/* Logos */}
      <div>
        <Image src={logoSmall} alt="logo" width={40} height={40} className='sm:hidden' />
        <Link href="/" className='hidden sm:inline'><Image src={logo} alt="logo" width={200} /></Link>
      </div>
      <div>
        <div className='hidden sm:flex font-inter text-sm font-light py-3'>
          <ul className='flex gap-4'>
            {links.map((link) => (
              <li key={link.id} className={pathname === link.to? 'text-sm md:text-base underline underline-offset-8' : 'text-sm md:text-base hover:underline underline-offset-8' }><Link href={link.to}>{link.name}</Link></li>
            ))}
             {/* className='text-sm md:text-base hover:underline underline-offset-8' */}
          </ul>
        </div>
        <button onClick={toggle} className='sm:hidden fixed z-50'>
          {isOpen ? <IoClose /> : <AiOutlineMenu />}
        </button>
      </div>
{/* SideNav */}
      {isOpen && (
        <motion.div initial={{ x: 40 }} animate={{ x: 0 }}
          transition={{ duration: 0.1 }}
          className='bg-stone-400 top-0 left-0 z-40 w-full h-screen flex flex-col justify-center absolute items-center sm:hidden'>
          <ul className='flex flex-col items-center gap-5'>
            {links.map((link) => (
              <li key={link.id} onClick={toggle} className='hover:underline underline-offset-8'><Link href={link.to}>{link.name}</Link></li>
            ))}
               <a href="https://www.instagram.com/dr.kimdental/" target="_blank"> <BsInstagram /></a>
          </ul>
        </motion.div>
        )}
    </div>
  )
}

export default Nav