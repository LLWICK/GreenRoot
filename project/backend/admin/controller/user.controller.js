const User = require("../model/userModel.js");
const { hashPassword } = require("../utils/passwordUtils.js");

// get all users by role(Admin / Farmer / Seller)
const getUsersByRole = async (req, res, role) => {
    try {
        const users = await User.find({ role });
        res.status(200).json({ data: users });

    } catch (error) {
        res.status(500).json({ message: `Error while fetching data `, error });
    }
};

// create users
const createUser = async (req, res) => {
    try {
        const { email, password, confirmPassword } = req.body;

        // check the password is match
        if (password !== confirmPassword) {
            return res.status(400).json({ msg: `Password is not match...` });
        }

        // check if the user already exists
        const isUserexists = await User.findOne({ email });
        if (isUserexists) {
            return res.status(400).json({ err: `User already exists...` });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);
        req.body.password = hashedPassword;

        // Create new user
        const user = await User.create(req.body);

        res.status(201).json({
            msg: `User registered successfully`,
            data: user,
        });

    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// update user
const updateUser = async (req, res) => {
    try {
        const { firstName, lastName, address, phone, email, password, role, image, status } = req.body;

        if (!firstName || !lastName || !address || !phone || !email || !password || !role) {
            return res.status(400).json({ message: `All fields are required...` });
        }

        if (!image) {
            req.body.image = "../extras/avetar.png";
        }

        if (!status) {
            req.body.status = "active";
        }

        // hash the password
        const hashedPassword = await hashPassword(password);
        req.body.password = hashedPassword;

        const { id } = req.params;

        // update user
        const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(400).json({ message: `User update faild...` });
        }

        res.status(200).json({ message: 'User Updated successfully...', data: updatedUser });

    } catch (error) {
        res.status(500).json({ message: error });
    }
};

// delete user
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(400).json({ message: `User not found...` });
        }

        res.status(200).json({ message: `User deleted Successfully!` });

    } catch (error) {
        res.status(500).json({ message: `Something went wrong `, error });
    }
};


module.exports = {
    getUsersByRole,
    createUser,
    updateUser,
    deleteUser
}