import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";

const ProductModal = ({ isOpen, onClose, product }) => {
  const { cart, handleAddToCart } = useContext(CartContext);

  const filteredCart = cart.find((cart) => cart.id === product.id);

  console.log(filteredCart);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">{product.dish}</h2>
        <p className="mb-4">{product.description}</p>
        <div className="mb-4">
          <h3 className="font-semibold">Gramaj Seçimi</h3>
          <select className="w-full p-2 border rounded">
            <option value="75">75 gr. - Ücretsiz</option>
            <option value="100">100 gr. - 20 TL</option>
            <option value="125">125 gr. - 35 TL</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Soğanlı / Soğansız</h3>
          <select className="w-full p-2 border rounded">
            <option value="soğanlı">Soğanlı - Ücretsiz</option>
            <option value="soğansız">Soğansız - Ücretsiz</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Mayonez Seçimi</h3>
          <select className="w-full p-2 border rounded">
            <option value="sarımsaklı">
              Sarımsaklı Mayonez Sos İstiyorum - Ücretsiz
            </option>
            <option value="sarımsaksız">
              Sarımsaklı Mayonez Sos İstemiyorum - Ücretsiz
            </option>
            <option value="acılı">
              Acılı Sarımsaklı Mayonez Sos İstiyorum - 2 TL
            </option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Promosyon</h3>
          <select className="w-full p-2 border rounded">
            <option value="istemiyorum">
              Promosyon İstemiyorum - Ücretsiz
            </option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Yanında iyi gider</h3>
          <select className="w-full p-2 border rounded">
            <option value="ayran">Ayran (27 cl.) - 35 TL</option>
            <option value="pepsi33">Pepsi (33 cl.) - 45 TL</option>
            <option value="pepsi1">Pepsi (1 L.) - 65 TL</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">Ürün Notu</h3>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Özel tercihleriniz var mı? Restorana iletin."
          ></textarea>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
          >
            Kapat
          </button>
          <button
            onClick={() => {
              handleAddToCart({ ...product, quantity: 1 });
              onClose(); 
            }}
            className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-700"
          >
            Sepete Gönder
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // Modal burada render edilecek
  );
};

ProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  setCart: PropTypes.func,
  product: PropTypes.shape({
    dish: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    oldPrice: PropTypes.number,
    newPrice: PropTypes.number,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired, // id prop'unu ekledik
  }).isRequired,
};

export default ProductModal;