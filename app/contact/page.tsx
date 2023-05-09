"use client"
import { useForm, SubmitHandler } from 'react-hook-form'

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
    <div>
      <h2 className='text-lg'>Get in touch</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='border rounded-md p-5 flex flex-col gap-3'>
        <label>Name</label>
        <input {...register("name", { required: true, maxLength: 40 })} type="text" placeholder='Name' />
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
        <label>Message</label>
        <textarea {...register("message", { maxLength: 2000 })} rows={4} cols={50} placeholder='Message' />
        {errors.message && (
          <p className="mt-1 text-red-400">
            {errors.message.type === "maxLength" && "Max length exceeded (2000 char)"}
          </p>
        )}
        <button type="submit" className="border p-3 rounded-md">Submit</button>
      </form>
    </div>
  )
}

export default page