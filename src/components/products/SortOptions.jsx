import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SortOptions = ({ onSortChange = () => {} }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSortChange = (event) => {
        const sortValue = event.target.value;
        setSearchParams({ sort: sortValue });
        onSortChange(sortValue);
    };

    useEffect(() => {
        const sortValue = searchParams.get('sort') || 'price-asc';
        onSortChange(sortValue);
    }, [searchParams, onSortChange]);

    return (
        <div className=" flex items-center space-x-2 mb-4">
            <label htmlFor="sort" className="text-gray-700 font-medium">Sort by:</label>
            <select
                id="sort"
                onChange={handleSortChange}
                value={searchParams.get('sort') || 'price-asc'}
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
            </select>
        </div>
    );
};

export default SortOptions;