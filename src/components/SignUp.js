import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-l from-teal-50 to-yellow-50">
      <div className="w-full max-w-lg mx-auto p-6 sm:p-8 md:p-10 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
        <form className="space-y-6">
          {/* First Name */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <label className="block text-sm font-bold text-gray-700 mb-1 sm:mb-0 sm:w-1/3">First Name:</label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="w-full sm:w-2/3 p-2 text-sm border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <label className="block text-sm font-bold text-gray-700 mb-1 sm:mb-0 sm:w-1/3">Last Name:</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="w-full sm:w-2/3 p-2 text-sm border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Mobile Number */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <label className="block text-sm font-bold text-gray-700 mb-1 sm:mb-0 sm:w-1/3">Mobile No:</label>
            <input
              type="text"
              placeholder="Enter Mobile No"
              className="w-full sm:w-2/3 p-2 text-sm border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <label className="block text-sm font-bold text-gray-700 mb-1 sm:mb-0 sm:w-1/3">E-mail:</label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full sm:w-2/3 p-2 text-sm border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Sign Up Button */}
          <div className="text-center">
            <button
              type="button"
              className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
