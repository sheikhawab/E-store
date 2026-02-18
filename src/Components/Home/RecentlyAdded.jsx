"use client";
import React, { useEffect, useState } from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox';

const RecentlyAdded = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const getproduct = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch("https://fakestoreapi.com/products?limit=5");
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            const data = await response.json();
            
            // fakestoreapi.com returns array directly, not {products: [...]}
            const productsList = Array.isArray(data) ? data : (data.products || []);
            setProducts(productsList);
        } catch (err) {
            console.error('Error fetching products:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        getproduct();
    }, []);
    
    return (
        <div className='bg-gray-100 p-3'>
            <Container>
                <h1 className='text-center font-bold text-3xl '>Recently Added Products</h1>
                <h2 className='text-center text-3xl font-bold'>Client-side (Products) Rendering</h2>
                {loading && <p className='text-center text-gray-500'>Loading products...</p>}
                {error && <p className='text-center text-red-500'>Error: {error}</p>}
                {!loading && !error && (
                    <div className='grid grid-cols-5 gap-1'>
                        {products.length > 0 ? (
                            products.map((item) => {
                                return <ProductBox key={item.id} product={item} />
                            })
                        ) : (
                            <p className='text-center col-span-5 text-gray-500'>No products found</p>
                        )}
                    </div>
                )}
            </Container>
        </div>
    );
}

export default RecentlyAdded
