"use client"
import { StaticImageData } from 'next/image'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Props = {
  item: { id: number, name: string, description: string, image: StaticImageData },
  onClose: () => void

}

const Treatment = ({ item, onClose }: Props) => {

  const [isOpen, setIsOpen] = useState(true)


  return (
    <>
      {isOpen &&
        <div className='fixed left-0 top-0 z-50 backdrop-blur-sm w-screen h-screen flex justify-center items-center '>
          <div className='sm:w-4/5 w-full h-full sm:h-4/5 border p-5 rounded-md bg-logo text-neutral-700 flex flex-col items-center'>
            <button type='button' onClick={onClose} className='p-2 hover:shadow-xl self-end text-xl'>
              <AiOutlineCloseCircle />
            </button>
              <h3 className='font-normal underline underline-offset-8 text-xl'>{item.name}</h3>
              <div className='h-full flex flex-col justify-center items-center '>
              <p className='text-sm sm:text-base px-10 lg:px-36 whitespace-pre-line'>{item.description}</p>
            </div>
          </div>
        </div>}


    </>

  )
}

export default Treatment