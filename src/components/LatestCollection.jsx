import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const  {products} = useContext(ShopContext);
    const [LatestProducts, setLatestProducts] = useState([]);

    useEffect(() =>{
      setLatestProducts(products.slice(0, 10));
    },[])

  return (
    <div className='mt-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'COLLECTION'} />
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium accusamus voluptatibus beatae odit nesciunt, velit non fugiat</p>
      </div>

{/* {rendering products} */}

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 '>
      {
        LatestProducts.map((item, index)=>(
          <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>

        ))
      }
    </div>

    </div>
  )
}

export default LatestCollection