import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../assets/logos/logo-full-transparent.png'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='hidden sm:flex justify-between'>
      <div><Link href="/"><Image src={logo} alt="logo" width={200}/></Link></div>
      <ul className='flex justify-between gap-3 text-logo font-lora py-3'>
        <li className='hover:font-bold'><Link href="/about">About</Link></li>
        <li><Link href="/treatments">Treatments</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
        <li><Link href="/tutoring">Tutoring</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav