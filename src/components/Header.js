import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import cart from "../utils/cart.svg";
import user from "../utils/user.svg";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);
  const totalCartItems = Object.values(cartItems).reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-red-100 shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Branding */}
        <div className="flex items-center space-x-2">
          <img
            className="w-16 sm:w-20 md:w-20 rounded-full border border-gray-300"
            src={LOGO_URL}
            alt="Company Logo"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
            TasteTrail
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
          <ul className="flex items-center space-x-6 text-sm md:text-base">
            <li className="hover:text-teal-700 font-semibold transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-teal-700 font-semibold transition duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-teal-700 font-semibold transition duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* Cart Icon */}
          <Link to="/cart" className="relative flex items-center">
            <img className="w-6 md:w-8" src={cart} alt="Cart" />
            {totalCartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </Link>

          {/* User Login/Logout */}
          <div className="flex items-center space-x-2">
            <img className="w-6 md:w-8" src={user} alt="User" />
            <Link to="/login">
              <button
                className="bg-gray-700 hover:bg-teal-700 text-white text-sm md:text-base px-3 py-1 rounded transition duration-300"
                onClick={() =>
                  setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
                }
              >
                {btnNameReact}
              </button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="block sm:hidden">
          <button
            className="focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="sm:hidden mt-3 bg-blue-50 rounded-lg shadow-lg">
          <ul className="flex flex-col space-y-3 text-sm text-center p-4">
            <li className="hover:text-teal-700 font-semibold transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-teal-700 font-semibold transition duration-300">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-teal-700 font-semibold transition duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <img className="w-6 md:w-8" src={user} alt="User" />
              <Link to="/login">
                <button
                  className="bg-gray-700 hover:bg-teal-700 text-white text-sm md:text-base px-3 py-1 rounded transition duration-300"
                  onClick={() =>
                    setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
                  }
                >
                  {btnNameReact}
                </button>
              </Link>
            </li>
            <li className="flex items-center justify-center space-x-2">
              <Link to="/cart" className="relative flex items-center">
                <img className="w-6 md:w-8" src={cart} alt="Cart" />
                {totalCartItems > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalCartItems}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
