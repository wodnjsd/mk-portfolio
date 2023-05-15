import React from 'react'

type Props = {
  name: string,
  description: string,

}

const Treatment = ({name, description}: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex h-48 w-48 flex-col items-center justify-center
  whitespace-normal bg-indigo-400 text-center text-white opacity-0 transition duration-500 hover:opacity-90`
  return (
    <div className='flex justify-center items-center h-48 w-48'>
      <h3>{name}</h3>
      <div className={overlayStyles}>
        <p>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Treatment