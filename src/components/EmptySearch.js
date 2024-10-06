import { EMPTY } from "../utils/constants";

const EmptySearch = () => {
    return (
        <div className="flex flex-col items-center justify-center mx-auto py-8">
            <p className="text-base text-center mt-4 md:text-lg text-gray-600">
                Sorry, we couldn't find any results for your search.
            </p>
            <img 
                src={EMPTY} 
                alt="No results found" 
                className="mt-6 w-48 md:w-64 lg:w-80"
            />
        </div>
    );
};

export default EmptySearch;
