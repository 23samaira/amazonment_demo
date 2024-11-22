import React from "react";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold">Amazonment</h1>
          <ul className="flex space-x-4">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/Products">Products</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/OrdersPage">Orders</Link>
            </li>
            <li className="hover:underline cursor-pointer">Returns</li>
            <li className="hover:underline cursor-pointer">Tools</li>
          </ul>
          <div className="flex items-center space-x-2">
            <span className="hidden sm:block">Profile</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-800">
              <i className="fas fa-user"></i>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        {/* Welcome Message */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Welcome to Amazonment!</h2>
          <p className="text-gray-600 mt-2">
            Streamline your online business management with ease.
          </p>
        </div>

        {/* Step 1: Connect a Store */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Step 1: Connect a Store
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Store Cards */}
            {["Shopify", "Amazon", "eBay", "Etsy", "WooCommerce"].map(
              (store) => (
                <div
                  key={store}
                  className="card bg-white shadow-lg p-6 rounded-lg"
                >
                  <h4 className="text-xl font-semibold">{store}</h4>
                  <button className="btn btn-primary mt-4 w-full bg-blue-600 hover:bg-blue-700">
                    Connect
                  </button>
                </div>
              )
            )}
          </div>
        </div>

        {/* Step 2: Connect Carrier Service */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">
            Step 2: Connect Carrier Service
          </h3>
          <div className="card bg-white shadow-lg p-6 rounded-lg w-full md:w-1/2 mx-auto">
            <h4 className="text-xl font-semibold">
              Amazon Multi-Channel Fulfillment
            </h4>
            <button className="btn btn-primary mt-4 w-full bg-green-600 hover:bg-green-700">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
