import React from 'react'
import image1 from '@/public/assets/about-teaching.jpeg'
import image2 from '@/public/assets/working.png'
import image3 from '@/public/assets/friendly.png'
import social from '@/public/assets/social.jpeg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <h1 className='w-screen bg-neutral-700 text-3xl xl:text-4xl text-center font-montserrat pb-20 pt-4 font-normal'>
        ABOUT
      </h1>
      <div className='py-12 sm:py-20 lg:py-0 xs:px-6 sm:px-16 lg:px-0 relative text-neutral-50'>
        <div className='flex flex-col items-center md:flex-row'>
          <div className='w-1/2 hidden lg:inline'>
            <Image src={image2} alt="image2" className='w-full' />
          </div>
          <div className='lg:w-1/2 px-3 xl:px-20 flex flex-col gap-4 xl:gap-8 justify-center items-center'>
            <p>Dr. Kim was educated in London and graduated from King's College London with his bachelor of dental surgery degree.
              Dr. Kim has a lot of experience in general dentistry. His particular interest is in cosmetic dentistry and endodontics. In these fields, Dr. Kim has trained under excellent specialists and continues to learning to improve his quality of care to his patients.
              He takes pride in his work and would spend time reading and attending extra courses to hone his skillset. </p>
            <p> He is currently a member of the Joint Council for Cosmetic Practitioners and a visiting guest lecturer in many different institutes in South Korea
              - teaching different techniques of learning and mentoring aspiring medics or dentists.
            </p>
            <p> In addition, he is currently a clinical tutor at various London universities including St.George's and King's College London where he teaches restorative dentistry to current dental professionals.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row pt-4 lg:pt-0'>
          <div className='relative lg:w-1/2 px-3 lg:px-12 xl:px-20 flex flex-col gap-4 xl:gap-8 justify-center items-center'>
          <p>
              Dr. Kim tries to keep his practice friendly and enjoys having conversations with his patients about anything. He has a straightforward,
              no-nonsense approach to dentistry, firmly believing in doing it right the first time and that there is no substitute
              for quality. When it comes to dental work, he is always professional to both his community and his colleagues.
            </p>
            <p> Outside of dental hours, Dr. Kim is a husband and a tutor to many students. He has extensive experience teaching younger students in Biology,
              UKCAT and with dental/medical university interviews. He enjoys reading books, collects watches and loves sports cars.</p>
            <p>His private mentoring and 'KimAcademy's Medicine Dentistry masterclass' is one of the leading courses of its type. The course has successfully taught over
              500 students worldwide since its inception in 2018. The benefits of his mentoring and masterclasses can be found <Link href="/tutoring" className='underline underline-offset-2 hover:font-semibold'>here</Link>.</p>
            {/* <div className='hidden xl:block bottom-0 left-0 w-full pt-4'>
              <Image src={social} alt="social image"/>
            </div> */}
          </div>
          <div className='hidden lg:inline w-1/2'>
            <Image src={image1} alt="image1" className='w-full' />
          </div>
        </div>
      </div>
      <div className='flex flex-col xs:flex-row w-full lg:hidden'>
      <Image src={image2} alt="image2" className='w-full xs:w-1/2' />
        {/* <Image src={image2} alt="image2" className='w-full xs:w-1/2' /> */}
        <Image src={image1} alt="image1" className='w-full xs:w-1/2' />
      </div>
    </div>
  )
}

export default page