import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex justify-center items-center h-screen">
      <div className="absolute inset-0">
        <img
          src="/background.png"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          Welcome to McDonald's Clone
        </h1>
        <p className="text-lg text-white mb-8">
          Discover our amazing deals and special offers!
        </p>
        <Link
          to="products"
          className="bg-yellow-500 text-white hover:bg-yellow-400 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
