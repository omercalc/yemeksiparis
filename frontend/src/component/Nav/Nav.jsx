import { NavLink, useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import { CartContext } from "../../context/CartProvider";
import { useContext } from "react";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart"); // Sepet sayfasına yönlendirme
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Sol Taraf */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
              }
            >
              Anasayfa
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
              }
            >
              Menüler
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
              }
            >
              İletişim
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
              }
            >
              Hakkımızda
            </NavLink>
          </li>
        </ul>

        <div className="text-2xl font-bold text-gray-800">LOGO</div>

        <div className="flex space-x-6 items-center">
          <i className="ri-search-line text-gray-600 hover:text-black cursor-pointer text-xl"></i>
          <i
            className="ri-shopping-cart-line text-gray-600 hover:text-black cursor-pointer text-xl"
            onClick={handleCartClick}
          >
            <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-red-700 text-center">
              {cart.length}
            </sup>
          </i>
          <NavLink to="/login">
            <i className="ri-user-line text-gray-600 hover:text-black cursor-pointer text-xl"></i>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
