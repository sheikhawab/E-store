
// Updated ProductDetails page integrating your card UI and dynamic product data
import React from 'react';
import { getProducts } from '../../library';
import Container from '@/Components/Container';

export default async function ProductDetails({ params }) {
  const product = await getProducts(params.product_id);
  console.log("Product ID:", product);

  return (
    <Container className="col-span-4">
      <div className="py-12 px-4">
        <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
          <img className="h-60 w-full rounded-t-lg object-cover" src={product.image} alt={product.title} />
          {product.discount && (
            <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-pink-500 text-center text-sm text-white">
              Sale
            </span>
          )}
          <div className="mt-4 px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-slate-900">{product.title}</h5>
            <div className="mt-2.5 mb-5 flex items-center">
              <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
              {[...Array(5)].map((_, i) => (
                <svg key={i} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <p>
                <span className="text-3xl font-bold text-pink-500">${product.price}</span>
                {product.discount && (
                  <span className="ml-2 text-sm text-slate-900 line-through">
                    ${Math.round(product.price / (1 - product.discount / 100))}
                  </span>
                )}
              </p>
              <button className="flex items-center rounded-md bg-pink-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-600 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart
              </button>
            </div>
            <ul className="text-gray-700 space-y-2 mt-4 h-[200px] overflow-clip">
              <li><strong>Brand:</strong> {product.brand}</li>
              <li><strong>Model:</strong> {product.model}</li>
              <li><strong>Color:</strong> {product.color}</li>
              <li><strong>Category:</strong> {product.category}</li>
              <li><strong>Description:</strong> {product.description}</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}


///////////// ye rha componenet jo uhaya hai meine tailwind ka////////
// export const product_id = () => {
//   return (

//   <div className="relative m-10 w-full max-w-xs overflow-hidden rounded-lg bg-white shadow-md">
//     <a href="#">
//       <img className="h-60 rounded-t-lg object-cover" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
//     </a>
//     <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-black text-center text-sm text-white">Sale</span>
//     <div className="mt-4 px-5 pb-5">
//       <a href="#">
//         <h5 className="text-xl font-semibold tracking-tight text-slate-900">Nike Air MX Super 5000</h5>
//       </a>
//       <div className="mt-2.5 mb-5 flex items-center">
//         <span className="mr-2 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
//         <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//         <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//         <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//         <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//         <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//         </svg>
//       </div>
//       <div className="flex items-center justify-between">
//         <p>
//           <span className="text-3xl font-bold text-slate-900">$249</span>
//           <span className="text-sm text-slate-900 line-through">$299</span>
//         </p>
//         <a href="#" className="flex items-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
//           <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//             <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
//           </svg>
//           Add to cart</a>
//       </div>
//     </div>
//   </div>
//   )
// }
///////////// ye rha mera videos ka exact code /////////////
// import React from 'react';
// import { getProducts } from '../../library';const page = () => {
// import Container from '@/Components/Container';
// import styles from "@/styles/"
// export default async function ProductDetails ({ params }){
//   // const { product_id } = params;
//   const product = await getProducts(params.product_id);
//   console.log("Product ID:", product);
//   return (
//     <Container className= "col-span-4">
//       <div className='py-12 px-4'>
//         <div className='flex flex-col md:flex-row items-start bg-white'>
//           {/* image details */}
//           <img
//           src={product.image}
//           alt={product.title}
//           className={`${styles.productImage} w-full md:w-1/2 object-cover`}
//           />
//         </div>
//         {/* product details */}
//         <div className='p-6 md:w-1/2'>
//         <h1 className='text-3xl font-semibold text-gray-800 mb-4'>{product.title}</h1>
//         <p className='text-gray-600 mb-4'>{product.description}</p>
//         <p className='text-lg font-semibold text-gray-900 mb-4'>Price: ${product.price}</p>
//         {product.discount && (
//           <p className='text-md text-red-500 mb-4'>Discount:{product.discount}% off</p>
//           )}
//           <ul className='text-gray-700 space-y-2'>
//             <li><strong>Brand:</strong>{product.brand}</li>
//             <li><strong>Model:</strong>{product.model}</li>
//             <li><strong>Color:</strong>{product.color}</li>
//             <li><strong>Category:</strong>{product.category}</li>
//           </ul>
//           <button className='mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg'>
//             Add to Cart</button>
//         </div>
//       </div>
//     </Container>
//   );
// };