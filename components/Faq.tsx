import React from 'react'
import { Collapse } from 'react-collapse';

type Props = {
  faqOpen: boolean,
  toggle: () => void,
  question: string, 
  answer: string
}

const Faq = ({ faqOpen, toggle, question, answer }: Props) => {
  return (
    <div className='border rounded-md p-2'>
      <div onClick={toggle} className='flex justify-between px-2'>
        <p>{question}</p>
        <div>-</div>
      </div>
      <Collapse isOpened={faqOpen}>
        <div>{answer}</div>
      </Collapse>
    </div>

  )
}

export default Faq