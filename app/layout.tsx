import Nav from './layout/Nav'
import './globals.css'
import Footer from './layout/Footer'
import SideNav from './layout/SideNav'
import { Lora, Roboto } from 'next/font/google'

export const metadata = {
  title: 'Michael Kim',
  description: 'Generated by create next app',
}

const lora = Lora({
  weight: "400",
  subsets: ['latin'],
  variable: '--font-lora'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable}`}>
      <body className="mx-10 my-10 h-screen flex flex-col justify-between bg-neutral-600 text-neutral-200" ><SideNav /><Nav />{children}<Footer /></body>
    </html>
  )
}
