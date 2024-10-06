import { CDN_URL, STAR } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  const itemsArray = Object.values(items);

  return (
    <div className="mx-auto w-full max-w-4xl"> {/* Added a container for centering */}
      {itemsArray.map((item) => {
        const id = item.card.info.id;
        const itemCount = cartItems[id]?.quantity || 0;

        return (
          <div
            key={id}
            className="border-b-2 shadow-sm py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div className="flex w-full sm:w-auto">
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md mt-2 sm:mt-0"
                alt={item.card.info.name}
              />
              <div className="flex flex-col ml-4">
                <span className="text-sm font-bold sm:text-base">
                  {item.card.info.name}
                </span>
                <span className="text-xs font-bold text-gray-500 pt-1 sm:pt-2">
                  ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
                <div className="flex items-center mt-1">
                  <img className="w-4 h-4" src={STAR} alt="Rating" />
                  <span className="text-[0.64rem] sm:text-sm font-extrabold text-gray-500 ml-1">
                    {item.card.info.ratings?.aggregatedRating?.rating &&
                    item.card.info.ratings.aggregatedRating
                      ? `${
                          item.card.info.ratings.aggregatedRating.rating
                        } (${item.card.info.ratings.aggregatedRating.ratingCount.replace(
                          "ratings",
                          ""
                        )})`
                      : "---"}
                  </span>
                </div>
                <span className="font-medium text-xs sm:text-sm text-gray-400 mt-2 sm:mt-4">
                  {item.card.info.description}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between w-full sm:w-auto mt-2 sm:mt-0">
              {itemCount === 0 ? (
                <button
                  className="hover:bg-green-600 bg-slate-700 text-xs sm:text-sm text-white font-bold py-1 px-3 sm:px-4 rounded"
                  onClick={() => handleAdd(item)}
                >
                  Add
                </button>
              ) : (
                <div className="flex items-center">
                  <button
                    className="hover:bg-red-600 bg-slate-700 text-xs sm:text-sm text-white font-bold py-1 px-2 sm:px-3 rounded"
                    onClick={() => handleRemove(item)}
                  >
                    -
                  </button>
                  <span className="text-sm text-black mx-3">{itemCount}</span>
                  <button
                    className="hover:bg-green-600 bg-slate-700 text-xs sm:text-sm text-white font-bold py-1 px-2 sm:px-3 rounded"
                    onClick={() => handleAdd(item)}
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
