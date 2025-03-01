import React from 'react';
import { HiShoppingBag } from 'react-icons/hi';
import { HiArrowPathRoundedSquare } from 'react-icons/hi2';

const FeaturesSection = () => {
    return (
        <section className="px-16 py-4 bg-white">
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md w-full md:w-2/3 mx-2">
                    <HiShoppingBag />
                    <h3 className="text-xl font-semibold mb-2">Fast Shipping 1</h3>
                </div>
                <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md w-full md:w-2/3 mx-2">
                    <HiArrowPathRoundedSquare />
                    <h3 className="text-xl font-semibold mb-2">45 Days return</h3>
                </div>
                <div className="flex flex-col items-center bg-gray-200 p-6 rounded-lg shadow-md w-full md:w-2/3 mx-2">
                    <HiShoppingBag />
                    <h3 className="text-xl font-semibold mb-2">Money Back Gaurentee</h3>
                </div>
            </div>
        </ section>
    );
};

export default FeaturesSection;
