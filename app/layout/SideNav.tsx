"use client"

import Link from "next/link"
import { IoClose } from 'react-icons/io5'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion, useCycle } from 'framer-motion'
import { useState } from "react"
import {BsInstagram} from 'react-icons/bs'
import Image from 'next/image'


type Props = {}

const links = [
  { name: "Home", to: "/", id: 1 },
  { name: "About", to: "/about", id: 2 },
  { name: "Treatments", to: "/treatments", id: 3 },
  { name: "Portfolio", to: "/portfolio", id: 4 },
  { name: "Tutoring", to: "/tutoring", id: 5 },
  { name: "Contact", to: "/contact", id: 6 }
]
const Sidenav = (props: Props) => {

  // const [open, cycleOpen] = useCycle(false, true)
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="sm:hidden absolute z-40 h-full w-full flex flex-col justify-between text-logo">
      <button onClick={toggle}>{isOpen ? <IoClose/> : <AiOutlineMenu />}</button>
      {isOpen && <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}>
        <ul className='flex flex-col justify-between gap-3 items-center'>
          {links.map((link) => (
            <li key={link.id} className="hover:font-bold"><Link href={link.to} onClick={toggle}>{link.name}</Link></li>)
          )}
              <a href="https://www.instagram.com/dr.kimdental/" target="_blank"> <BsInstagram /></a>
        </ul>
      </motion.div>}
    </div>


  )
}

export default Sidenav