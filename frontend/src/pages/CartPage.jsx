import  { useContext } from 'react';
import CartTotal from '../component/Cart/CartTotal';
import { CartContext } from '../context/CartProvider';

const CartPage = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <CartTotal cartItems={cart} />
    </div>
  );
};

export default CartPage;