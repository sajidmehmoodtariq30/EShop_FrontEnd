import React from 'react'
import { FaMeta } from 'react-icons/fa6'
import { FiPhoneCall } from 'react-icons/fi'
import { IoLogoInstagram } from 'react-icons/io'
import { RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='border-t py-12 px-4 mx-4'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-4  gap-8  px-4 lg:px-0 '>
                <div>
                    <h3 className='text-lg text-gray-800 mb-4 '>NewsLetter</h3>
                    <p className='text-gray-500 mb-4'>Be the first to hear about our new products</p>
                    <p className='font-medium text-sm text-gray-600 mb-6'>Sign up and get 10% off today on your first order</p>
                    <form action="" className='flex'>
                        <input type="email" placeholder='Enter your Email' className='p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all' />
                        <button type='submit' className='bg-black text-white py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all w-24'>Submit</button>
                    </form>
                </div>
                <div className='flex flex-col justify-between'>
                    <h2>Links</h2>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Men
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Women
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        TopWare
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        BottomWare
                    </Link>
                </div>
                <div className='flex flex-col justify-between'>
                    <h2>Support</h2>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Contact Us
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        About us
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        FAQS
                    </Link>
                    <Link to="#" className='text-gray-700 hover:text-black text-sm font-medium uppercase'>
                        Features
                    </Link>
                </div>
                <div className='flex flex-col items-start'>
                    <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
                    <div className='flex items-center gap-4 flex-col'>
                        <a href="#" className='hover:text-gray-300'>
                            <FaMeta className='h-6 w-6' />
                        </a>
                        <a href="#" className='hover:text-gray-300'>
                            <IoLogoInstagram className='h-6 w-6' />
                        </a>
                        <a href="#" className='hover:text-gray-300'>
                            <RiTwitterXLine className='h-6 w-6' />
                        </a>
                        <a href="#" className='hover:text-gray-300 flex gap-2'>
                            <FiPhoneCall className='h-5 w-5' />
                            Call Us
                        </a>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
                <p className='text-gray-500 text-sm tracking-tighter text-center '>2025 All rights reserved @Sajid Mehmood Tariq</p>
            </div>
        </footer>
    )
}

export default Footer