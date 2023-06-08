import React from 'react'
import { Collapse } from 'react-collapse';
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

type Props = {
  faqOpen: boolean,
  toggle: () => void,
  question: string, 
  answer: string
}

const Faq = ({ faqOpen, toggle, question, answer }: Props) => {
  return (
    <div className='border rounded-md py-2 px-4 text-sm my-1' onClick={toggle}>
      <div className='flex justify-between py-1 font-semibold'>
        <p>{question}</p>
        <div>
          {faqOpen? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      <Collapse isOpened={faqOpen}>
        <div>{answer}</div>
      </Collapse>
    </div>

  )
}

export default Faq