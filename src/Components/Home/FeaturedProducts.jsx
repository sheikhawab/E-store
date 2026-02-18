import React from 'react'
import Container from '../Container'
import ProductBox from '../ProductBox';

const FeaturedProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=5');
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // fakestoreapi.com returns array directly, not {products: [...]}
        const products = Array.isArray(data) ? data : (data.products || []);
        
        return (
            <div>
                <Container>
                    <h1 className="text-center text-3xl font-bold">
                        Featured Products
                    </h1>
                    <h2 className='text-center text-3xl font-bold'>Server-side (Products) Rendering</h2>
                    {products.length > 0 ? (
                        <div className='grid grid-cols-5 gap-1'>
                            {products.map((item) => {
                                return <ProductBox key={item.id} product={item} />
                            })}
                        </div>
                    ) : (
                        <p className='text-center text-gray-500'>No products found</p>
                    )}
                </Container>
            </div>
        );
    } catch (error) {
        console.error('Error fetching featured products:', error);
        return (
            <div>
                <Container>
                    <h1 className="text-center text-3xl font-bold">
                        Featured Products
                    </h1>
                    <h2 className='text-center text-3xl font-bold'>Server-side (Products) Rendering</h2>
                    <p className='text-center text-red-500'>Error loading products. Please try again later.</p>
                </Container>
            </div>
        );
    }
}

export default FeaturedProducts
