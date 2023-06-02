"use client"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import slides from '@/data/portfolio'
import Image from 'next/image'


const Carousel = () => {
  const [current, setCurrent] = useState(0)
  // let autoSlide = false
  // let autoSlideInterval = 3000

  const previous = () => setCurrent((current: number) => (current === 0 ? slides.length - 1 : current - 1))
  const next = () => setCurrent((current: number) => (current === slides.length - 1 ? 0 : current + 1))

  // useEffect(() => {
  //   if (!autoSlide) return
  //   const slideInterval = setInterval(next, autoSlideInterval)
  //   return () => clearInterval(slideInterval)
  // }, [])

  return (
    <>
      <div className='overflow-hidden relative z-20'>
        <div className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}>
          {slides.map((item, i) => (
            <Image src={item.image} alt={item.description} key={i} />
          ))}
        </div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
          <button onClick={previous} className='p-2 rounded-full shadow border hover:bg-white hover:text-gray-600'><FaArrowLeft /></button>
          <button onClick={next} className='p-2 rounded-full shadow border hover:bg-white hover:text-gray-600'><FaArrowRight /></button>
        </div>
        <div className="absolute bottom-4 right-0 left-0">
          <div className='flex items-center justify-center gap-2'>
            {slides.map((_, i) => (
              <div className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`} />
            ))}
          </div>
        </div>
      </div>
      <p className='text-center py-5'>{slides[current].description}</p>
    </>
  )
}

export default Carousel