import Image from 'next/image'
import face from '@/public/assets/face.png'
import image2 from '@/public/assets/working.png'
import image3 from '@/public/assets/friendly.png'

export default function Home() {
  return (
    <main className="flex flex-col font-inter">
      <div className='bg-gradient-to-b from-neutral-600 to-neutral-800  pt-20'>
        <Image src={face} alt="image1" className='w-1/2 self-end'></Image>
      </div>
      {/* <div className='px-20 py-10 flex w-full '>
        <div className='basis-1/2 flex justify-center items-center'><button className='bg-logo px-10 py-5'>For Patients</button></div>
        <div><button>For Students</button></div>
      </div> */}
      <h1 className='text-3xl sm:self-center font-montserrat p-10 sm:py-20 font-normal'>ABOUT</h1>
      <hr className='w-full'/>
      <div className='flex'>
        <div className='w-1/2'>
          <Image src={image2} alt="image2" />
        </div>
        <div className='w-1/2 flex flex-col gap-4 justify-center items-center m-10 flex-1 text-sm'>
          <p>Dr. Kim was educated in London and graduated from King's College London with his bachelor of dental surgery degree.
            Kim has a lot of experience in general dentistry, but has a special interest in cosmetic dentistry and endodontics. He takes pride in his work
            and would spend time reading and attending extra courses to hone his skillset.</p>
          <p> He is currently a member of the Joint Council
            for Cosmetic Practioners and a visiting guest lecturer in many different institutes in South Korea - teaching different techniques of learning
            and mentoring aspiring medics or dentists.
          </p>
          <p>
            Kim tries to keep his practice as friendly as possible and enjoys having conversations with his patients about anything. He is straightforward,
            no-nonsense approach to dentistry and is a firm believer in concept of doing it right first time and strongly feels that there is no substitute
            for quality. When it comes to dental work, he is always professional to both his community and his colleagues.
          </p>
        </div>
      </div>

      <div className='flex'>
        <div className='w-1/2 flex flex-col gap-4 justify-center items-center p-20 flex-1 text-sm'>
         
          <p> Outside of dental hours, Kim is a husband and a tutor to many students. Dr. Kim has a lot of experience teaching younger students in Biology,
            UCAT and with dental or medical university interviews. He enjoys reading books, collects watches and loves sports cars.</p>
          <p>His private mentoring and 'KimAcademy's Medicine Dentistry masterclass' is one of the leading courses of its type. The course has successfully taught over
            500 students worldwide since its inception in 2018. The benefits of his mentoring and masterclasses can be found here(link).</p>
        </div>

        <div className='w-1/2'>
          <Image src={image3} alt="image3" />
        </div>
      </div>

    </main>
  )
}
