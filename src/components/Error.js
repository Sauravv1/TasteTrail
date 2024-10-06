import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8">
      <h1 className="text-red-600 text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Error Occurred
      </h1>
      <h3 className="font-bold text-3xl md:text-5xl lg:text-6xl text-gray-800">
        {err.status} {err.statusText}
      </h3>
    </div>
  );
};

export default ErrorPage;
