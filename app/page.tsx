import Image from 'next/image'
import Link from 'next/link'
import face3 from '@/public/assets/face-colour.png'
import patient from '@/public/assets/patients.jpg'
import student from '@/public/assets/students.jpg'
import testimonials from '../data/testimonials'
import ReviewCarousel from '@/components/ReviewCarousel'
import { AiOutlineCheck } from 'react-icons/ai'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-800 lg:hidden pt-36 pb-52 w-screen text-center text-5xl font-cormorant'>KIM DENTAL</div>
      <div className='pt-10 bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-800'>
        <div className='relative flex justify-start'>
          <div className='p-8 sm:p-10 lg:p-16 xl:px-28 text-center flex flex-col gap-16 justify-center sm:w-3/5 z-10'>
            <div className='text-base xl:text-lg text-logo font-roboto font-light'>
              <p className='leading-snug'>
                As a clinician and tutor, I believe that there is no end to education. It is not that you read a book, pass an examination, and finish with education.
              </p>
              <p className='py-3 leading-snug'>
                Life as a whole - from the moment you are born to the moment you die - is a learning process.
              </p>
              <p className='leading-snug'>
                My interest lies in caring for patients' long-term health through curing and preventing diseases with education.
              </p>
            </div>
            <p className='text-left md:text-center font-allura text-4xl md:text-5xl text-logo'>Dr. Michael Kim</p>
          </div>
          <div className='w-4/5 hidden xs:inline absolute md:relative right-0 brightness-75 opacity-50 md:opacity-75 md:w-1/2'>
            <Image src={face3} alt="image1" />
          </div>
        </div>

      </div>

      {/* Testimonials */}
      <div className='w-full h-44 bg-neutral-800 p-10 flex justify-center items-center md:hidden z-10'>
        <ReviewCarousel />
      </div>
      <div className='bg-neutral-800 hidden md:flex gap-7 text-xs italic px-10 py-16'>
        {testimonials.map((item) => item.id < 5 && (
          <div key={item.id}>
            <a href={item.link} target="_blank">
              <p>"{item.content}"</p>
              <p className='pt-1'>- Google Review</p>
            </a>
          </div>)
        )}
      </div>

      {/* Links */}
      <div className='flex flex-col xsm:flex-row w-full z-30 sm:text-lg'>
        <div className='flex relative justify-center items-center xsm:w-1/2'>
          <Link href={"/portfolio"}>
            <div className='absolute w-full h-full z-30 flex items-center justify-center bg-logoDark text-center text-white opacity-0 transition duration-500 hover:opacity-90'>
              FOR PATIENTS
            </div>
            <Image src={patient} alt="image3" />
          </Link>
        </div>
        <div className='flex relative justify-center items-center xsm:w-1/2'>
          <Link href={'/tutoring'}>
            <div className='absolute w-full h-full z-30 flex items-center justify-center bg-logoDark text-center text-white opacity-0 transition duration-500 hover:opacity-90'>
              <p>FOR STUDENTS</p>
            </div>
            <Image src={student} alt="image4" />
          </Link>
        </div>
      </div>

      {/* Why choose */}
      <div className='bg-neutral-800'>
        <h1 className='w-screen text-3xl xl:text-4xl text-center font-montserrat pt-16'>
          WHY CHOOSE DR KIM?
        </h1>
        <div className='flex justify-center items-center px-8 sm:px-16 py-12'>
          <div className='flex flex-col gap-2 text-logo/80'>
            <p className='flex gap-1'><AiOutlineCheck className='text-xl' />Friendly and approachable</p>
            <p className='flex gap-1'><AiOutlineCheck className='text-xl' />Use of latest technologies and techniques</p>
            <p className='flex gap-1'><AiOutlineCheck className='text-xl' />Bespoke treatment plans tailored to suit your requirements</p>
            <p className='flex gap-1'><AiOutlineCheck className='text-xl' />Able to provide exceptional long-lasting results</p>
            <p className='flex gap-1'><AiOutlineCheck className='text-xl' />Closely works with specialists to provide safe and reliable treatments</p>
            <p className='flex gap-1'><AiOutlineCheck className='text-xl' />Recommended by many patients' friends and family</p>
          </div>

        </div>
      </div>
      <div className="w-screen bg-logo/50 text-neutral-800 text-xl font-normal xl:font-light xl:text-3xl flex-col sm:flex-row flex justify-center items-center py-20 px-10 ">
        <Link href={"/contact"} className="hover:underline underline-offset-4">CONTACT US
        </Link>
        <span className="ml-2 text-center">TO FIND OUT MORE</span>
      </div>
    </main>
  )
}
