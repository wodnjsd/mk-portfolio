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

const page = () => {
  const { register, trigger, handleSubmit, formState: { errors } } = useForm<FormData>()
  const onSubmit: SubmitHandler<FormData> = data => console.log(data);
  // const onSubmit = async (e: any) => {
  //   const isValid = await trigger()
  //   if (!isValid) {
  //     e.preventDefault()
  //   }
  // }


  return (
    <div className='max-w-6xl flex flex-col md:flex-row gap-10 justify-between md:items-center items-start py-20 mx-10 sm:mx-20'>
      <div>
        <h1 className='text-5xl font-montserrat mb-10'>Get in touch</h1>
        <div className='flex gap-3 text-xl py-5'>
          <button className='p-1 rounded-lg transform hover:scale-125'> <a><BsInstagram /></a></button>
          <button className='p-1 rounded-lg transform hover:scale-125'> <a><BsWhatsapp /></a></button>
          <button className='p-1 rounded-lg transform hover:scale-125'> <a><SiKakaotalk /></a></button>
        </div>
        <a href= "mailto: contactkimdental@gmail.com" className='py-10 underline underline-offset-2'> contactkimdental@gmail.com</a>
        <div className='mt-5'><span className='text-sm'>You can find me working at:</span><br/>Westbury Dental Care<br />75 Kingston Rd, <br/>New Malden, <br/> KT3 3PB</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
        <label>Name</label>
        <input {...register("name", { required: true, maxLength: 40 })} type="text" placeholder='Full Name' />
        {errors.name && (
          <p className="mt-1 text-red-400">
            {errors.name.type === "required" && "This field is required."}
            {errors.name.type === "maxLength" && "Max length exceeded (40 char)"}

          </p>
        )}
        <label>Email</label>
        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} type="text" placeholder='Email' />
        {errors.email && (
          <p className="mt-1 text-red-400">
            {errors.email.type === "required" && "This field is required."}
            {errors.email.type === "pattern" && "Invalid email address."}

          </p>
        )}
        <label>Phone no.</label>
        <input {...register("phone")} type="tel" placeholder='Phone no. (optional)' />
        <label className='py-3'>Message</label>
        <textarea {...register("message", { maxLength: 2000 })} rows={4} cols={50} placeholder='Message' />
        {errors.message && (
          <p className="mt-1 text-red-400">
            {errors.message.type === "maxLength" && "Max length exceeded (2000 char)"}
          </p>
        )}
        <button type="submit" className="border p-1 rounded-md">Submit</button>
      </form>
    </div>
  )
}

export default page