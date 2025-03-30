import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>

        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm p-10'>
            <div>
                <img className='w-32 mb-5' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe aperiam fuga, sunt porro optio, in laborum pariatur rem doloremque iure ipsum quas, velit error perferendis. Libero amet expedita perspiciatis molestias.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi in quibusdam repellat perspiciatis, ius</p>
            </div>

            <div>
                <p className='text-xl font-semibold'>COMPANY</p>
                <ul className='flex flex-col mt-5 text-gray-500 gap-2'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl mb-5 font-semibold'>GET IN TOUCH</p>
                <ul className='flex flex-col text-gray-500 gap-2'>
                    <li>+91 8909529254</li>
                    <li>contact@foreveryou.com</li>
                </ul>
            </div>
        </div>
        <div className='p-6'> 
            <hr />
            <p className='text-center font-semibold text-sm py-4'>Copyright 2025@ forever.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer