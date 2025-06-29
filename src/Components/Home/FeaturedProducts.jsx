import React from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox';

const FeaturedProducts = async () => {
    const response = await fetch('https://fakestoreapi.in/api/products?limit=5');
    const data = await response.json();
    // console.log(`Products Data ${data.products}`)// ye string kryga render
    // console.log("Products Data"+data.products)// ye b string kery ga render
    // console.log("Products Data:", data.products);  // ye object render kery ga ku 
                                              // k as it is variable aa rh hia
  return (
    <div>
<Container>
<h1 className="text-center text-3xl font-bold">
         Featured Products
</h1>
<h2 className='text-center text-3xl font-bold'>Server-side (Products) Rendering</h2>
<div className='grid grid-cols-5 gap-1'>
             {
              data.products.map((item) => {
                // console.log(item.id);
                return <ProductBox key={item.id} product={item}  />
              })
             }
             </div>
</Container>

</div>
)
 
}

export default FeaturedProducts
