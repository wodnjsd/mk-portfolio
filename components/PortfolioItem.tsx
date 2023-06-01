import Image, { StaticImageData } from 'next/image'


type Props = {
  description: string,
  image: StaticImageData

}

const PortfolioItem = ({ image, description }: Props) => {
  const overlayStyles =`p-5 absolute z-30 flex h-full w-full flex-col items-center justify-center
  whitespace-normal bg-logo text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <div className='flex justify-center items-center w-80'>
      <div className={overlayStyles}>
        <p>{description}</p>
      </div>
      <Image src={image} alt={`${image}`}/>
    </div>
  )
}

export default PortfolioItem