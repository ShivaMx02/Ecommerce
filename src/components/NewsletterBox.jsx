import React from 'react'

const NewsletterBox = () => {

    const onSubmitHandler = (e) =>{
        e.preventDefault();
    }

  return (
    <div className='text-center mt-20'>
        <p className='text-2xl font-semibold text-gray-800'>Subscribe now & get 20% off</p>
        <p className='font-medium text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <form onSubmit={onSubmitHandler} className='flex w-full sm:w-1/2 items-center mx-auto gap-3 my-6 pl-6 border'>
            <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter your email' id="" required />
            <button type='submit' className='cursor-pointer text-xs px-3 py-4 bg-gray-800 text-white'>Subscribe Now</button>
        </form>
    </div>
  )
}

export default NewsletterBox