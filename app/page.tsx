import Image from 'next/image'
import Link from 'next/link'
import face3 from '@/public/assets/face-colour.png'
import image2 from '@/public/assets/working.png'
import image3 from '@/public/assets/friendly.png'
import patient from '@/public/assets/patients.jpg'
import student from '@/public/assets/students.jpg'
import testimonials from '../data/testimonials'
import ReviewCarousel from '@/components/ReviewCarousel'

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className='relative pt-10 flex justify-start bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-800'>
        <div className='p-8 sm:p-10 lg:p-16 xl:px-28 text-center flex flex-col gap-16 justify-center sm:w-3/5 z-10'>
          <div className='text-base xl:text-lg text-logo font-roboto font-thin'>
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

      {/* Testimonials */}
      <div className='w-full h-44 bg-neutral-800 p-10 flex justify-center items-center md:hidden z-10'>
        <ReviewCarousel />
      </div>
      <div className='bg-neutral-800 hidden md:flex gap-7 text-xs italic px-10 py-16'>
        {testimonials.map((item) => (
          <div key={item.id}>
            <p>"{item.content}"</p>
            <p className='pt-1'>- Google Review</p>
          </div>)
        )}
      </div>

      {/* Links */}
      <div className='flex flex-col xs:flex-row w-full z-30 sm:text-lg'>
        <div className='flex relative justify-center items-center xs:w-1/2'>
          <Link href={"/portfolio"}>
            <div className='absolute w-full h-full z-30 flex items-center justify-center bg-logoDark text-center text-white opacity-0 transition duration-500 hover:opacity-90'>
              FOR PATIENTS
            </div>
            <Image src={patient} alt="image3" />
          </Link>
        </div>
        <div className='flex relative justify-center items-center xs:w-1/2'>
          <Link href={'/tutoring'}>
            <div className='absolute w-full h-full z-30 flex items-center justify-center bg-logoDark text-center text-white opacity-0 transition duration-500 hover:opacity-90'>
              <p>FOR STUDENTS</p>
            </div>
            <Image src={student} alt="image4" />
          </Link>
        </div>
      </div>

      {/* About */}
      <h1 className='w-screen bg-neutral-700 text-3xl xl:text-4xl text-center font-montserrat py-16 sm:py-20 font-normal'>
        ABOUT
      </h1>
      <div className='py-12 sm:py-20 lg:py-0 xs:px-8 sm:px-20 lg:px-0 relative text-neutral-50  text-sm xl:text-base'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='w-1/2 hidden lg:inline'>
            <Image src={image2} alt="image2" className='w-full'/>
          </div>
          <div className='md:w-1/2 px-8 lg:px-12 xl:px-20 flex flex-col gap-4 xl:gap-8 justify-center items-center'>
            <p>Dr. Kim was educated in London and graduated from King's College London with his bachelor of dental surgery degree.
              Dr. Kim has a lot of experience in general dentistry. His particular interest is in cosmetic dentistry and endodontics. In these fields, Dr. Kim has trained under excellent specialists and continues to learning to improve his quality of care to his patients.
              He takes pride in his work and would spend time reading and attending extra courses to hone his skillset. </p>
            <p> He is currently a member of the Joint Council for Cosmetic Practioners and a visiting guest lecturer in many different institutes in South Korea
              - teaching different techniques of learning and mentoring aspiring medics or dentists.
            </p>
            <p>
              Kim tries to keep his practice as friendly as possible and enjoys having conversations with his patients about anything. He is straightforward,
              no-nonsense approach to dentistry and is a firm believer in concept of doing it right first time and strongly feels that there is no substitute
              for quality. When it comes to dental work, he is always professional to both his community and his colleagues.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row pt-4 lg:pt-0'>
          <div className='md:w-1/2 px-8 lg:px-12 xl:px-20 flex flex-col gap-4 xl:gap-8 justify-center items-center'>
            <p> Outside of dental hours, Kim is a husband and a tutor to many students. Dr. Kim has a lot of experience teaching younger students in Biology,
              UCAT and with dental or medical university interviews. He enjoys reading books, collects watches and loves sports cars.</p>
            <p>His private mentoring and 'KimAcademy's Medicine Dentistry masterclass' is one of the leading courses of its type. The course has successfully taught over
              500 students worldwide since its inception in 2018. The benefits of his mentoring and masterclasses can be found <Link href="/tutoring" className='underline underline-offset-2 hover:font-semibold'>here</Link>.</p>
          </div>
          <div className='hidden lg:inline w-1/2'>
            <Image src={image3} alt="image3" className='w-full'/>
          </div>
        </div>
      </div>
      <div className='flex flex-col xs:flex-row w-full lg:hidden'>
        <Image src={image2} alt="image2" className='w-full xs:w-1/2' />
        <Image src={image3} alt="image3" className='w-full xs:w-1/2' />
      </div>
    </main>
  )
}
