import React, { useState, useEffect, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import FilterBar from '../components/products/FilterBar'
import ProductGrid from '../components/products/productGrid';
import SortOptions from '../components/products/SortOptions'

const CollectionPage = () => {
  const [data, setData] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
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
      setData(dummyProducts);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      <FilterBar sidebarRef={sidebarRef} isSidebarOpen={isSidebarOpen} />
      <div className="flex-1 p-4">
        <button className="lg:hidden w-[120px] flex gap-2 items-center mb-4 p-2 bg-blue-500 text-white rounded" onClick={toggleSidebar}>
          <FaFilter /> Filters 
        </button>
        <h1 className="text-2xl font-bold mb-4">CollectionPage</h1>
        <SortOptions />
        <ProductGrid similarProduct={data} />
      </div>
    </div>
  );
};

export default CollectionPage;
