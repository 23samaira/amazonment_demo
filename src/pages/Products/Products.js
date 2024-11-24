import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch products from the API
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-blue-600 text-white shadow-lg">
        <div className="container mx-auto flex justify-center items-center p-4">
          <h1 className="text-2xl font-bold absolute left-4">Amazonment</h1>
          <ul className="flex space-x-4 items-center">
            <li className="hover:underline cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/Products">Products</Link>
            </li>
            <li className="hover:underline cursor-pointer">
              <Link to="/OrdersPage">Orders</Link>
            </li>
            {/*<li className="hover:underline cursor-pointer">Returns</li>
            <li className="hover:underline cursor-pointer">Tools</li>*/}
          </ul>
          {/*<div className="flex items-center space-x-2">
            <span className="hidden sm:block">Profile</span>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-800">
              <i className="fas fa-user"></i>
            </div>
          </div>*/}
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white shadow p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-gray-600">
              <span className="font-semibold">15 Orders</span> | Updated a few
              seconds ago
            </p>
          </div>
          {/*
          <div className="flex space-x-2">
            <button className="btn btn-outline">Sync</button>
            <button className="btn btn-outline">Create</button>
          </div>*/}
        </div>
      </header>
      {/*body*/}
      {/* Body */}
      <div className="p-4 space-y-4">
        {" "}
        {/* Added space between elements */}
        {/* Display Loading or Error */}
        {loading && <p>Loading products...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {/* Search and Filters */}
        {!loading && !error && (
          <>
            {/*<div className="flex justify-between items-center space-x-4 mb-4">
              
              {/* Search input */}
            {/*<input
                type="text"
                placeholder="Search Orders"
                className="input input-bordered w-1/3"
              />
              {/* Filter dropdowns */}
            {/*<select className="select select-bordered w-1/4">
                <option>Order List: Recently Added</option>
                <option>Order List: Alphabetical</option>
              </select>
              <select className="select select-bordered w-1/4">
                <option>Platform: All</option>
                <option>Platform: Shopify</option>
              </select>
              <select className="select select-bordered w-1/4">
                <option>Priority: High</option>
                <option>Priority: Low</option>
              </select>
            </div>

            {/* Products Table */}
            <div className="flex justify-center">
              <table className="table-auto w-full max-w-5xl border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="border border-gray-300 px-4 py-2 w-1/4">
                      Product
                    </th>
                    <th className="border border-gray-300 px-4 py-2 w-1/6">
                      SKU
                    </th>
                    <th className="border border-gray-300 px-4 py-2 w-1/6">
                      Price
                    </th>
                    <th className="border border-gray-300 px-4 py-2 w-1/6">
                      Quantity
                    </th>
                    {/*
                    <th className="border border-gray-300 px-4 py-2 w-1/6">
                      Action
                    </th>*/}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        <Link
                          to={`/Products/${index + 1}`}
                          className="text-blue-600 hover:underline"
                        >
                          {item.productName}
                        </Link>
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {item.productSKU}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {item.productPrice}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {item.productQuantity}
                      </td>
                      {/*
                      <td className="border border-gray-300 px-4 py-2 text-center">
                         <div className="flex justify-center space-x-2">
                          <button className="btn btn-sm btn-outline">
                            Edit
                          </button>
                          <button className="btn btn-sm btn-error">
                            Delete
                          </button>
                        </div>
                      </td>*/}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Products;

/* <th className="border border-gray-300 px-4 py-2 w-1/6">
                      Status
                    </th> <td
                        className={`border border-gray-300 px-4 py-2 ${
                          item.status === "sync"
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {item.status}
                      </td>*/
