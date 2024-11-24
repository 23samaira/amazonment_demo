const express = require("express");
const router = express.Router();
const products = require("./MOCK_DATA.json"); // Load the JSON directly

// Define the route to get all products
router.get("/products", (req, res) => {
  try {
    // Prepare the response with selected fields
    const response = products.map((product) => ({
      productId: product.id, // Correct key
      productSKU: product.SKU, // Correct key
      productName: product.product_name, // Correct key
      productQuantity: product.quantity, // Correct key
      productPrice: product.price, // Correct key
    }));

    res.json(response); // Send the response
  } catch (error) {
    console.error("Error processing products:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
