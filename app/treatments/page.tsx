"use client"

import Treatment from "@/components/Treatment"
import { useState } from 'react'
import treatments from '@/data/treatments.js'
import Image, { StaticImageData } from "next/image"

type Props = {}

interface TreatmentItem {
  id: number;
  name: string;
  description: string;
  image: StaticImageData
}

const page = (props: Props) => {

  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);

  const handleClick = (treatment: TreatmentItem) => {
    setSelectedTreatment(treatment);
  };

  const handleClose = () => {
    setSelectedTreatment(null)
  }

  return (
    <div className='p-10 sm:px-20 flex flex-col items-center gap-10 font-normal'>
      <h1 className='text-3xl sm:self-center font-montserrat sm:py-10'>TREATMENTS</h1>
      <hr className='w-full h-2' />
      <ul className="flex gap-5 flex-wrap justify-center py-20">
        {treatments.map((tx) => (
          <div key={tx.id} className="hover:cursor-pointer">
            <li className="w-56 h-56 border rounded-md overflow-hidden" onClick={() => { handleClick(tx) }}>
              <div className="group flex justify-center items-center">
                <Image src={tx.image} alt={tx.name} className="group-hover:transition group-hover:scale-125 group-hover:blur-sm ease-in-out"/>
                <p className="absolute z-20">{tx.name}</p>
              </div>
            </li>
          </div>
        )
        )}
      </ul>
      {selectedTreatment && <Treatment item={selectedTreatment} onClose={handleClose} />}
    </div>
  )
}

export default page