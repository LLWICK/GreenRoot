const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

// import the cookieParser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Import your routes using require , here


// Auth routes
const authRoutes = require("./admin/routes/auth.routes.js");
const stockManage = require("./farmer/routes/stockRoute");


const mongoURL = process.env.mongoURL;
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Put your routes here using app.use
/** User Routes */
app.use('/api/auth', authRoutes);



app.use("/api/v1/stock", stockManage);

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
