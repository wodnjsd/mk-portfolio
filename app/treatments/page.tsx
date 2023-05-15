import Treatment from "@/components/Treatment"

type Props = {}

const treatments = [
  { id: 1, name: "Composite Bonding", description: "amazing", image: "" },
  { id: 2, name: "Invisalign", description: "straighten your teeth", image: "" },
  { id: 3, name: "Whitening", description: "whiten your teeth", image: "" },
  { id: 4, name: "Dermal Fillers", description: "", image: "" },
  { id: 5, name: "Anti-wrikle Injections", description: "", image: "" }
]
const page = (props: Props) => {
  return (
    <div className="mx-20 my-20 max-w-5xl ">
      <h1 className="text-xl">Treatments</h1>
      <ul className="flex gap-5 flex-wrap">
        {treatments.map((tx) => (
       <li key={tx.id} className="w-48 h-48 border rounded-md flex justify-center items-center">
        <Treatment name={tx.name} description={tx.description}/>
       </li>
        ))}
      </ul>
    </div>
  )
}

export default page