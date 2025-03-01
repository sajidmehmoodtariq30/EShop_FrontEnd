import React from 'react';



const ProductGrid = ({ similarProduct }) => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {similarProduct.map((product) => (
                <div key={product._id} className='flex flex-col items-center'>
                    <img src={product.images[0].url} alt={product.images[0].altText} className='w-full h-64 object-cover rounded-lg' />
                    <h3 className='text-lg font-semibold mt-2'>{product.name}</h3>
                    <p className='text-gray-700'>${product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default ProductGrid;