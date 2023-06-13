'use client'

import ReviewCarousel from '@/components/ReviewCarousel'
import PortfolioItem from '@/components/PortfolioOverlay'
import testimonials from '@/data/testimonials'
import PortfolioCarousel from '@/components/PortfolioCarousel'
import portfolio_tx from '@/data/portfolio-tx.js'
import portfolio_smiles from '@/data/portfolio-smiles.js'
import portfolio_face from '@/data/portfolio-face.js'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


const page = () => {

  const [txDisplayCount, setTxDisplayCount] = useState(3);
  const [smilesDisplayCount, setSmilesDisplayCount] = useState(3);
  const [faceDisplayCount, setFaceDisplayCount] = useState(0)

  const previous = () => setFaceDisplayCount((current: number) => (current === 0 ? portfolio_face.length - 1 : current - 1))
  const next = () => setFaceDisplayCount((current: number) => (current === portfolio_face.length - 1 ? 0 : current + 1))

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='w-screen pt-4 pb-20 bg-neutral-700 text-3xl xl:text-4xl text-center font-montserrat font-normal'>PORTFOLIO</h1>
      <div className='flex flex-col gap-12 py-20 px-2 xs:px-6 sm:px-12 justify-center items-center'>
        <div className="md:hidden">
          <h4 className='underline underline-offset-4 text-center text-lg pb-6'>Smile Transformations & Treatment Procedures</h4>
          <PortfolioCarousel />
        </div>

        {/* Smile Transformations */}
        <div className='hidden md:flex flex-col items-center gap-3'>
          <h4 className='underline underline-offset-4 text-lg py-3'>Smile Transformations</h4>
          <ul className='hidden md:grid grid-cols-3 gap-5 xl:gap-8'>
            {portfolio_smiles.slice(0, smilesDisplayCount).map((item) => (
              <li key={item.id} className="flex justify-center relative">
                <PortfolioItem image={item.image} description={item.description} />
              </li>
            ))}
          </ul>
          {smilesDisplayCount <= 3 ? <button onClick={() => setSmilesDisplayCount(portfolio_smiles.length)} className='border p-2 rounded-lg'>Show More</button> :
            <button onClick={() => setSmilesDisplayCount(3)} className='border p-2 rounded-lg'>Show Less</button>}
        </div>

        {/* Treatment Procedures */}
        <div className='hidden md:flex flex-col items-center gap-3'>
          <h4 className='underline underline-offset-4 text-lg py-3'>Treatment Procedures</h4>
          <ul className='hidden md:grid grid-cols-3 gap-5 xl:gap-8'>
            {portfolio_tx.slice(0, txDisplayCount).map((item) => (
              <li key={item.id} className="flex justify-center relative">
                <PortfolioItem image={item.image} description={item.description} />
              </li>
            ))}
          </ul>
          {portfolio_tx.length > 3 && (txDisplayCount <= 3 ? <button onClick={() => setTxDisplayCount(portfolio_tx.length)} className='border p-2 rounded-lg'>Show More</button> :
            <button onClick={() => setTxDisplayCount(3)} className='border p-2 rounded-lg'>Show Less</button>)}
        </div>

        {/* Full Face Transformations */}
        <div className='flex flex-col justify-center items-center gap-3'>
          <h4 className='underline underline-offset-4 text-lg py-3'>Full Face Transformations</h4>
          <div className='w-full max-w-5xl py-4 px-2 md:px-4 rounded-lg shadow-lg shadow-neutral-400 flex flex-col gap-3 text-center items-center'>
            <p>{portfolio_face[faceDisplayCount].description}</p>
            <div className='relative flex gap-3 text-lg items-center'>
              <button onClick={previous} className='p-2 h-8 rounded-full shadow hover:bg-white hover:text-gray-600'><FaArrowLeft /></button>
              <div className='flex flex-col md:flex-row items-center gap-4'>
                <div className='flex flex-col gap-3 items-center w-full h-full'>
                  <Image src={portfolio_face[faceDisplayCount].before} alt="before photo" />
                  <p>Before</p>
                </div>
                <div className='flex flex-col gap-3 items-center w-full h-full'>
                  <Image src={portfolio_face[faceDisplayCount].after} alt="after photo" />
                  <p>After</p>
                </div>
              </div>
              <button onClick={next} className='p-2 h-8 rounded-full shadow hover:bg-white hover:text-gray-600'><FaArrowRight /></button>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center py-16 font-normal underline decoration-double underline-offset-4'>
          More Coming Soon...
        </div>
        <div className="sm:mb-10 lg:hidden w-full flex justify-center">
          <ReviewCarousel />
        </div>
        <div className='hidden lg:flex justify-center max-w-7xl gap-5 xl:gap-8 text-xs italic pb-10'>
          {testimonials.map((item) => (
            <div key={item.id}>
              <p>"{item.content}"</p>
              <p className='pt-1'>- Google Review</p>
            </div>)
          )}
        </div>
      </div>
    </div>
  )
}

export default page