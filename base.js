const express = require("express");
const app = express();
const productsRoute = require("./products");
const ordersRoute = require("./orders");
const cors = require("cors");
app.use(
  cors({
    origin: "*", // Allow your front-end's origin
    // methods: ["GET", "POST", "OPTIONS"], // Allow HTTP methods
    //allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true, // If you need to include cookies or authorization headers
  })
);

// Middleware to use the products route at the root level
app.use("/", productsRoute);

// Middleware to use the orders route
app.use("/", ordersRoute);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Access products API at http://localhost:${PORT}/products`);
  console.log(`Access orders API at http://localhost:${PORT}/orders`);
});
