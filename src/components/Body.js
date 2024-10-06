import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import cancel from "../utils/cancel.svg";
import search from "../utils/search.svg";
import EmptySearch from "./EmptySearch";
import Footer from "./Footer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredList);
    setIsSearching(true);
  };

  const handleCancelSearch = () => {
    setFilteredRestaurant(listOfRestaurants);
    setSearchText("");
    setIsSearching(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex flex-col md:flex-row justify-between p-4 items-center">
        <div className="flex justify-start mb-4 md:mb-0">
          <button
            className="bg-gradient-to-l from-teal-700 to-teal-400 w-full md:w-[16rem] hover:text-black text-white font-bold p-2 rounded"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants!
          </button>
        </div>

        <div className="flex items-center shadow-md border-2 rounded-full w-full md:w-[32rem] mx-auto p-1">
          <input
            className="focus:outline-none focus:border-transparent flex-grow text-left p-2 rounded-l-full"
            type="text"
            placeholder="Search Restaurants"
            value={searchText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className="focus:outline-none focus:border-transparent p-2 rounded-r-full bg-teal-400 hover:bg-teal-500 transition"
            onClick={isSearching ? handleCancelSearch : handleSearch}
          >
            <img
              className="w-5"
              src={isSearching ? cancel : search}
              alt={isSearching ? "Clear Search" : "Search"}
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredRestaurant.length === 0 ? (
          <EmptySearch />
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="flex justify-center"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Body;
