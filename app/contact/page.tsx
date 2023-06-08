"use client"
import { useForm, SubmitHandler } from 'react-hook-form'
import { SiKakaotalk } from 'react-icons/si'
import { BsInstagram, BsWhatsapp } from 'react-icons/bs'

type FormData = {
  name: string,
  email: string,
  phone: string,
  message: string
}

const phoneNumber = process.env.PHONE_NUMBER

const page = () => {
  const { register, trigger, handleSubmit, formState: { errors } } = useForm<FormData>()
  // const onSubmit: SubmitHandler<FormData> = data => console.log(data);
  const onSubmit = async (e: any) => {
    const isValid = await trigger()
    if (!isValid) {
      e.preventDefault()
    }
  }

const whatsappUrl = `https://wa.me/${phoneNumber}`


  return (
    <div className='flex flex-col '>
      <h1 className='w-screen text-3xl xl:text-4xl pb-20 pt-4 bg-neutral-700 text-center font-normal'>CONTACT</h1>
      <div className='px-8 sm:px-20 flex flex-col md:flex-row justify-around gap-6 items-start md:items-center py-16 md:py-36'>
        <div className='md:px-5'>
          <h1 className='text-3xl sm:text-5xl font-montserrat sm:mb-10'>Get in touch</h1>
          {/* Social Media Links */}
          <div className='flex gap-3 text-2xl py-5'>
            <button className='p-1 rounded-lg transform hover:scale-125'>
              <a href="https://www.instagram.com/dr.kimdental/" target="_blank"><BsInstagram /></a>
            </button>
            <button className='p-1 rounded-lg transform hover:scale-125'>
              <a href={whatsappUrl} target="_blank"><BsWhatsapp /></a>
            </button>
            <button className='p-1 rounded-lg transform hover:scale-125'>
              <a href="http://pf.kakao.com/_dSxlgxj/chat" target="_blank"><SiKakaotalk /></a>
            </button>
          </div>

          {/* Email */}
          <a href="mailto:contactkimdental@gmail.com" className='py-10 underline underline-offset-2'> contactkimdental@gmail.com</a>
          <div className='py-5'><span className='text-sm'>You can find me working at:</span><br />Westbury Dental Care<br />75 Kingston Rd, <br />New Malden, <br /> KT3 3PB</div>
        </div>

        {/* Form */}
        <form
          target="_blank"
          action="https://formsubmit.co/d2f537b53dcc03feed1c900d0b6229fc"
          method="POST"
          onSubmit={onSubmit}
          className='py-5 md:py-0 flex flex-col gap-2 w-full md:w-1/2'>
          <div className='flex flex-col'>
            <label>Name</label>
            <input {...register("name", { required: true, maxLength: 40 })} type="text" placeholder='Full Name' className='w-full' />
            {errors.name && (
              <p className="text-xs text-red-400">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length exceeded (40 char)"}
              </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label>Email</label>
            <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" placeholder='Email' />
            {errors.email && (
              <p className="text-xs text-red-400">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </div>
          <div className='flex flex-col'>
            <label>Phone no.</label>
            <input {...register("phone")} type="tel" placeholder='Phone no. (optional)' />
          </div>
          <div className='flex flex-col'>
            <label className='py-3'>Message</label>
            <textarea {...register("message", { maxLength: 2000 })} rows={5} cols={50} placeholder='Message' />
            {errors.message && (
              <p className="text-xs text-red-400">
                {errors.message.type === "maxLength" && "Max length exceeded (2000 char)"}
              </p>
            )}
          </div>
          <button type="submit" className="border p-1 rounded-md">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default page