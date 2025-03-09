const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const app = express();

//Import your routes using require , here

const stockManage = require("./farmer/routes/stockRoute");
const cropManage = require("./farmer/routes/cropRoute");

const mongoURL = process.env.mongoURL;
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Put your routes here using app.use

app.use("/api/v1/stock", stockManage);
app.use("/api/v1/crops", cropManage);

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
