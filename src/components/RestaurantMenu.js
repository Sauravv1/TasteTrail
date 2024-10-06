import Shimmer from "./Shimmer.js";
import { useParams } from "react-router-dom";
import { LINKEDIN, STAR } from "../utils/constants";
import bicycle from "../utils/bicycle.svg";
import location from "../utils/location.svg";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo || !resInfo.cards) return <Shimmer />;

  const info = resInfo.cards[2]?.card?.card?.info || {};
  const itemCards =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card
      ?.itemCards || [];
  const categories =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  const restaurantAddresses =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress"
    ) || [];

  return (
    <div className="container mx-auto p-4 md:p-8 lg:p-12">
      {/* Restaurant Info */}
      <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-neutral-700 py-2">
        {info.name || "Restaurant Name"}
      </h1>

      <div className="border-2 border-gray-100 shadow-lg rounded-lg p-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-2 md:space-y-0">
          {/* Rating & Cost */}
          <div className="flex items-center space-x-2">
            <img className="w-5 h-5" src={STAR} alt="star" />
            <div className="text-sm font-serif">
              {info.avgRating || "N/A"} • {info.totalRatingsString || "No Ratings"}
            </div>
          </div>
          <div className="text-sm font-medium">
            {info.costForTwoMessage || "Cost not available"}
          </div>
        </div>

        {/* Cuisines & Area */}
        <div className="mt-4 text-sm font-bold text-teal-800">
          {info.cuisines?.join(", ") || "Cuisines not available"}
        </div>
        <div className="mt-2 text-sm text-gray-600">
          {info.areaName || "Area Name"}, {info.city || "City"}
        </div>

        {/* Delivery Info */}
        <hr className="my-4 border-gray-200" />
        <div className="flex items-center space-x-2">
          <img src={bicycle} alt="ride" className="w-5 h-5" />
          <div className="text-xs font-bold text-gray-500">
            {info.expectationNotifiers?.[0]?.enrichedText?.replace(
              /<\/?b>/g,
              ""
            ) || "Expectation not available"}
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-sm">
            <RestaurantCategory
              key={category?.card?.card?.title || index}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
            {/* Show rating for each category if available */}
            {category?.card?.card?.rating ? (
              <div className="flex items-center mt-2 text-sm text-yellow-600">
                <img className="w-4 h-4 mr-1" src={STAR} alt="star" />
                <span>{category.card.card.rating}</span>
              </div>
            ) : (
              <div className="text-sm text-gray-500 mt-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Restaurant Addresses */}
      <div className="mt-8 bg-gradient-to-l from-teal-50 to-yellow-50 rounded-lg shadow-sm p-4">
        <div className="space-y-6">
          {restaurantAddresses.map((address, index) => (
            <div key={index} className="py-4">
              <div className="text-sm font-bold text-gray-700">
                {address.card.card.name}
              </div>
              <div className="text-xs text-gray-600">
                Outlet: {address.card.card.area}
              </div>
              <div className="flex items-start mt-2 space-x-2">
                <img src={location} alt="location" className="w-4 h-4" />
                <div className="text-xs text-gray-600">
                  {address.card.card.completeAddress}
                </div>
              </div>
              <hr className="my-4 border-gray-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
