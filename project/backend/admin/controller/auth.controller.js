const User = require("../model/userModel.js");
const { hashPassword, comparePassword } = require("../utils/passwordUtils.js");
const { createJWToken } = require("../utils/tokenUtils.js");

const register = async (req, res) => {
  try {
    const { email, password, confirmPassword, role } = req.body;

    // check if the password is match
    if (password !== confirmPassword) {
      res.status(400).json({ msg: `Password is not match...` });
    }

    // check if the user already exists
    const isUserexists = await User.findOne({ email });
    if (isUserexists) {
      return res.status(400).json({ err: `User already exists...` });
    }

    // Check if the user is the first user in the database and if it is, update the role to admin
    const isFirstAccount = (await User.countDocuments()) == 0;
    req.body.role = isFirstAccount ? "admin" : role;

    // Hash the password
    const hashedPassword = await hashPassword(password);
    req.body.password = hashedPassword; // Set the password as hashed password

    // Create new user
    const user = await User.create(req.body);

    res.status(201).json({
      msg: `User registered successfully`,
      data: user,
    });
  } catch (error) {
    res.status(400).json({ err: "Server error during Registration..." });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ err: `Email and password are required!` });
    }

    // check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ err: `User not found!` });
    }

    // check if the password is match
    const isPasswordMatch = comparePassword(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ err: `Invalid Password!` });
    }

    // create a jwt token
    const token = createJWToken(user._id, user.role);

    // set the token into a cookie
    res.cookie("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      msg: `Login successful!`,
      data: { id: user._id, role: user.role },
    });
  } catch (error) {
    res.status(500).json({ err: `something went wrong, please try again...` });
  }
};

const logout = (req, res) => {
  try {
    // clear the cookie
    res.clearCookie("authToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    res.status(200).json({ msg: `Logout successful!` });
  } catch (error) {
    res.status(500).json({ err: `Something went wrong. Please try again` });
  }
};

module.exports = {
  register,
  login,
  logout,
};
