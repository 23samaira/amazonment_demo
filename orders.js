const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// Define the route to get all orders
router.get("/orders", (req, res) => {
  const ordersFilePath = path.join(__dirname, "orders.json");

  // Read the JSON file
  fs.readFile(ordersFilePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading orders.json:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }

    try {
      const orders = JSON.parse(data);

      // Prepare the response with selected fields
      const response = orders.map((order) => ({
        orderId: order.id,
        customerName: order.name,
        platform: order.Platform, // Match JSON field name exactly
        priority: order.Priority, // Match JSON field name exactly
      }));

      // Send the response
      res.json(response);
    } catch (parseError) {
      console.error("Error parsing orders.json:", parseError);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
});

module.exports = router;
