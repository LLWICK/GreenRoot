const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser"); // cookie-parser

const app = express();

// cookie-parser middleware
app.use(cookieParser());

app.use(cors());


//Import your routes using require , here

// Auth routes
const authRoutes = require("./admin/routes/auth.routes.js");
const adminRoutes = require("./admin/routes/admin.routes.js"); // admin routes

//Farmer routes import
const stockManage = require("./farmer/routes/stockRoute");
const cropManage = require("./farmer/routes/cropRoute");


const { authenticateUser } = require("./admin/middleware/auth.middleware.js");


const categoryManage = require("./farmer/routes/categoryRoute");
const fieldManage = require("./farmer/routes/fieldRoute");


const orderManage = require("./customer/routes/orderRoute");

const mongoURL = process.env.mongoURL;
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Put your routes here using app.use
/** User Routes */
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);

//Use farmer routes
app.use("/api/v1/stock", stockManage);
app.use("/api/v1/crops", cropManage);
app.use("/api/v1/category", categoryManage);
app.use("/api/v1/field", fieldManage);

//customer Routes
app.use("/api/v1/orders", orderManage);

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
