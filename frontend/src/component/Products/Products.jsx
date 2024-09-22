import Categories from "../Categories/Categories";
import Product from "./Product/Product";

const ProductList = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Search and Sort Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search product..."
            className="border p-2 rounded-md w-64"
          />
          <button className="grid grid-cols-2 gap-1 text-gray-500 border p-2 rounded-md">
            <i className="fas fa-th"></i>
            <i className="fas fa-th-list"></i>
          </button>
        </div>
      </div>

      <div className="flex">
       
        <Categories />

       
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
