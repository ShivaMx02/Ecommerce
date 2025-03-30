import {React, useContext, useState} from 'react'
import {assets} from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const {setShowSearch} = useContext(ShopContext);

  return (
    <div className='flex items-center justify-between py-8 text-center font-semibold p-10'>
        <Link to={'/'}><img src={assets.logo} className='w-36' /></Link>

        <ul className='hidden sm:flex gap-5 text-l text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p >HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p >COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p >ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p >CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
            </NavLink>
        </ul>

        <div className='flex gap-6 items-center'>
            <img onClick={() => {setShowSearch(true)}} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
                <img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                <div className='group-hover:block hidden absolute right-0 pt-4'>
                    <div className='flex flex-col gap-3 w-36 py-3 px-5 bg-slate-100 text-gray-500 text-sm  roudnded-lg'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 ' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center bg-black text-white rounded-full text-[8px] ' >10</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>

        {/* Sidebar Menu for small screen */}

        <div className={`absolute top-0 right-0 bottom-0 transition-all bg-white overflow-hidden ${visible ? 'w-full' : 'w-0'} `}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex items-center gap-4 py-8 px-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink className='py-3 pl-6 border' onClick={()=>setVisible(false)} to='/'>HOME</NavLink>
                <NavLink className='py-3 pl-6 border' onClick={()=>setVisible(false)} to='/collection'>COLLECTION</NavLink>
                <NavLink className='py-3 pl-6 border' onClick={()=>setVisible(false)} to='/about'>ABOUT</NavLink>
                <NavLink className='py-3 pl-6 border' onClick={()=>setVisible(false)} to='/contact'>CONTACT</NavLink>
            </div>

        </div>
         
    </div>
  )
}

export default Navbar