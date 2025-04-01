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

//researcher middleware
const path = require("path");
app.use(
  "/researcher/uploads",
  express.static(path.join(__dirname, "researcher/uploads"))
);

app.use(
  cors({
    origin: "http://localhost:5173", // Explicitly allow frontend origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

//Import your routes using require , here

/** Admin Routes */
// Auth routes
const authRoutes = require("./admin/routes/auth.routes.js");
const adminRoutes = require("./admin/routes/admin.routes.js"); // admin routes
// user management routes (Admin)
const userManagement = require("./admin/routes/user.routes.js");
// Q&A management routes (Admin)
const qnaManagement = require("./admin/routes/question.routes.js");

//Farmer routes import
const stockManage = require("./farmer/routes/stockRoute");
const cropManage = require("./farmer/routes/cropRoute");
const ticketManage = require("./farmer/routes/ticketRoute.js");
const farmerScheduleManage = require("./farmer/routes/scheduleRoute.js");
const categoryManage = require("./farmer/routes/categoryRoute");
const fieldManage = require("./farmer/routes/fieldRoute");
const orderManageFarmer = require("./farmer/routes/orderRoute.js");

const { authenticateUser } = require("./admin/middleware/auth.middleware.js");

//Common routes

const paymentManage = require("./common/routes/paymentRoute.js");
const otpManage = require("./common/routes/otpRoute.js");

//Customer route import
const orderManage = require("./customer/routes/orderRoute.js");
const addtocartManage = require("./customer/routes/AddtoCartRoute.js");

//Researcher routes import
const postRoutes = require("./researcher/routes/postRoutes.js");
const newsRoutes = require("./researcher/routes/newsRoutes.js");
const pndRoutes = require("./researcher/routes/pndRoutes.js");
const solutionRoutes = require("./researcher/routes/solutionRoutes.js");

//retail seller route imports
const getCropRoutesRS = require("./seller/routes/cropRoutes(rs)");
const cartRoutes = require("./seller/routes/cartRoutes");
const productRoutes = require("./seller/routes/productRoutes.js");
const paymentRoutes = require("./seller/routes/stripeRoute.js");
const bulkOrderRoutes = require("./seller/routes/bulkOrderRoutes.js");
const statDataRoutes = require("./seller/routes/statDataRoutes.js");
const FarmerToDoRoutes = require("./seller/routes/TodoListRoutes.js");

const mongoURL = process.env.mongoURL;
const port = process.env.PORT;

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//Put your routes here using app.use
/** Admin Routes */
app.use("/api/qna", qnaManagement);
app.use("/api/auth", authRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userManagement);


//Use farmer routes
app.use("/api/v1/stock", stockManage);
app.use("/api/v1/crops", cropManage);
app.use("/api/v1/category", categoryManage);
app.use("/api/v1/field", fieldManage);
app.use("/api/v1/ticket", ticketManage);
app.use("/api/v1/payment", paymentManage);
app.use("/api/v1/farmer/schedule", farmerScheduleManage);
app.use("/api/v1/farmer/order", orderManageFarmer);

//Use OTP route

app.use("/api/v1/otp", otpManage);

//customer Routes
app.use("/api/customer/orders", orderManage);
app.use("/api/customer/addtocart", addtocartManage);

//Researcher Routes
app.use("/api/researcher/posts", postRoutes);
app.use("/api/researcher/news", newsRoutes);
app.use("/api/researcher/pnd", pndRoutes);
app.use("/api/researcher/solutions", solutionRoutes);

//retail seller

app.use("/api/RetailSeller/cart", cartRoutes);
app.use("/api/RetailSeller/crops", getCropRoutesRS);
app.use("/api/RetailSeller/products", productRoutes);
app.use("/api/RetailSeller/payment/stripe", paymentRoutes);
app.use("/api/RetailSeller/bulkOrder", bulkOrderRoutes);
app.use("/api/RetailSeller/stats", statDataRoutes);
app.use("/api/RetailSeller/farmers", FarmerToDoRoutes);


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
