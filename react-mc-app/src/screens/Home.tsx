import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative flex justify-center items-center h-screen bg-[url('/background.png')] bg-repeat bg-center">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center text-black px-6">
        <h1 className="text-5xl font-bold leading-tight mb-4 [text-shadow:_1px_2px_4px_rgb(155_155_155_/_99%)]">
          Welcome to McDonald's Clone
        </h1>
        <p className="text-lg mb-6 font-semibold [text-shadow:_1px_2px_4px_rgb(155_155_155_/_99%)]">
          Discover our amazing deals and special offers!
        </p>
        <Link
          to="products"
          className="bg-yellow-500 text-white hover:bg-yellow-400 py-3 px-8 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
