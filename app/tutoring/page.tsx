import Link from "next/link"
import Image from "next/image"
import tutoringData from "../../data/tutoring"


type Props = {}

const page = (props: Props) => {
  return (
    <div className="p-10 sm:p-20 flex flex-col items-center gap-10 ">

      <h1 className='text-3xl sm:self-center font-montserrat sm:py-10 font-normal'>KIM ACADEMY</h1>
      <hr className='w-full h-2' />

      <p>Michael is also the founder of Kim Academy, which specialises in private tuition to prepare students for GCSE and A-Levels,
        as well as preparation for medical and dental university applications.</p>

      <h3 className="text-xl py-4 font-normal text-logo">OUR SERVICES</h3>
      <div className="flex gap-5">
        <div>
          <h4 className="text-center border border-dotted p-1">Exam preparation</h4>
          <ul className="text-sm flex flex-col">
            <li className="border border-dotted p-1">- UK common entrance preparation</li>
            <li className="border border-dotted p-1">- GCSE, A-Level, IB Tutoring for most subjects and examination boards</li>
            <li className="border border-dotted p-1">- Foundation course university tutoring</li>
            <li className="border border-dotted p-1 h-8">    </li>
          </ul>
        </div>

        <div className="bg-logo/30">
          <h4 className="text-center border border-dotted p-1">University applications</h4>
          <ul className="text-sm">
            <li className="border border-dotted p-1">- UCAS Dentistry and Medicine consultation and advice</li>
            <li className="border border-dotted p-1">- Intensive BMAT and UCAT tuition</li>
            <li className="border border-dotted p-1">- Personal Statement Courses</li>
            <li className="border border-dotted p-1">- Interview Preparation Tuition & Intensive Interview Masterclass</li>
          </ul>
        </div>
      </div>


      <h3 className="text-xl py-4 font-normal text-logo">OUR STRENGTHS</h3>
      <div>
        <ul className="text-sm grid grid-cols-4 grid-flow-row gap-3">
          <li className="border rounded-md p-5 flex flex-col justify-center gap-5">
            <h5 className="font-normal text-center text-base">Monthly report cards</h5>
            <p>
              - we continuously monitor our students' progress and identify gaps
            </p>
          </li>
          <li className="border rounded-md p-5 flex flex-col justify-center gap-5">
            <h5 className="font-normal text-center text-base">In-depth analysis</h5>
            <p>
              - on past results prior to any planning in order to tailor every student's needs
            </p>
          </li>
          <li className="border rounded-md p-5 flex flex-col justify-center gap-5">
            <h5 className="font-normal text-center text-base">Professional tutors</h5>
            <p>
              - all subjects will be taught by experts in their fields
            </p>
          </li>
          <li className="border rounded-md p-5 flex flex-col justify-center gap-5">
            <h5 className="font-normal text-center text-base">Regular tests</h5>
            <p>
              - to familiarise students with potential interview/test questions
            </p> </li>
        </ul>
      </div>


      <hr className="w-full h-2" />
      <div className="flex gap-8">
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold text-logo">7</p>
          <p>Years of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold text-logo">50+</p>
          <p>Experts</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold text-logo">3000+</p>
          <p >Hours of Experience</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-semibold text-logo">5+</p>
          <p>Countries</p>
        </div>
      </div>
      <hr className="w-full h-2" />

      <h3 className="text-xl py-4 font-normal text-logo">OUR SUCCESS STORIES</h3>

      <div className="flex justify-between gap-3">
        {tutoringData.map((item) => (
          <div key={item.id} className="border rounded-md flex flex-col items-center text-center">
            <Image src={item.image} alt={item.subject} width={200}></Image>
            <div className="p-3">
            <p>{item.subject}</p>
            <p>{item.university}</p>
            <p>Class of {item.year}</p>
            </div>
          </div>
        )
        )}
      </div>


      {/* Testimonials */}
      <div className="flex gap-8 italic text-xs py-10">
        <p>"I got the offer from Queen Marys! I am so happy and I cannot have done it without you. Thank you so much."</p>
        <p>"I am currently sitting on a UCL offer. Thank you so much for your great advice and help, without it I think I would have struggled a lot."</p>
        <p>"I did two foundation years. First year without Michael, I failed. Second year with him, I passed."</p>
      </div>
      
      <div><span className="font-medium hover:underline underline-offset-4"><Link href={"/contact"}>Contact Us</Link></span> to find out more!</div>

    </div >
  )
}

export default page