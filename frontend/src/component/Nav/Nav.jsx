import {  NavLink } from 'react-router-dom';
import "remixicon/fonts/remixicon.css";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Sol Taraf */}
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
          } >
              Anasayfa
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
          } >
              Menüler
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
          } >
              İletişim
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) =>
                `hover:text-red-400 ${isActive && "text-red-400"} `
          } >
              Hakkımızda
            </NavLink>
          </li>
        </ul>

        {/* Logo Ortada */}
        <div className="text-2xl font-bold text-gray-800">LOGO</div>

        {/* Sağ Taraf */}
        <div className="flex space-x-6 items-center">
          <i className="ri-search-line text-gray-600 hover:text-black cursor-pointer text-xl"></i>
          <i className="ri-shopping-cart-line text-gray-600 hover:text-black cursor-pointer text-xl">
            <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-red-700 text-center">
              0
            </sup>
          </i>
          <i className="ri-user-line text-gray-600 hover:text-black cursor-pointer text-xl"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
