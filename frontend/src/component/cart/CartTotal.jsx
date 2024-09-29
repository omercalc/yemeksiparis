import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../context/CartProvider';

const CartTotal = ({ cartItems = [] }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price) || 0;
      const quantity = parseInt(item.quantity, 10) || 0;
      return total + price * quantity;
    }, 0).toFixed(2);
  };

  return (
    <div className="container mx-auto pt-21 pb-24 py-10">
      <div className="flex flex-wrap">
        <div className="w-full overflow-x-auto mb-22">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Product</th>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Price</th>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Quantity</th>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Total</th>
                <th scope="col" className="text-left uppercase font-bold border-t-0">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index} className="align-middle">
                  <td className="flex items-center border-t-0 border-b px-0 py-6">
                    <div className="w-16 h-20">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="pl-2"><a href="#">{item.name}</a></span>
                  </td>
                  <td className="font-bold border-t-0 border-b px-0 py-6">{parseFloat(item.price).toFixed(2)} $</td>
                  <td className="border-t-0 border-b px-0 py-6">
                    <div className="flex items-center">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={parseInt(item.quantity, 10) || 0}
                        className="w-12 mx-2 border rounded text-center"
                        readOnly
                      />
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="px-2 py-1 bg-gray-300 text-gray-800 rounded"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="font-bold border-t-0 border-b px-0 py-6">{(parseFloat(item.price) * (parseInt(item.quantity, 10) || 0)).toFixed(2)} $</td>
                  <td className="border-t-0 border-b px-0 py-6">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full">
          <form action="#" className="mb-5">
            <div className="mb-0">
              <label htmlFor="note" className="font-bold uppercase block mb-1">Add Note</label>
              <textarea id="note" className="w-full border rounded p-2"></textarea>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <form action="#" className="mb-5 md:mb-0">
            <fieldset>
              <div className="inline-block align-bottom mr-5 mb-2 md:mb-0">
                <label htmlFor="code" className="font-bold uppercase block mb-1">Promo Code</label>
                <input type="text" id="code" className="w-full border rounded p-2" />
              </div>
              <button type="submit" className="btn bg-blue-500 text-white font-bold uppercase rounded py-3 px-4 hover:bg-blue-700">Apply</button>
            </fieldset>
          </form>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex justify-between">
            <strong className="font-bold uppercase mb-1">Subtotal</strong>
            <strong className="font-bold uppercase mb-1">{calculateTotal()} $</strong>
          </div>
          <a href="#" className="btn bg-blue-500 text-white font-bold uppercase w-full rounded py-3 px-4 hover:bg-blue-700 text-center">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  );
};

CartTotal.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default CartTotal;