import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (

    <div className='flex flex-col  sm:flex-row border border-gray-400'>
    
        {/* Hero Section for left side */}
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                    <p className='font-semibold text-sm md:text-base'>OUR BESTSELLERS</p>
                </div>
                <h1 className='prata-regular text-3xl'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-0.5 bg-[#414141]'></p>
                </div>
            </div>
        </div>

        {/* Hero Section for right side */}

        <img className='w-full sm:w-1/2' src={assets.hero_img} alt="" />

    </div>
  )
}

export default Hero