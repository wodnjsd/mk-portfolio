import Image from "next/image"
import Link from "next/link"
import logo from '@/public/assets/logos/logo-square-transparent.png'
import { BsInstagram } from 'react-icons/bs'


const Footer = () => {
  return (
    <div className="bg-neutral-700 px-12 text-sm flex flex-col py-12 items-center gap-6 font-inter font-thin">
      <div className="text-4xl text-logo">
        <a href="https://www.instagram.com/dr.kimdental/" target="_blank" className="flex flex-col gap-3 items-center ">
          <BsInstagram />
          <p className="text-neutral-100 text-xs underline underline-offset-1">@dr.kimdental</p>
        </a>
      </div>
      <div className="flex gap-5 px-3">
        <Link href='/treatments' className="hover:underline underline-offset-2">Treatments</Link>
        <Link href='/portfolio' className="hover:underline underline-offset-2">Portfolio</Link>
        <Link href='/tutoring' className="hover:underline underline-offset-2">Tutoring</Link>
        <Link href='/contact' className="hover:underline underline-offset-2">Contact</Link>
      </div>
      <div className="flex flex-col text-xs sm:text-sm text-center items-center md:inline">
        <span>COPYRIGHT © 2023 DR MICHAEL KIM.</span>
        <span>ALL RIGHTS RESERVED.</span>
        <span> BUILT BY JAEWON HAN</span></div>
      <Image src={logo} alt="logo" width={60} height={60} />
    </div>
  )
}

export default Footer