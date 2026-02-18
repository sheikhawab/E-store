import React from 'react'
import { getProducts } from './library'
import ProductBox from '@/Components/ProductBox'


const StorePage = () => {
  return (
      <ProductListing />  
  )
}
export default StorePage



export const ProductListing = async () => {
  const data = await getProducts();
  console.log(data, "awab kese ho 3");
  return <div className='col-span-4 grid grid-cols-3'>
    {
      data.map(
        (d) => <ProductBox product={d} key={"product-" + d.id} />)
    }
  </div>
} 