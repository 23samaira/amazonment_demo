"react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/Orders/OrdersPage.js";
import Products from "./pages/Products/Products.js";
import ProductDetails from "./pages/Products/ProductDetails.js";
import React, { useState } from "react";

function App() {
  // States for mobile number and OTP
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false); // To toggle OTP input visibility
  const [isVerified, setIsVerified] = useState(false); // To track OTP verification

  // Function to handle mobile number submission
  const handleMobileSubmit = (event) => {
    event.preventDefault();

    if (mobileNumber.match(/^[0-9]{10}$/)) {
      // Simulate OTP sending
      setOtpSent(true);
      alert(`OTP sent to ${mobileNumber}`);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  // Function to handle OTP verification
  const handleOtpVerification = (event) => {
    event.preventDefault();

    if (otp === "123456") {
      // Simulate successful OTP verification
      setIsVerified(true);
      alert("OTP verified successfully!");
    } else {
      alert("Invalid OTP. Please try again.");
    }
  };

  // Landing page after OTP verification
  if (isVerified) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/OrdersPage" element={<OrdersPage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    );
  }
  if (!isVerified) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-green-500">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-xl">
          {!otpSent ? (
            <>
              <h1 className="text-2xl font-bold text-center text-gray-800">
                Welcome Back!
              </h1>
              <p className="mt-2 text-center text-gray-600">
                Enter your mobile number to continue
              </p>
              <form onSubmit={handleMobileSubmit} className="mt-6">
                {/* Mobile Number Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Mobile Number</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="input input-bordered w-full"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    required
                    pattern="[0-9]{10}" // Ensures a 10-digit number
                  />
                </div>
                {/* Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-full bg-blue-600 hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-center text-gray-800">
                Verify OTP
              </h1>
              <p className="mt-2 text-center text-gray-600">
                Enter the OTP sent to {mobileNumber}
              </p>
              <form onSubmit={handleOtpVerification} className="mt-6">
                {/* OTP Input */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">OTP</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="input input-bordered w-full"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    pattern="[0-9]{6}" // Ensures a 6-digit OTP
                  />
                </div>
                {/* Verify Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary w-full bg-green-600 hover:bg-green-700"
                  >
                    Verify
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
