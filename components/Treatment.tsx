"use client"
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type Props = {
  item: { id: number, name: string, description: string, image:string },
  onClose: () => void

}

const Treatment = ({ item, onClose }: Props) => {

  const [isOpen, setIsOpen] = useState(true)


  return (
    <> 
    {isOpen && <div className='absolute top-0 left-0 z-30 backdrop-blur-sm w-screen h-screen flex justify-center items-center '>
      <div className='w-4/5 h-4/5 border rounded-md bg-logo text-neutral-800 flex flex-col jutify-between items-center'>
        <button type='button' onClick={onClose} className='self-end p-5 text-xl'>
          <AiOutlineCloseCircle />
        </button>
        <h3 className='font-normal text-lg'>{item.name}</h3>
        <div>
          <p>{item.description}</p>
        </div>
      </div>
    </div>}


    </>

  )
}

export default Treatment