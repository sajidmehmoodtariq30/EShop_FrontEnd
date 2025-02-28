import React from 'react'
import { IoMdClose } from 'react-icons/io';
import CartContent from '../cart/CartContent';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {

    return (
        <div className={`fixed top-0 right-0 w-full sm:w-1/2 md:w-[25rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-column z-50 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            <div className='flex flex-col'>
                <div className='flex justify-end p-4'>
                    <button onClick={toggleCartDrawer}>
                        <IoMdClose className='h-6 w-6 text-gray-600' />
                    </button>
                </div>
                <div className='flex-grow p-4 overflow-y-auto'>
                    <h2 className='text-xl font-semibold mb-4 '>Your Cart</h2>
                    <CartContent />
                </div>
                <div className='p-4 bg-white sticky bottom-0'>
                    <button className='w-full bg-black text-white py-3 transition rounded-lg font-semibold hover:bg-gray-800'>Checkout</button>
                    <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>Shipping, taxes and discount codes calculates at checkout </p>
                </div>
            </div>
        </div>
    )
}

export default CartDrawer