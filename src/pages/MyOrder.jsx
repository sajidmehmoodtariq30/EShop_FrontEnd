import React, { useEffect, useState } from 'react'
import Image1 from '../assets/mens-collection.webp'

const MyOrder = () => {
    const [orders, setOrders] = useState([])
    useEffect(() => {
        setTimeout(() => {
            const mockOrder = [
                {
                    _id: 12345,
                    createdAt: new Date(),
                    shippingAddress: { city: "Lahore", country: "Pakistan" },
                    orderItems: [
                        {
                            name: "Product 1",
                            image: Image1
                        },
                    ],
                    totalPrice: 1000,
                    isPaid: true,
                },
                {
                    _id: 12346,
                    createdAt: new Date(),
                    shippingAddress: { city: "Lahore", country: "Pakistan" },
                    orderItems: [
                        {
                            name: "Product 2",
                            image: Image1
                        },
                    ],
                    totalPrice: 700,
                    isPaid: false,
                },
            ];

            setOrders(mockOrder);

        }, 1000);

    }, [])

    return (
        <div className='max-w-7xl mx-auto p-4 sm:p-6'>
            <h2 className='text-xl sm:text-2xl font-bold mb-6'>My Orders</h2>
            <div className="relative shadow-md sm:rounded-lg  overflow-hidden">
                <table className='min-w-full text-left text-gray-500'>
                    <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                        <tr>
                            <th className="py-2 sm:py-3">Image</th>
                            <th className="py-2 sm:py-3">Order Id</th>
                            <th className="py-2 sm:py-3">Created At</th>
                            <th className="py-2 sm:py-3">Shipping Address</th>
                            <th className="py-2 sm:py-3">Items</th>
                            <th className="py-2 sm:py-3">Price</th>
                            <th className="py-2 sm:py-3">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.length > 0 ? (
                            orders.map((order) => (
                                <tr key={order._id} className='border-b hover:border-gray-50 cursor-pointer '>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        <img src={order.orderItems[0].image} alt={order.orderItems[0].name} className='w-10 h-10 sm:h-12 object-cover' />
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        #{order._id}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        {new Date(order.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        {order.shippingAddress ? `${order.shippingAddress.city} , ${order.shippingAddress.country}` : "N/A"}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        {order.orderItems.length}
                                    </td>
                                    <td className='py-2 px-2 sm:py-4 sm:px-4'>
                                        {order.totalPrice}
                                    </td>
                                    <td>
                                        <span className={`py-2 px-2 sm:py-4 sm:px-4  rounded-lg ${order.isPaid ? "bg-green-600 text-white" : "bg-red-300 text-red-600"}`}>
                                            {order.isPaid ? "True" : "False"}
                                        </span>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={7}
                                    className='py-4 px-4 text-center text-gray-500 '
                                >
                                    You Have No Orders
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MyOrder