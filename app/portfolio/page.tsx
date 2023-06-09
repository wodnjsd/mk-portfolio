import ReviewCarousel from '@/components/ReviewCarousel'
import PortfolioItem from '@/components/PortfolioOverlay'
import testimonials from '@/data/testimonials'
import PortfolioCarousel from '@/components/PortfolioCarousel'
import portfolio from '@/data/portfolio.js'
import image1 from '@/public/assets/portfolios/full-face/2.jpeg'
import image2 from '@/public/assets/portfolios/full-face/5.jpeg'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='w-screen pt-4 pb-20 bg-neutral-700 text-3xl xl:text-4xl text-center font-montserrat font-normal'>PORTFOLIO</h1>
      <div className='flex flex-col gap-10 py-20 px-3 xs:px-10 sm:px-16 justify-center items-center'>
        <div className="md:hidden">
          <PortfolioCarousel />
        </div>
        <ul className='hidden md:grid grid-cols-3 gap-5 xl:gap-8'>
          {portfolio.map((item) => (
            <li key={item.id} className="flex justify-center relative">
              <PortfolioItem image={item.image} description={item.description} />
            </li>
          ))}
        </ul>

        <div>
          <h4 className='underline text-center text-lg py-3'>Full Face Transformations</h4>
          <div className='w-full p-5 rounded-lg shadow-lg shadow-zinc-400 flex gap-3 text-lg'>
            <div className='flex flex-col gap-3 items-center w-1/2'>
              <Image src={image1} alt="before" />
              <p>Before</p>
            </div>
            <div className='flex flex-col gap-3 items-center w-1/2'>
              <Image src={image2} alt="after" />
              <p>After</p>
            </div>

          </div>
        </div>

        <div className='w-full flex justify-center py-16 font-normal underline decoration-double underline-offset-4'>
          More Coming Soon...
        </div>
        <div className="sm:mb-10 lg:hidden w-full flex justify-center">
          <ReviewCarousel />
        </div>
        <div className='hidden lg:flex gap-5 xl:gap-8 text-xs italic pb-10'>
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