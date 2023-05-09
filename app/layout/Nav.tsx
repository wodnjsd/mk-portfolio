import React from 'react'
import Link from 'next/link'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div className='hidden sm:flex justify-between'>
      <div><Link href="/">DHK</Link></div>
      <ul className='flex justify-between gap-3 text-neutral-300'>
        <li className='hover:font-bold'><Link href="/about">About</Link></li>
        <li><Link href="/treatments">Treatments</Link></li>
        <li><Link href="/portfolio">Porfolio</Link></li>
        <li><Link href="/tutoring">Tutoring</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </div>
  )
}

export default Nav