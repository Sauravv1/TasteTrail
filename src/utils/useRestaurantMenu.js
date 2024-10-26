import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants"; // You can keep this if you want to retain the API constant for future use.
import resList from "../utils/mockData"; // Import your mock data

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    
    const restaurant = resList.find((res) => res.info.id === resId); 
    setResInfo(restaurant ? restaurant.info : null); 
  };

  return resInfo;
};

export default useRestaurantMenu;
