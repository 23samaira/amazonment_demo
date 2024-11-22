import React from "react";
import { Link } from "react-router-dom";
function OrdersPage() {
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
      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-gray-600">
              <span className="font-semibold">3 Orders</span> | Updated a few
              seconds ago
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="btn btn-outline">Sync</button>
            <button className="btn btn-outline">Create</button>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Search and Filters */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search Orders"
            className="input input-bordered w-full"
          />
          <select className="select select-bordered">
            <option>Order List</option>
            <option>Recently Added</option>
          </select>
          <select className="select select-bordered">
            <option>Platform: All</option>
            <option>Shopify</option>
          </select>
          <select className="select select-bordered">
            <option>Priority: High</option>
            <option>Priority: Low</option>
          </select>
        </div>

        {/* Tab Menu */}
        <div className="flex space-x-4 border-b pb-2">
          <button className="tab tab-active border-b-2 border-blue-600">
            New
          </button>
          <button className="tab">History</button>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <button className="btn btn-text">Cancel</button>
          <button className="btn btn-primary">Confirm Shipment</button>
        </div>

        {/* Order Cards */}
        <div className="space-y-4">
          {[1, 2, 3].map((orderId) => (
            <div
              key={orderId}
              className="card bg-white shadow p-4 flex justify-between items-start"
            >
              <input type="checkbox" />
              <div>
                <h3 className="font-semibold">Order ID: #{orderId}</h3>
                <p className="text-gray-600">
                  John Doe | Shopify |{" "}
                  <span className="text-red-500">High Priority</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
