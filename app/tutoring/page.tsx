import Link from "next/link"
import Image from "next/image"
import tutoringData from "../../data/tutoring"
import image8 from '../../public/assets/tutoring/8.jpeg'
import { MdOutlineInsertChart } from 'react-icons/md'
import { TbReportSearch, TbBook } from 'react-icons/tb'
import { SlGraduation } from 'react-icons/sl'


type Props = {}

const page = (props: Props) => {
  return (
    <div className="pt-10 sm:px-20 flex flex-col items-center gap-16 ">
      <h1 className='text-3xl sm:self-center font-montserrat font-normal'>KIM ACADEMY</h1>
      <hr className='w-full h-2' />
      <div className="flex justify-between gap-5">
        <div className="flex flex-col justify-center flex-1 px-5">
          <h4 className="text-2xl py-5">Private Tuition</h4>
          <p className="text-sm">Michael is also the founder of Kim Academy, which specialises in private tuition to prepare students for GCSE and A-Levels,
            as well as preparation for medical and dental university applications.</p>
        </div>
        <Image src={image8} alt="students" className="w-1/2" />
      </div>

      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl py-8 font-normal text-logo">OUR SERVICES</h3>

        <div className="flex gap-5">
          <div className="text-center rounded-md">
            <h4 className="py-4 bg-logo/30 text-logo">Exam preparation</h4>
            <ul className="h-56 text-sm flex flex-col gap-4 p-7 bg-logo/50">
              <li>UK common entrance preparation</li>
              <li>GCSE, A-Level, IB Tutoring for most subjects and examination boards</li>
              <li>Foundation course university tutoring</li>
            </ul>
          </div>

          <div className="text-center rounded-md">
            <h4 className="py-4 bg-logo/30 text-logo">University applications</h4>
            <ul className="h-56 text-sm flex flex-col gap-4 p-7 bg-logo/50">
              <li>UCAS Dentistry and Medicine consultation and advice</li>
              <li>Intensive BMAT and UCAT tuition</li>
              <li>Personal Statement Courses</li>
              <li>Interview Preparation Tuition & Intensive Interview Masterclass</li>
            </ul>
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl py-8 font-normal text-logo">OUR STRENGTHS</h3>
        <div>
          <ul className="text-sm grid grid-cols-4 grid-flow-row gap-3">
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <MdOutlineInsertChart className="text-2xl m-3" />
              <h5 className="font-normal">Monthly report cards</h5>
              <p className="text-center">
                We continuously monitor our students' progress and identify gaps
              </p>
            </li>
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <TbReportSearch className="text-2xl m-3" />
              <h5 className="font-normal">In-depth analysis</h5>
              <p>
                On past results prior to any planning in order to tailor every student's needs
              </p>
            </li>
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <SlGraduation className="text-2xl m-3" />
              <h5 className="font-normal">Professional tutors</h5>
              <p>
                All subjects are taught by experts in their fields
              </p>
            </li>
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <TbBook className="text-2xl m-3" />
              <h5 className="font-normal">Regular tests</h5>
              <p>
                To familiarise students with potential interview/test questions
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-screen bg-neutral-800">
        <div className="flex py-16 gap-10 justify-center">
          <div className="flex flex-col items-center gap-3">
            <p className="text-3xl font-normal">7</p>
            <p className="text-sm">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-3xl font-normal">50+</p>
            <p className="text-sm">Experts</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-3xl font-normal">3000+</p>
            <p className="text-sm">Hours of Experience</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-3xl font-normal">5+</p>
            <p className="text-sm">Countries</p>
          </div>
        </div>
      </div>


      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl py-8 font-normal text-logo">OUR SUCCESS STORIES</h3>
        <div className="flex justify-between gap-3 text-xs">
          {tutoringData.map((item) => (
            <div key={item.id} className="border rounded-md flex flex-col items-center text-center">
              <Image src={item.image} alt={item.subject} width={200}></Image>
              <div className="p-3">
                <p>{item.subject}</p>
                <p className="italic">{item.university}</p>
                <p>Class of {item.year}</p>
              </div>
            </div>
          )
          )}
        </div>
      </div>


      {/* Testimonials */}
      <div>
        <div className="flex gap-12 text-xs py-10">
          <div className="flex flex-col items-center gap-5">
            <p>"I got the offer from Queen Marys! I am so happy and I cannot have done it without you. Thank you so much."</p>
            <p className="font-normal text-sm">Name</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>"I am currently sitting on a UCL offer. Thank you so much for your great advice and help, without it I think I would have struggled a lot."</p>
            <p className="font-normal text-sm">Name</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <p>"I did two foundation years. First year without Michael, I failed. Second year with him, I passed."</p>
            <p className="font-normal text-sm">Name</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="w-screen bg-logo/50 text-neutral-800 text-lg font-normal flex justify-center items-center py-16">
        <Link href={"/contact"} className="hover:underline underline-offset-4">CONTACT US</Link> TO FIND OUT MORE</div>

    </div >
  )
}

export default page