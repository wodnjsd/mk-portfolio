import Link from "next/link"

type Props = {}

const page = (props: Props) => {
  return (
    <div className="m-10 sm:m-20 flex flex-col items-start sm:items-center gap-12 ">
      <h1 className='text-3xl sm:self-center font-montserrat sm:py-50 font-normal'>KIM ACADEMY</h1>
      <hr className='w-full h-2' />
      <p>Michael is also the founder of Kim Academy, which specialises in private tuition to prepare students for GCSE and A-Levels, as well as preparation for medical and dental applications.</p>
      <div className="flex">
        <div className="p-2 w-1/2 " >
          <h3 className="text-lg py-4 font-normal">OUR SERVICES</h3>
          <ul className="text-sm flex flex-col gap-3">
            <li>- UK common entrance preparation</li>
            <li>- GCSE, A-Level, IB Tutoring for most subjects and examination boards</li>
            <li>- Foundation course university tutoring</li>
            <li>- UCAS Dentistry and Medicine consultation and advice</li>
            <li>- Intensive BMAT and UCAT tuition</li>
            <li>- Personal Statement Courses</li>
            <li>- Interview Preparation Tuition & Intensive Interview Masterclass</li>
            <li>- Networking with successful doctors and dentists </li>
          </ul>
        </div>
        <div className="p-2 w-1/2">
          <h3 className="text-lg py-4 font-normal">OUR STRENGTHS</h3>
          <ul className="text-sm flex flex-col gap-3">
            <li>- With montly report cards given out to parents, guardians and students, we continuously monitor our students' progress and identify gaps</li>
            <li>- In-depth analysis on past results are done prior to any planning in order to tailor every student's needs</li>
            <li>- All subjects will be taught by our professional tutors who specialise in their respective fields</li>
            <li>- We test our students regularly with our question bank to familiarise them with potential interview/test questions</li>
            <li>- Our Personal Statement counselling service guides students to position themselves as a more prospective candidate</li>
          </ul>
        </div>
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
      {/* 
      <div>
        <h3>Our Recent Track Record</h3>
        <div>
          <p>100%</p>
          <p>Offer</p>
        </div>
        <p>20+</p>
        <p>Students</p>
      </div>
      <div>
        <p>2</p>
        <p>Years</p>
      </div> */}
      {/* Testimonials */}
      <div className="flex gap-8 italic text-xs">
        <p>"I got the offer from Queen Marys! I am so happy and I cannot have done it without you. Thank you so much."</p>
        <p>"I am currently sitting on a UCL offer. Thank you so much for your great advice and help, without it I think I would have struggled a lot."</p>
      </div>
      <div><span className="font-medium hover:underline underline-offset-4"><Link href={"/contact"}>Contact Us</Link></span> to find out more!</div>
      {/* <p>To find out more, please check out <span>      <a href="https://www.kimacademy.co.uk/home" target="_blank" >here:</a></span></p> */}
    </div >
  )
}

export default page