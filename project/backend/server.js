const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

//Import your routes using require , here

// Auth routes
const authRoutes = require("./admin/routes/auth.routes.js");

const stockManage = require("./farmer/routes/stockRoute");

//retail seller route imports
const getCropRoutesRS = require("./seller/routes/cropRoutes(rs)")
const cartRoutes = require("./seller/routes/cartRoutes")

const mongoURL = process.env.mongoURL;
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Put your routes here using app.use
/** User Routes */
app.use("/api/auth", authRoutes);

/** Retail seller Routes */
app.use('/api/retailSeller/crops',getCropRoutesRS)
app.use('/api/retailSeller/cart',cartRoutes)

mongoose
  .connect(mongoURL)
  .then(() => {
    console.log("MongoDB Connected...");

    app.listen(port, () => {
      console.log(`Listening on port ${port} `);
    });
  })
  .catch((e) => {
    console.log("Not Connected!");
  });
