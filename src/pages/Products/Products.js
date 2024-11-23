import React from "react";
import { Link } from "react-router-dom";
import ProductDetails from "/Users/priyalgupta/Desktop/amazonment/my-app/amazonment_demo/src/pages/Products/ProductDetails.js";

function Products() {
  const data = [
    {
      product: "Product 1",
      sku: "SKU001",
      price: "$10",
      quantity: 100,
      status: "sync",
    },
    {
      product: "Product 2",
      sku: "SKU002",
      price: "$15",
      quantity: 200,
      status: "unsync",
    },
    {
      product: "Product 3",
      sku: "SKU003",
      price: "$20",
      quantity: 50,
      status: "sync",
    },
    {
      product: "Product 4",
      sku: "SKU004",
      price: "$25",
      quantity: 120,
      status: "unsync",
    },
    {
      product: "Product 5",
      sku: "SKU005",
      price: "$30",
      quantity: 80,
      status: "sync",
    },
    {
      product: "Product 6",
      sku: "SKU006",
      price: "$35",
      quantity: 60,
      status: "sync",
    },
    {
      product: "Product 7",
      sku: "SKU007",
      price: "$40",
      quantity: 20,
      status: "unsync",
    },
    {
      product: "Product 8",
      sku: "SKU008",
      price: "$45",
      quantity: 90,
      status: "sync",
    },
    {
      product: "Product 9",
      sku: "SKU009",
      price: "$50",
      quantity: 70,
      status: "unsync",
    },
    {
      product: "Product 10",
      sku: "SKU010",
      price: "$55",
      quantity: 150,
      status: "sync",
    },
    {
      product: "Product 11",
      sku: "SKU011",
      price: "$60",
      quantity: 130,
      status: "unsync",
    },
    {
      product: "Product 12",
      sku: "SKU012",
      price: "$65",
      quantity: 30,
      status: "sync",
    },
    {
      product: "Product 13",
      sku: "SKU013",
      price: "$70",
      quantity: 40,
      status: "unsync",
    },
    {
      product: "Product 14",
      sku: "SKU014",
      price: "$75",
      quantity: 110,
      status: "sync",
    },
    {
      product: "Product 15",
      sku: "SKU015",
      price: "$80",
      quantity: 95,
      status: "unsync",
    },
  ];

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
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-gray-600">
              <span className="font-semibold">15 Orders</span> | Updated a few
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
            <option>Order List:Recently Added</option>
            <option>Order List:Alphabetical</option>
          </select>
          <select className="select select-bordered">
            <option>Platform: All</option>
            <option>Platform: Shopify</option>
          </select>
          <select className="select select-bordered">
            <option>Priority: High</option>
            <option>Priority: Low</option>
          </select>
        </div>

        {/* Table */}
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4">Products Table</h1>
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Product</th>
                <th className="border border-gray-300 px-4 py-2">SKU</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Status</th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    <Link
                      to={`/Products/${index + 1}`}
                      className="text-blue-600 hover:underline"
                    >
                      {item.product}
                    </Link>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.sku}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.price}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {item.quantity}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 ${
                      item.status === "sync" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="btn btn-sm btn-outline mr-2">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-error">Delete</button>
                  </td>{" "}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Products;
