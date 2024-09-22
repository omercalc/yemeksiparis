import  { useState } from 'react';
import categories from '../../constants/categories/category.json';  

const Categories = () => {
  const [price, setPrice] = useState(0);

  return (
    <>
      <div className="w-1/4 p-4 bg-white border rounded-lg">
       
        <h2 className="font-bold mb-4">Product Categories</h2>
        <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{category.name}</span>
            <span className="text-gray-500">({category.count})</span>
          </li>
        ))}
      </ul>

        {/* Price Filter */}
        <h2 className="font-bold mt-6 mb-4">Filter by Price</h2>
        <div className="flex items-center space-x-2">
          <input
            type="range"
            min="0"
            max="50"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full"
          />
          <span className="text-gray-500">$0–${price}</span>
        </div>
        <button className="w-full mt-4 bg-green-500 text-white p-2 rounded-lg">
          Filter
        </button>
      </div>
    </>
  );
};

export default Categories;