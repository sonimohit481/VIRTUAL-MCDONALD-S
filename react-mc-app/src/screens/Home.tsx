const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Welcome to McDonald's
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-yellow-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Today's Special</h2>
          <p className="text-gray-700">
            Discover our amazing deals and special offers!
          </p>
        </div>
        <div className="bg-red-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Popular Items</h2>
          <p className="text-gray-700">Check out our most loved menu items!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
