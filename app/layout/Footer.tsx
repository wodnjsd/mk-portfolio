import Image from "next/image"
import Link from "next/link"
import logo from '@/public/assets/logos/logo-square-transparent.png'
import { BsInstagram } from 'react-icons/bs'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="bg-neutral-700 px-12 text-sm flex flex-col py-12 items-center gap-6 font-inter font-thin">
      <div className="text-4xl text-logo"><a><BsInstagram /></a></div>
      <div className="flex gap-5">
        <Link href='/treatments' className="hover:underline">Treatments</Link>
        <Link href='/portfolio' className="hover:underline">Portfolio</Link>
        <Link href='/tutoring' className="hover:underline">Tutoring</Link>
        <Link href='/contact' className="hover:underline">Contact</Link>
      </div>
      <div className="flex flex-col items-center md:inline">
        <span>COPYRIGHT © 2023 DR MICHAEL KIM.</span>
        <span>ALL RIGHTS RESERVED.</span>
        <span> BUILT BY JAEWON HAN</span></div>
      <Image src={logo} alt="logo" width={60} height={60} />
    </div>
  )
}

export default Footer