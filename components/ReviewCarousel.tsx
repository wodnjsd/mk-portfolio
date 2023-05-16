"use client"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import testimonials from '@/data/testimonials'
import { motion, AnimatePresence } from 'framer-motion'

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0)
  let autoSlide = true
  let autoSlideInterval = 5000

  const previous = () => setCurrent((current: number) => (current === 0 ? testimonials.length - 1 : current - 1))
  const next = () => setCurrent((current: number) => (current === testimonials.length - 1 ? 0 : current + 1))
  const variants = {
    hidden: { opacity: 0, x: -50, y:0 },
    visible: { x: 0, opacity: 1, y:0 },
    exit: { opacity: 0, x: 50, y:0 }
  }
  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    // <div className='w-4/5 overflow-hidden relative'>
    //   <div className="w-full flex transition-transform ease-out duration-500"
    //     style={{ transform: `translateX(-${current * 100}%)` }}>
    //     {testimonials.map((item, i) => (
    //       <div className='w-full'>{item.content}</div>
    //     ))}
    //   </div>
    //   <div className='absolute inset-0 flex items-center justify-between p-4'>
    //     <button onClick={previous} className='p-2 rounded-full shadow border hover:bg-white hover:text-gray-600'><FaArrowLeft /></button>
    //     <button onClick={next} className='p-2 rounded-full shadow border hover:bg-white hover:text-gray-600'><FaArrowRight /></button>
    //   </div>

    // </div>
    <div className='mb-10 border rounded-lg flex justify-center items-center h-36 w-4/5 px-10'>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className='text-sm italic flex flex-col gap-3'
          key={current}>
            <p>"{testimonials[current].content}"</p>
            <p>-Google Review</p>
        </motion.div>


    </div>
  )
}

export default ReviewCarousel