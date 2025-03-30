import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
const [visible, setVisible] = useState(false)
const location = useLocation()

useEffect(() => {
    if(location.pathname.includes('collection')){
        setVisible(true)
    }
    else{
        setVisible(false)
    }
},[location])

  return showSearch && visible ? ( 
    <div className='px-10'>
        <div className='border-t border-b sm:px-10 px-4 py-4 sm:py-4 bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center gap-4 mr-4 w-2/4'>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} className='outline-1 flex-1 px-4 py-2 rounded-2xl bg-white' type="text" placeholder='search' />
                <img className='w-6' src={assets.search_icon} alt="" />
                <img onClick={() => {setShowSearch(false)}} className='cursor-pointer' src={assets.cross_icon} alt="" />
            </div>
        </div>
    </div>
  ) : null
}

export default SearchBar