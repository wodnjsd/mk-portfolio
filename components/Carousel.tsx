"use client"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import image1 from '@/public/assets/portfolios/1.jpeg'
import image2 from '@/public/assets/portfolios/2.jpeg'
import image3 from '@/public/assets/portfolios/3.jpeg'
import image4 from '@/public/assets/portfolios/4.jpeg'
import image5 from '@/public/assets/portfolios/5.jpeg'
import image6 from '@/public/assets/portfolios/6.jpeg'
import Image from 'next/image'


const slides = [
  { id: 1, image: image1, description: "Invisalign" },
  { id: 2, image: image2, description: "Whitening" },
  { id: 4, image: image3, description: "White filling" },
  { id: 5, image: image4, description: "New white crown" },
  { id: 6, image: image5, description: "Extractions & Dentures" },
  { id: 7, image: image6, description: "Whitening & Composite bonding" },
]


const Carousel = () => {
  const [current, setCurrent] = useState(0)
  let autoSlide = false
  let autoSlideInterval = 3000

  const previous = () => setCurrent((current: number) => (current === 0 ? slides.length - 1 : current - 1))
  const next = () => setCurrent((current: number) => (current === slides.length - 1 ? 0 : current + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='overflow-hidden relative'>
      <div className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {slides.map((item, i) => (
          <Image src={item.image} alt={item.description} />
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
  )
}

export default Carousel