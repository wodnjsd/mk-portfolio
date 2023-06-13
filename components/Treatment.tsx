"use client"
import { StaticImageData } from 'next/image'
import { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Faq from './Faq'

type Props = {
  item: { id: number, name: string, description: string, image: StaticImageData, faq?: [{ q: string, answer: string }] },
  onClose: () => void
}

const Treatment = ({ item, onClose }: Props) => {

  const [isOpen, setIsOpen] = useState(true)

  const [faqOpen, setFaqOpen] = useState<number | null>(null)
  const toggle = (index: number) => {
    if (faqOpen === index) {
      return setFaqOpen(null)
    }
    setFaqOpen(index)
  }


  return (
    <>
      {isOpen &&
        <div className='fixed left-0 top-0 z-50 backdrop-blur-sm w-screen h-screen flex justify-center items-center' onClick={onClose}>
          <div className='w-full sm:w-3/5 xl:w-2/5 h-full overflow-auto sm:h-4/5 border p-5 rounded-md bg-logo text-neutral-700 flex flex-col items-center'>
            <button type='button' onClick={onClose} className='p-2 hover:shadow-xl self-end text-xl'>
              <AiOutlineCloseCircle />
            </button>
            <h3 className='font-normal underline underline-offset-8 text-xl pb-4'>{item.name}</h3>
            <div className='h-full flex flex-col justify-center items-center '>
              <p className='text-sm xs:text-base lg:px-16 whitespace-pre-line'>{item.description}</p>
            </div>
            {item.faq &&
              <div className='py-4'>
                <h3 className='text-center xl:text-lg underline pb-2'>FAQs</h3>
                {item.faq?.map((question, index) => (
                  <Faq key={index}
                    faqOpen={index === faqOpen}
                    question={question.q}
                    answer={question.answer}
                    toggle={() => toggle(index)} />
                ))}
              </div>
            }
          </div>
        </div>}
    </>
  )
}

export default Treatment