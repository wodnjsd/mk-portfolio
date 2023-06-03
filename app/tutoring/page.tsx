import Link from "next/link"
import Image from "next/image"
import tutoringData from "../../data/tutoring"
import student from '../../public/assets/student.jpg'
import { MdOutlineInsertChart } from 'react-icons/md'
import { TbReportSearch, TbBook } from 'react-icons/tb'
import { SlGraduation } from 'react-icons/sl'


type Props = {}

const page = (props: Props) => {
  return (
    <div className="px-6 sm:px-20 flex flex-col items-center gap-16 ">
      <h1 className='w-screen text-3xl pb-20 sm:pt-4 bg-neutral-700 text-center font-montserrat font-normal'>KIM ACADEMY</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:px-5">
        <div className="flex flex-col justify-center flex-1 pr-3">
          <h4 className="text-2xl py-5">Private Tuition</h4>
          <p className="text-sm">Michael is also the founder of Kim Academy, which specialises in private tuition to prepare students for GCSE and A-Levels,
            as well as preparation for medical and dental university applications.</p>
        </div>
        <Image src={student} alt="students" className="w-full rounded-md md:w-1/2" />
      </div>

{/* Services */}
      <div className="w-full flex flex-col items-center">
        <h3 className="text-xl py-8 font-normal text-logo">OUR SERVICES</h3>
        <div className="flex flex-col gap-5 md:flex-row">
          <div className="text-center rounded-lg">
            <h4 className="flex items-center justify-center h-16 bg-logo/30 text-logo">Exam preparation</h4>
            <ul className="h-64 xs:h-56 text-sm flex flex-col gap-4 p-7 bg-logo/50">
              <li>UK common entrance preparation</li>
              <li>GCSE, A-Level, IB Tutoring for most subjects and examination boards</li>
              <li>Foundation course university tutoring</li>
            </ul>
          </div>

          <div className="text-center rounded-lg">
            <h4 className="flex items-center justify-center h-16 bg-logo/30 text-logo">University applications</h4>
            <ul className="h-80 xs:h-56 text-sm flex flex-col gap-4 p-7 bg-logo/50">
              <li>UCAS Dentistry and Medicine consultation and advice</li>
              <li>Intensive BMAT and UCAT tuition</li>
              <li>Personal Statement Courses</li>
              <li>Interview Preparation Tuition & Intensive Interview Masterclass</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <div className="w-full flex flex-col items-center pb-8">
        <h3 className="text-xl py-8 font-normal text-logo">OUR STRENGTHS</h3>
        <div>
          <ul className="text-sm grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 grid-flow-row gap-3">
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <MdOutlineInsertChart className="text-2xl m-3" />
              <h5 className="font-normal">Regular Feedbacks</h5>
              <p className="text-center">
                We continuously monitor our students' progress and identify gaps
              </p>
            </li>
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <TbReportSearch className="text-2xl m-3" />
              <h5 className="font-normal">In-depth analysis</h5>
              <p className="py-2">
                On past results prior to any planning in order to tailor every student's needs
              </p>
            </li>
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <SlGraduation className="text-2xl m-3" />
              <h5 className="font-normal">Professional tutors</h5>
              <p className="py-2">
                All subjects are taught by experts in their fields
              </p>
            </li>
            <li className="border rounded-md p-5 flex flex-col items-center text-center gap-3">
              <TbBook className="text-2xl m-3" />
              <h5 className="font-normal">Regular tests</h5>
              <p className="py-2">
                To familiarise students with potential interview/test questions
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Stats */}
      <div className="w-screen bg-neutral-800">
        <div className="md:flex grid grid-cols-2 gap-5 py-16 md:gap-12 justify-center items-center px-5">
          <div className="flex flex-col text-center items-center gap-3">
            <p className="text-3xl font-normal">7</p>
            <p className="text-sm">Years of Experience</p>
          </div>
          <div className="flex flex-col text-center items-center gap-3">
            <p className="text-3xl font-normal">3000+</p>
            <p className="text-sm">Hours of Experience</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-3xl font-normal">50+</p>
            <p className="text-sm">Experts</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-3xl font-normal">5+</p>
            <p className="text-sm">Countries</p>
          </div>
        </div>
      </div>

      {/* Success stories */}
      <div className="w-full flex flex-col items-center sm:pb-4">
        <h3 className="text-xl py-8 font-normal text-logo">OUR SUCCESS STORIES</h3>
        <div className="grid grid-cols-2 xs:grid-cols-3 md:flex justify-between gap-3 text-xs">
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
      <div className="w-screen translate-y-16 sm:translate-y-0 bg-neutral-700 sm:bg-neutral-600 md:w-full px-12 sm:px-0">
        <div className="flex flex-col sm:flex-row gap-12 text-xs py-20 md:py-0 md:pb-4 text-center">
          <div className="flex flex-col items-center gap-3">
            <p>"I got the offer from Queen Marys! I am so happy and I cannot have done it without you. Thank you so much."</p>
            <p className="font-normal text-sm md:py-4">Name</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p>"I am currently sitting on a UCL offer. Thank you so much for your great advice and help, without it I think I would have struggled a lot."</p>
            <p className="font-normal text-sm md:py-4">Name</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p>"I did two foundation years. First year without Michael, I failed. Second year with him, I passed."</p>
            <p className="font-normal text-sm md:py-4">Name</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="w-screen bg-logo/50 text-neutral-800 text-lg font-normal flex-col sm:flex-row flex justify-center items-center py-20 px-10 ">
        <Link href={"/contact"} className="hover:underline underline-offset-4">CONTACT US
        </Link>
        <span className="ml-2">TO FIND OUT MORE</span>
      </div>
    </div >
  )
}

export default page