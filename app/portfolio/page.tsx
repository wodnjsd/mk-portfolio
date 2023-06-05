import ReviewCarousel from '@/components/ReviewCarousel'
import PortfolioItem from '@/components/PortfolioOverlay'
import testimonials from '@/data/testimonials'
import PortfolioCarousel from '@/components/PortfolioCarousel'
import portfolio from '@/data/portfolio.js'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='w-screen pt-4 pb-20 bg-neutral-700 text-3xl text-center font-montserrat font-normal'>PORTFOLIO</h1>
      <div className='flex flex-col gap-10 py-20 px-3 xs:px-10 sm:px-16 justify-center items-center'>
        <div className="md:hidden">
          <PortfolioCarousel />
        </div>
        <ul className='hidden md:grid grid-cols-3 gap-5 '>
          {portfolio.map((item) => (
            <li key={item.id} className="flex justify-center relative">
              <PortfolioItem image={item.image} description={item.description} />
            </li>
          ))}
        </ul>
        <div className='w-full flex justify-center py-16 font-normal underline decoration-double underline-offset-4'>More Coming Soon...</div>
        <div className="sm:mb-10 lg:hidden w-full flex justify-center">
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
    </div>
  )
}

export default page