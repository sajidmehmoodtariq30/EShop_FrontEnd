import React from 'react';
import avatar from '../assets/Me.jpg'
import MyOrder from './MyOrder';

const ProfilePage = () => {
    const user = {
        name: 'Sajid Mehmood',
        email: 'sajidmehmoodtariq5@gmail.com',
        avatar: avatar
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <div className="flex-grow container mx-auto p-5">
                <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
                    <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6 flex flex-col gap-4">
                        <img className="w-16 h-16 rounded-full" src={user.avatar} alt="User Avatar" />
                        <div>
                            <h2 className="text-xl font-semibold">{user.name}</h2>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                        <button className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'>
                            Logout
                        </button>
                    </div>
                </div>
                <div className='w-full lg:w-3/4'>
                    <MyOrder />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;