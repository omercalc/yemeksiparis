import { useState } from 'react';
import { dishMenu } from "../../../constants/data";
import { useNavigate } from 'react-router-dom';
import ProductModal from "../../../ui/ProductModal";

const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const navigate = useNavigate();

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="w-3/4 grid grid-cols-3 gap-4">
      {dishMenu.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg relative">
          <div className=" w-full h-80 bg-gray-300 flex items-center justify-center">
            <img src={item.image} alt={item.dish} />
          </div>
          <h3 className="mt-4 font-semibold">{item.dish}</h3>
          <div className="flex items-center space-x-2 mt-2">
            {item.oldPrice && (
              <span className="line-through text-gray-500">
                ${item.oldPrice}
              </span>
            )}
            <span className="font-bold text-green-500">
              ${item.newPrice || item.price}
            </span>
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            <button className="p-2 bg-white border rounded-full hover:bg-green-500 hover:text-white">
              <i className="ri-heart-line text-2xl"></i>
            </button>
            <button onClick={() => openModal(item)} className="p-2 bg-white border rounded-full hover:bg-green-500 hover:text-white">
              <i className="ri-shopping-cart-line text-2xl"></i>
            </button>
            <button onClick={() => navigate(`/product-details/${item.id}`)} className="p-2 bg-white border rounded-full hover:bg-green-500 hover:text-white">
              <i className="ri-eye-line text-2xl"></i>
            </button>
          </div>
        </div>
      ))}
      {isModalOpen && <ProductModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct}  />}
    </div>
  );
};

export default Product;
