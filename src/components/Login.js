import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-teal-50 to-yellow-50">
      {/* Responsive form container */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-xl p-4 sm:p-6 lg:p-10 bg-white shadow-lg rounded-xl">
        <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-gray-800 mb-6">
          Welcome to TasteTrail
        </h1>
        
        <form className="space-y-6">
          {/* Name Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <label className="text-sm lg:text-base font-bold text-gray-700 font-serif mb-1 sm:mb-0">
              Name:
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full sm:w-2/3 p-2 text-sm lg:text-base font-serif border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <label className="text-sm lg:text-base font-bold text-gray-700 font-serif mb-1 sm:mb-0">
              E-mail:
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full sm:w-2/3 p-2 text-sm lg:text-base font-serif border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0 justify-center">
            <button
              type="button"
              className="w-full sm:w-auto px-4 py-2 bg-green-700 hover:bg-green-600 text-white font-bold rounded shadow-md"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link to="/signup">
              <button
                type="button"
                className="w-full sm:w-auto px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded shadow-md"
              >
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>

      {/* Modal for successful login */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 sm:p-8 rounded shadow-lg text-center mx-4">
            <h2 className="text-lg font-serif text-gray-600 mb-4">
              Logged in Successfully!
            </h2>
            <button
              className="mt-2 px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700"
              onClick={handleCloseModal}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
