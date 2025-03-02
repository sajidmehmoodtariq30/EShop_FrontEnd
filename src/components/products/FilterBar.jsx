import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const filterOptions = {
    size: ['Small', 'Medium', 'Large'],
    color: ['Red', 'Blue', 'Green'],
    material: ['Cotton', 'Polyester', 'Wool'],
    brand: ['Brand A', 'Brand B', 'Brand C'],
    gender: ['Male', 'Female', 'Unisex'],
    priceRange: ['Under $50', '$50 - $100', 'Above $100']
};

const FilterBar = ({ sidebarRef, isSidebarOpen, onApplyFilters = () => {} }) => {
    const [selectedFilters, setSelectedFilters] = useState({
        size: '',
        color: '',
        material: '',
        brand: '',
        gender: '',
        priceRange: ''
    });

    const navigate = useNavigate();

    const applyFilters = () => {
        const params = new URLSearchParams();
        Object.keys(selectedFilters).forEach(key => {
            if (selectedFilters[key]) {
                params.append(key, selectedFilters[key]);
            }
        });
        navigate({ search: params.toString() });
        onApplyFilters(selectedFilters);
    };

    const handleFilterChange = (filterType, value) => {
        setSelectedFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: value
        }));
    };

    return (
        <div ref={sidebarRef} className={`fixed inset-y-0 left-0 transform lg:transform-none lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="w-64 bg-white h-full shadow-md p-4">
                <h2 className="text-xl font-bold mb-4">Filters</h2>
                <div className="mb-4">
                    <h3 className="font-semibold">Size</h3>
                    <select className="w-full mt-2 p-2 border rounded" onChange={(e) => handleFilterChange('size', e.target.value)}>
                        <option value="">Select Size</option>
                        {filterOptions.size.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Color</h3>
                    <div className="flex space-x-2 mt-2">
                        {filterOptions.color.map((color, index) => (
                            <div
                                key={index}
                                className={`w-6 h-6 rounded-full cursor-pointer ${selectedFilters.color === color ? 'border-2 border-black' : ''}`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                onClick={() => handleFilterChange('color', color)}
                            ></div>
                        ))}
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Material</h3>
                    <select className="w-full mt-2 p-2 border rounded" onChange={(e) => handleFilterChange('material', e.target.value)}>
                        <option value="">Select Material</option>
                        {filterOptions.material.map((material, index) => (
                            <option key={index} value={material}>{material}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Brand</h3>
                    <select className="w-full mt-2 p-2 border rounded" onChange={(e) => handleFilterChange('brand', e.target.value)}>
                        <option value="">Select Brand</option>
                        {filterOptions.brand.map((brand, index) => (
                            <option key={index} value={brand}>{brand}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Gender</h3>
                    <select className="w-full mt-2 p-2 border rounded" onChange={(e) => handleFilterChange('gender', e.target.value)}>
                        <option value="">Select Gender</option>
                        {filterOptions.gender.map((gender, index) => (
                            <option key={index} value={gender}>{gender}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <h3 className="font-semibold">Price Range</h3>
                    <select className="w-full mt-2 p-2 border rounded" onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
                        <option value="">Select Price Range</option>
                        {filterOptions.priceRange.map((price, index) => (
                            <option key={index} value={price}>{price}</option>
                        ))}
                    </select>
                </div>
                <button className="w-full bg-blue-500 text-white p-2 rounded mt-4" onClick={applyFilters}>Apply Filters</button>
            </div>
        </div>
    );
};

export default FilterBar;
