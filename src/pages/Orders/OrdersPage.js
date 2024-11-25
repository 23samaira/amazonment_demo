import React, { useState } from "react";
import { Link } from "react-router-dom";
function OrdersPage() {
  const [isShipmentModalOpen, setIsShipmentModalOpen] = useState(false); // Modal for shipment form
  const [toastMessage, setToastMessage] = useState(""); // Toast message content
  const [shipmentData, setShipmentData] = useState({
    address: "",
    courier: "",
  }); // Shipment data
  // States to manage modal visibility and order data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("new"); // Track the active tab
  const [orderData, setOrderData] = useState({
    orderId: "",
    customerName: "",
    platform: "Shopify",
    priority: "High",
    products: [],
    status: "pending",
  });
  const handleQuantityChange = (productId, increment) => {
    setOrderData((prevData) => ({
      ...prevData,
      products: prevData.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(1, product.quantity + increment) }
          : product
      ),
    }));
  };
  // State for adding a new product to the order
  const [newProduct, setNewProduct] = useState("");

  // State to store the orders
  const [orders, setOrders] = useState([]);

  // Toggle Modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Add product to the list
  const handleAddProduct = () => {
    if (newProduct) {
      setOrderData((prevData) => ({
        ...prevData,
        products: [
          ...prevData.products,
          { description: newProduct, id: Date.now(), quantity: 1 },
        ],
      }));
      setNewProduct("");
    }
  };

  // Remove product from the list
  const handleRemoveProduct = (productId) => {
    setOrderData((prevData) => ({
      ...prevData,
      products: prevData.products.filter((product) => product.id !== productId),
    }));
  };

  // Submit the order and add to orders list
  const handleSubmitOrder = () => {
    setOrders((prevOrders) => [
      ...prevOrders,
      { ...orderData, status: "pending" },
    ]);
    setOrderData({
      orderId: "",
      customerName: "",
      platform: "Shopify",
      priority: "High",
      products: [],
      status: "pending",
    });
    toggleModal();
  };
  // Handle shipment modal visibility
  const toggleShipmentModal = () => {
    setIsShipmentModalOpen(!isShipmentModalOpen);
  };

  // Handle shipment form input
  const handleShipmentInputChange = (e) => {
    const { name, value } = e.target;
    setShipmentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Submit shipment data
  const handleSubmitShipment = () => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.orderId === selectedOrderId
          ? { ...order, status: "sent for shipment" }
          : order
      )
    );
    // Close the modal and show a toast message
    toggleShipmentModal();
    setToastMessage("Sent for shipment"); // Set toast message
    setTimeout(() => setToastMessage(""), 3000); // Clear the message after 3 seconds
  };
  // State to store the selected order
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  // Handle checkbox click
  const handleCheckboxChange = (orderId) => {
    // If the same checkbox is clicked again, deselect it
    if (selectedOrderId === orderId) {
      setSelectedOrderId(null);
    } else {
      // Otherwise, select the clicked checkbox
      setSelectedOrderId(orderId);
    }
  };
  // Filter orders based on the active tab
  const filteredOrders =
    activeTab === "new"
      ? orders.filter((order) => order.status === "pending")
      : orders.filter((order) => order.status === "sent for shipment");
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
            <h1 className="text-2xl font-bold">Orders</h1>
            <p className="text-gray-600">
              <span className="font-semibold"> {orders.length} Orders</span>
            </p>
          </div>
          <div className="flex space-x-2">
            {/*<button className="btn btn-outline">Sync</button>*/}
            <button onClick={toggleModal} className="btn btn-outline">
              Create
            </button>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Search and Filters 
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
        <div className="p-4 space-y-4">
          <div className="flex space-x-4 border-b pb-2">
            <button
              onClick={() => setActiveTab("new")}
              className={`tab ${
                activeTab === "new"
                  ? "tab-active border-b-2 border-blue-500"
                  : ""
              }`}
            >
              New
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`tab ${
                activeTab === "history"
                  ? "tab-active border-b-2 border-blue-500"
                  : ""
              }`}
            >
              History
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        {activeTab === "new" && (
          <div className="flex justify-end space-x-2">
            <button className="btn btn-text">Cancel</button>
            <button
              onClick={toggleShipmentModal}
              className={`btn btn-primary ${
                selectedOrderId ? "" : "btn-disabled text-white"
              }`}
              disabled={!selectedOrderId}
              style={{
                color: !selectedOrderId ? "white" : undefined, // Apply white text color only when disabled
              }}
            >
              Confirm Shipment
            </button>
          </div>
        )}

        {/* Order Cards */}
        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              className="card bg-white shadow p-4 flex justify-between items-start"
            >
              {activeTab === "new" && (
                <input
                  type="checkbox"
                  checked={selectedOrderId === order.orderId}
                  onChange={() => handleCheckboxChange(order.orderId)}
                />
              )}
              <div>
                <h3 className="font-semibold">Order ID: #{order.orderId}</h3>
                <p className="text-gray-600">
                  {order.customerName} | {order.platform} |{" "}
                  <span className="text-red-500">High Priority</span>
                </p>
                <ul>
                  {order.products.map((product) => (
                    <li key={product.id}>
                      {product.description} - Quantity: {product.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for Creating an Order */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Create Order</h2>
            <input
              type="text"
              name="orderId"
              value={orderData.orderId}
              onChange={handleInputChange}
              placeholder="Order ID"
              className="input input-bordered w-full mb-2"
            />
            <input
              type="text"
              name="customerName"
              value={orderData.customerName}
              onChange={handleInputChange}
              placeholder="Customer Name"
              className="input input-bordered w-full mb-2"
            />
            {/*<input
              type="text"
              name="quantity"
              value={orderData.quantity}
              onChange={handleInputChange}
              placeholder="Product Quantity"
              className="input input-bordered w-full mb-2"
            /> */}
            <select
              name="platform"
              value={orderData.platform}
              onChange={handleInputChange}
              className="select select-bordered w-full mb-2"
            >
              <option value="Shopify">Shopify</option>
              <option value="Magento">Magento</option>
            </select>
            <select
              name="priority"
              value={orderData.priority}
              onChange={handleInputChange}
              className="select select-bordered w-full mb-2"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            {/* Product Addition Section */}
            <div className="space-y-2">
              <input
                type="text"
                value={newProduct}
                onChange={(e) => setNewProduct(e.target.value)}
                placeholder="Enter Product SKU/Description"
                className="input input-bordered w-full mb-2"
              />
              <button onClick={handleAddProduct} className="btn btn-outline">
                Add Product
              </button>
            </div>

            {/* Product List */}
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Added Products</h4>
              {orderData.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between space-x-4 mb-2"
                >
                  <p>{product.description}</p>
                  <div className="flex items-center space-x-2">
                    {/* Quantity Stepper */}
                    <button
                      onClick={() => handleQuantityChange(product.id, -1)}
                      className="btn btn-outline"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">
                      {product.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(product.id, 1)}
                      className="btn btn-outline"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="btn btn-outline btn-danger"
                  >
                    Remove
                  </button>
                  {/*<button className="btn btn-outline">Preview</button>*/}
                </div>
              ))}
            </div>

            {/* Submit Button */}
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={toggleModal} className="btn btn-text">
                Cancel
              </button>
              <button onClick={handleSubmitOrder} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Shipment Modal */}
      {isShipmentModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Shipment Details</h2>
            <input
              type="text"
              name="address"
              value={shipmentData.address}
              onChange={handleShipmentInputChange}
              placeholder="Enter Address"
              className="input input-bordered w-full mb-2"
            />
            <select
              name="courier"
              value={shipmentData.courier}
              onChange={handleShipmentInputChange}
              className="select select-bordered w-full mb-2"
            >
              <option value="">Select Shipping Speed</option>
              <option value="Standard">Standard</option>
              <option value="Expedited">Expedited</option>
            </select>
            <div className="mt-4 flex justify-end space-x-2">
              <button onClick={toggleShipmentModal} className="btn btn-text">
                Cancel
              </button>
              <button
                onClick={handleSubmitShipment}
                className="btn btn-primary"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow">
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default OrdersPage;
