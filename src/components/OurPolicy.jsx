import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex items-center justify-around gap-12 mt-16 flex-col sm:flex-row sm:gap-2'>
        <div className='flex flex-col gap-2 items-center'>
            <img className='w-12' src={assets.exchange_icon} alt="" />
            <p className='font-bold text-lg'>Easy Exchange Policy</p>
            <p className='text-gray-500 font-semibold'>We offer hassle free exchange policy</p>
        </div>
            <div className='flex flex-col gap-2 items-center'>
            <img className='w-12' src={assets.quality_icon} alt="" />
            <p className='font-bold text-lg'>7 Days return policy</p>
            <p className='text-gray-500 font-semibold'>We provide 7 days free return policy</p>
        </div>
            <div className='flex flex-col items-center gap-2'>
            <img className='w-12' src={assets.support_img} alt="" />
            <p className='font-bold text-lg'>Best customer support</p>
            <p className='text-gray-500 font-semibold'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy