import image1 from '../../public/assets/portfolio/1.jpg'
import image3 from '@/public/assets/portfolio/3.jpg'
import image6 from '@/public/assets/portfolio/6.jpg'
import image7 from '@/public/assets/portfolio/7.jpg'
import image8 from '@/public/assets/portfolio/8.jpg'
import image10 from '@/public/assets/portfolio/10.jpg'
import image14 from '@/public/assets/portfolio/14.jpg'
import PortfolioItem from '@/components/PortfolioItem'
import testimonials from '@/data/testimonials'

type Props = {}

const portfolio = [
  { id: 1, image: image7, description: "Whitening" },
  { id: 2, image: image3, description: "Composite bonding" },
  // {id: 3, image: image1, description: "Dentures"},
  { id: 4, image: image8, description: "Invisalign" },
  { id: 5, image: image10, description: "White filling" },
  { id: 6, image: image6, description: "Diastema closure with composite bonding" },
  { id: 7, image: image14, description: "New white crown" },
]


const page = (props: Props) => {
  return (
    <div className='m-10 sm:m-20 flex flex-col items-start gap-10 max-w-6xl sm:items-center'>
      <h1 className='text-3xl sm:self-center font-montserrat sm:py-10 font-normal'>PORTFOLIO</h1>
      <hr className='w-full h-2'/>
      <ul className='flex gap-5 flex-wrap'>
        {portfolio.map((item) => (
          <li key={item.id}><PortfolioItem image={item.image} description={item.description} /></li>
        ))}
        <li className='w-80 h-80 flex items-center'>More Coming Soon...</li>
      </ul>
      <div className='flex flex-col sm:flex-row gap-5 text-xs italic pt-10'>
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