import ReviewCarousel from '@/components/ReviewCarousel'
import PortfolioItem from '@/components/PortfolioItem'
import testimonials from '@/data/testimonials'
import Carousel from '@/components/Carousel'
import portfolio from '@/data/portfolio.js'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='p-10 sm:px-20 flex flex-col items-center gap-10'>
      <h1 className='text-3xl sm:self-center font-montserrat sm:py-10 font-normal'>PORTFOLIO</h1>
      <hr className='w-full h-2' />

      <div className="md:hidden">
        <Carousel />
      </div>

      <ul className='hidden md:flex justify-center w-full gap-5 flex-wrap'>
        {portfolio.map((item) => (
          <li key={item.id}><PortfolioItem image={item.image} description={item.description} /></li>
        ))}
      </ul>
      <div className='w-full flex justify-center py-20'>More Coming Soon...</div>
      <div className="mb-10 border rounded-lg lg:hidden w-full flex justify-center">
        <ReviewCarousel />
      </div>
      <div className='hidden lg:flex gap-5 text-xs italic pb-10'>
        {testimonials.map((item) => (
          <div key={item.id}>
            <p>"{item.content}"</p>
            <p className='pt-1'>- Google Review</p>
          </div>)
        )}
      </div>
    </div>
  )
}

export default page