"use client"
import { useState, useEffect } from 'react'
import testimonials from '@/data/testimonials'
import { motion } from 'framer-motion'

const ReviewCarousel = () => {
  const [current, setCurrent] = useState(0)
  let autoSlide = true
  let autoSlideInterval = 5000

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

    <div className=' flex justify-center items-center'>
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className='text-sm italic flex flex-col gap-3'
          key={current}>
            <a href={testimonials[current].link}>
            <p>"{testimonials[current].content}"</p>
            <p>-Google Review</p>
            </a>
        </motion.div>
    </div>
  )
}

export default ReviewCarousel