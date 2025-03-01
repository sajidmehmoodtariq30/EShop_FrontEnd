import React from 'react'
import Hero from '../components/layout/Hero'
import GenderCollection from '../components/products/GenderCollection'
import NewArrivals from '../components/products/NewArrivals'
import ProductDetails from '../components/products/ProductDetails'
import ProductGrid from '../components/products/productGrid'
import FeaturedCollection from '../components/products/FeaturedCollection'
import FeaturesSection from '../components/products/FeaturesSection'

const dummyProducts = [
  {
    _id: 1,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Stylish Pant 1"
      }
    ]
  },
  {
    _id: 2,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Stylish Pant 2"
      }
    ]
  },
  {
    _id: 3,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Pant 3"
      }
    ]
  },
  {
    _id: 4,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Stylish Pant 4"
      }
    ]
  },
  {
    _id: 5,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=5",
        altText: "Stylish Pant 1"
      }
    ]
  },
  {
    _id: 6,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=6",
        altText: "Stylish Pant 2"
      }
    ]
  },
  {
    _id: 7,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=7",
        altText: "Stylish Pant 3"
      }
    ]
  },
  {
    _id: 8,
    name: "Stylish Pant",
    price: 900,
    images: [
      {
        url: "https://picsum.photos/500/500?random=8",
        altText: "Stylish Pant 4"
      }
    ]
  },
];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollection />
      <NewArrivals />
      <h2 className='text-3xl text-center font-bold mt-6 mb-4'>Best Seller</h2>
      <ProductDetails />
      <div className='container mx-auto'>
        <h2 className='text-3xl text-center font-bold mb-4'>Top Wears for Women</h2>
        <ProductGrid similarProduct={dummyProducts} />
      </div>
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  )
}

export default Home