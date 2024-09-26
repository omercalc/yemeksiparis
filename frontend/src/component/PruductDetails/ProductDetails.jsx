import { useState } from "react";
import { useParams } from "react-router-dom";
import { dishMenu } from "../../constants/data.js";
import ProductModal from "../../ui/ProductModal";

const ProductDetails = () => {
  const { id } = useParams();
  const product = dishMenu.find((item) => item.id === parseInt(id));
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) {
    return <div>Product not found</div>;
  }

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.dish}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.dish}
          className="w-full md:w-1/2 rounded-lg"
        />
        <div className="md:ml-4 mt-4 md:mt-0 flex flex-col items-center justify-center">
          <p className="text-lg mb-4 text-center">Açıklama: {product.description}</p>
          <p className="text-gray-500 mb-4 text-center">İçindekiler: {product.ingredients.join(", ")}</p>
          <div className="flex items-center space-x-2 mb-4 justify-center">
            {product.oldPrice && (
              <span className="line-through text-gray-500">
                ${product.oldPrice}
              </span>
            )}
            <span className="font-bold text-green-500">
              ${product.newPrice || product.price}
            </span>
          </div>
          <button
            onClick={openModal}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            SEPETE EKLE
          </button>
        </div>
      </div>
      <ProductModal isOpen={isModalOpen} onClose={closeModal} product={product} />
    </div>
  );
};

export default ProductDetails;