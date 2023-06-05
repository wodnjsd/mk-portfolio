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
    <div className='px-5 md:px-20 flex flex-col items-center font-normal'>
      <h1 className='w-screen bg-neutral-700 pt-4 pb-20 text-3xl text-center font-montserrat'>TREATMENTS</h1>
      <ul className="flex gap-5 flex-wrap justify-center py-16 sm:py-32">
        {treatments.map((tx) => (
          <div key={tx.id} className="hover:cursor-pointer">
            <li className="w-64 h-64 border rounded-md overflow-hidden" onClick={() => { handleClick(tx) }}>
              <div className="group flex justify-center items-center">
                <Image src={tx.image} alt={tx.name} className="brightness-75 group-hover:transition group-hover:scale-125 group-hover:blur-sm ease-in-out"/>
                <p className="absolute z-20 text-lg text-neutral-100">{tx.name}</p>
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