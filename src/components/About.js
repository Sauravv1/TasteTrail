const About = () => {
    return (
      <div className="main shadow-lg m-4 sm:m-8 rounded-lg overflow-hidden">
        <div className="bg-customimage h-screen bg-cover bg-center w-full flex items-center justify-center">
          <div className="bg-white bg-opacity-90 p-6 sm:p-10 rounded-lg shadow-2xl max-w-4xl w-full mx-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-700 text-center mb-6">
              Welcome to <span className="text-[#FF6B6B]">TasteTrail</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light text-center mb-8">
              At <span className="font-semibold text-teal-700">TasteTrail</span>, every meal is an adventure waiting to happen. Whether you're hunting for hidden local gems, craving street food, or exploring fine dining, we're here to connect you with flavors that spark joy and satisfy your cravings. TasteTrail makes discovering delicious moments as simple as exploring, ordering, and indulging.
            </p>
            <div className="flex justify-center">
              <p className="text-lg bg-teal-600 text-white py-3 px-6 rounded-full shadow-md font-medium transform hover:scale-105 transition duration-200 ease-in-out">
                — Explore, Order, Indulge!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  