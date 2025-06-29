"use client";
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox';
const RecentlyAdded = () => {
    const [products, setProducts]= useState([]);
    const getproduct = async () => {
        const response = await fetch("https://fakestoreapi.in/api/products?limit=5")
        const data = await response.json()
        setProducts(data.products)
        // console.log(data)
    } ;
//    getproduct()
    useEffect (() => {
       getproduct()
    },[])
  return (
    <div className='bg-gray-100 p-3'>
        <Container>
            <h1 className='text-center font-bold text-3xl '>Recently Added Products</h1>
            <h2 className='text-center text-3xl font-bold'>Client-side (Products) Rendering</h2>
            <div className='grid grid-cols-5 gap-1'>
             {
              products.map((item) => {
                // console.log(item.id);
                return <ProductBox key={item.id} product={item}  />
              })
             }
              
            </div>
        </Container>
    </div>
  )
}

export default RecentlyAdded
