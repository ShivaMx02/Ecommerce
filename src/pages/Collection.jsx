import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/shopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
const{products, search, showSearch} = useContext(ShopContext);

const [showfilter, setShowFilter] = useState(false);
const [filterProducts, setFilterProducts] = useState([]);
const [category, setCategory] = useState([]);
const [subCategory, setSubCategory] = useState([]);
const[sortType, setSortType] =useState('relevant')

const toggleCategory = (e) =>{
  if(category.includes(e.target.value)){
    setCategory(prev=> prev.filter(item=> item !== e.target.value))
  }
else{
  setCategory(prev=> [...prev, e.target.value])
}
}

const toogleSubCategory = (e) =>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
  }
  else{
    setSubCategory(prev => [...prev, e.target.value])
  }
}

const applyFilter =() =>{
  let productsCopy = products.slice();

  if(search && showSearch){
    productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  }

  if(category.length > 0){
    productsCopy = productsCopy.filter(item => category.includes(item.category))
  }
  if(subCategory.length > 0){
    productsCopy = productsCopy.filter(item => subCategory.includes(item.subcategory))
  }
  setFilterProducts(productsCopy)
}

const sortProducts = () =>{
  let fpCopy = filterProducts.slice();
  switch(sortType){
    case 'Low-High':
      setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)));
      break;
    case 'High-Low':
      setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)));
      break;
    default:
      applyFilter()
      break;
  }
}

useEffect(() => {
  applyFilter()
},[category, subCategory, search, showSearch])

useEffect(( )=>{
  sortProducts()
},[sortType])


  return (
  <>
    <div className='flex flex-col sm:flex-row sm:gap-2 gap-6 p-10'>
        <div className='flex flex-col sm:gap-6 gap-4'>
          <div className='flex items-center gap-3'>
            <p onClick={()=>setShowFilter(!showfilter)} className='text-xl font-semibold cursor-pointer'>FILTERS</p>
            <img className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''} `} src={assets.dropdown_icon} alt="" />
          </div>
          <div className={` flex flex-col border text-gray-500 sm:w-[160px] w-full px-4 py-5 ${showfilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-2 text-black font-semibold'>CATEGORIES</p>
            <div>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
              </p>
            </div>
          </div>

          <div className={`border text-gray-500 sm:w-[160px] w-full px-4 py-5 ${showfilter ? '' : 'hidden'} sm:block`}>
            <p className='mb-2 text-black font-semibold'>TYPE</p>
            <div>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Topwear'} onChange={toogleSubCategory}/>Topwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Bottomwear'} onChange={toogleSubCategory}/>Bottomwear
              </p>
              <p className='flex gap-2'>
                <input type="checkbox" value={'Winterwear'} onChange={toogleSubCategory}/>Winterwear
              </p>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='flex flex-col sm:ml-16'>
              <div className='flex items-center mb-4 justify-between text-base  sm:text-2xl'> 
                <Title text1={'ALL'} text2={'COLLECTIONS'} />
                <select onChange={(e) =>setSortType(e.target.value)} className='text-sm p-2 border-2 border-gray-400'>
                  <option value="Relevant">Sort by: Relevant </option>
                  <option value="Low-High">Sort by: Low to High</option>
                  <option value="High-Low">Sort by: High to Low</option>
                </select>
                </div>

                {/* map all products */}

                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                  {
                    filterProducts.map((item, index)=>(
                      <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    )) 
                  }
                </div>
              </div>
            </div>
  </>
    
  )
}

export default Collection