const User = require('../model/userModel.js');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('../utils/passwordUtils.js');

const register = async (req, res) => {
    // check if the user is first user in the database and if it is update the role as admin
    const isFirstAccount = (await User.countDocuments()) == 0;
    let userType = req.body.role; // store the user type

    req.body.role = isFirstAccount ? 'admin' : userType;

    // hash the password
    const hashedPassword = hashPassword(req.body.password);
    req.body.password = hashedPassword; // set the password as hashed password

    // create new user
    const user = await User.create(req.body);

    res.status(201).json({
        msg: `User registered successfully`,
        data: user
    });
}