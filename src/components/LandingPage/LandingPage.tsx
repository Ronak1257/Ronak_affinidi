import { FC } from "react";

const LandingPage: FC = () => {
  return (
    <div className="m-12 bg-green-300 p-4 flex flex-col justify-center items-center rounded-2xl">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Sales App</h1>
      <p className="text-lg text-gray-800 mb-8">
        Explore our latest collection of T-shirts, hoodies, and saris.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">T-shirts</h2>
          <p className="text-gray-700">
            Check out our trendy collection of T-shirts for all occasions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Hoodies</h2>
          <p className="text-gray-700">
            Stay warm and stylish with our comfortable hoodies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Saris</h2>
          <p className="text-gray-700">
            Discover elegant saris for weddings and special occasions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
