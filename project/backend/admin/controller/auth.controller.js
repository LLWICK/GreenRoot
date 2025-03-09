const User = require('../model/userModel.js');
const { hashPassword } = require('../utils/passwordUtils.js');

const register = async (req, res) => {

    // Check if the user already exists
    const isUserexists = await User.findOne({ email: req.body.email });
    if (isUserexists) {
        return res.status(400).json({ error: `User already exists...` });
    }

    // Check if the user is the first user in the database and if it is, update the role to admin
    const isFirstAccount = (await User.countDocuments()) == 0;
    let userType = req.body.role; // Store the user type

    req.body.role = isFirstAccount ? 'admin' : userType;

    // Hash the password
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword; // Set the password as hashed password

    // Create new user
    const user = await User.create(req.body);

    res.status(201).json({
        msg: `User registered successfully`,
        data: user
    });
};

module.exports = {
    register
};
