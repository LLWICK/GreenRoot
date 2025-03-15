const User = require('../model/userModel.js');
const { hashPassword } = require('../utils/passwordUtils.js');

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
        req.body.role = isFirstAccount ? 'admin' : role;

        // Hash the password
        const hashedPassword = await hashPassword(password);
        req.body.password = hashedPassword; // Set the password as hashed password


        // Create new user
        const user = await User.create(req.body);

        res.status(201).json({
            msg: `User registered successfully`,
            data: user
        });

    } catch (error) {
        res.status(400).json({ err: 'Server error during Registration...' });
    }

};



module.exports = {
    register
};
