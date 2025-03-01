import React, { useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [canscrollLeft, setcanscrollLeft] = useState(false)
    const [canScrollRight, setCanScrollRight] = useState(true)

    const newArrivals = [
        {
            _id: "1",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=1",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            _id: "2",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=2",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            _id: "3",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=3",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            _id: "4",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=4",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            _id: "5",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=5",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            _id: "6",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=6",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            _id: "7",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=7",
                    altText: "Stylish Jacket"
                }
            ]
        },
        {
            _id: "8",
            name: "stylish jacket",
            price: "1800",
            images: [
                {
                    url: "https://picsum.photos/500/500?random=8",
                    altText: "Stylish Jacket"
                }
            ]
        },
    ]

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -520 : 520
        scrollRef.current.scrollBy({left: scrollAmount, behaviour: "smooth"})
    }

    const updateScrollButtons = () => {
        const container = scrollRef.current;
        if (container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth
            setcanscrollLeft(leftScroll > 0)
            setCanScrollRight(rightScrollable)
        }
    }

    useEffect(() => {
      const container = scrollRef.current;
        if (container ) {
            container.addEventListener("scroll",updateScrollButtons)
        }
    })
    
    return (
        <section className='mb-4'>
            <div className="container mx-auto text-center mb-10 relative">
                <h2 className='text-3xl font-bold mb-4'>Explore New Arrivals</h2>
                <p className='text-lg text-gray-600 mb-8'>Discover the latest styles straight off the runaway, freshly added to keep your wardrobe on the cutting edge of fashion.</p>
                <div className='absolute right-0 bottom-[-30px] flex space-x-2 mr-3'>
                    <button onClick={() => scroll("left")} disabled={!canscrollLeft} className={`p-2 rounded border ${canscrollLeft ? "bg-white text-black" : "bg-gray-200 cursor-not-allowed"}`}>
                        <FiChevronLeft className='text-2xl h-5 w-5 text-gray-700' />
                    </button>
                    <button onClick={() => scroll("right")} disabled={!canScrollRight} className={`p-2 rounded border ${canScrollRight ? "bg-white text-black" : "bg-gray-200 cursor-not-allowed"}`}>
                        <FiChevronRight className='text-2xl h-5 w-5 text-gray-700' />
                    </button>
                </div>
            </div>
            <div ref={scrollRef} className='container mx-auto overflow-x-hidden flex space-x-6 relative'>
                {
                    newArrivals.map((product)=>(
                        <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[32%] relative'>
                            <img src={product.images[0].url} alt={product.images[0].altText} className='w-full h-[500px] object-cover rounded-lg' />
                            <div className="absolute bottom-0 left-0 right-0 opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
                                <Link to={`/product/${product._id}`} className='block '>
                                    <h4 className='font-medium'>{product.name}</h4>
                                    <p className='mt-1'>{product.price} pkr</p>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default NewArrivals