import React from 'react';
import image from '../../assets/featured.webp'

const FeaturedCollection = () => {
    return (
        <div className="flex flex-col-reverse text-center md:text-left md:flex-row items-center gap-6 py-16 m-4 bg-gray-200 px-12 rounded-lg">
            <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl font-bold m-4">Featured Collection</h2>
                <p className="text-lg mb-4">Discover our exclusive collection of the latest trends and styles. Shop now to find your perfect look.</p>
                <button className="mt-4 w-48 h-12 px-4 py-2 rounded-lg hover:bg-gray-500 hover:text-white bg-gray-800 text-gray-200">Shop Now</button>
            </div>
            <div className="md:w-[45%] lg:w-[40%]">
                <img src={image} alt="Featured Collection" className="w-full h-auto rounded" />
            </div>
        </div>
    );
};

export default FeaturedCollection;