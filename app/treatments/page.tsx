
type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <h1 className="text-xl">Treatments</h1>
      <ul className="flex gap-5 flex-wrap">
        <li className="border rounded-md p-5">Composite Bonding</li>
        <li className="border rounded-md p-5">Invisalign</li>
        <li className="border rounded-md p-5">Whitening</li>
        <li className="border rounded-md p-5">Dermal Fillers</li>
        <li className="border rounded-md p-5">Anti-wrinkle Injections</li>
      </ul>
    </div>
  )
}

export default page