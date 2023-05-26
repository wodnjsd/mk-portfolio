"use client"

import Treatment from "@/components/Treatment"
import { useState } from 'react'

type Props = {}

interface TreatmentItem {
  id: number;
  name: string;
  description: string;
  image: string
}

const page = (props: Props) => {


  const treatments = [
    { id: 1, name: "General Dentistry", description: "amazing", image: "" },
    { id: 2, name: "Composite Bonding", description: "amazing", image: "" },
    { id: 3, name: "Invisalign", description: "straighten your teeth", image: "" },
    { id: 4, name: "Whitening", description: "whiten your teeth", image: "" },
    { id: 5, name: "Dermal Fillers", description: "", image: "" },
    { id: 6, name: "Anti-wrinkle Injections", description: "", image: "" }
  ]
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);

  const handleClick = (treatment: TreatmentItem) => {
    setSelectedTreatment(treatment);
  };

  const handleClose = () => {
    setSelectedTreatment(null)
  }

  return (
    <div className='p-10 sm:px-20 flex flex-col items-center gap-10'>
      <h1 className='text-3xl sm:self-center font-montserrat sm:py-10 font-normal'>TREATMENTS</h1>
      <hr className='w-full h-2' />
      <ul className="flex gap-5 flex-wrap justify-center">
        {treatments.map((tx) => (
          <div key={tx.id}>
            <li className="w-48 h-48 border rounded-md flex justify-center items-center" onClick={() => { handleClick(tx) }}>
              {tx.name}
            </li>
          </div>
        )
        )}
        {selectedTreatment && <Treatment item={selectedTreatment} onClose={handleClose} />}
      </ul>
    </div>
  )
}

export default page