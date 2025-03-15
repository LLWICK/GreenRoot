const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

//Import your routes using require , here

// Auth routes
const authRoutes = require("./admin/routes/auth.routes.js");

//Farmer routes import
const stockManage = require("./farmer/routes/stockRoute");
const cropManage = require("./farmer/routes/cropRoute");
const categoryManage = require("./farmer/routes/categoryRoute");
const fieldManage = require("./farmer/routes/fieldRoute");

const mongoURL = process.env.mongoURL;
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Put your routes here using app.use
/** User Routes */
app.use("/api/auth", authRoutes);

//Use farmer routes
app.use("/api/v1/stock", stockManage);
app.use("/api/v1/crops", cropManage);
app.use("/api/v1/category", categoryManage);
app.use("/api/v1/field", fieldManage);

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
