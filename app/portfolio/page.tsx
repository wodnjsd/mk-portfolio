import ReviewCarousel from '@/components/ReviewCarousel'
import PortfolioItem from '@/components/PortfolioItem'
import testimonials from '@/data/testimonials'
import PortfolioCarousel from '@/components/PortfolioCarousel'
import portfolio from '@/data/portfolio.js'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='p-10 md:p-20 flex flex-col justify-center items-center gap-10'>
      <h1 className='text-3xl sm:self-center font-montserrat font-normal'>PORTFOLIO</h1>
      <hr className='w-full h-2' />
      <div className="md:hidden px-5 -z-10">
        <PortfolioCarousel />
      </div>
      <ul className='hidden md:grid grid-cols-3 gap-5 '>
        {portfolio.map((item) => (
          <li key={item.id} className="flex justify-center relative">
            <PortfolioItem image={item.image} description={item.description} />
        </li>
        ))}
      </ul>
      <div className='w-full flex justify-center py-16'>More Coming Soon...</div>
      <div className="mb-10 px-10 lg:hidden w-full flex justify-center">
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