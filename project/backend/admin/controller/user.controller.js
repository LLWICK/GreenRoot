const User = require("../model/userModel.js");

// get all users by role
const getUsersByRole = async (req, res, role) => {
    try {
        const users = await User.find({ role });
        res.status(200).json({ data: users });

    } catch (error) {
        res.status(500).json({ message: `Error while fetching data `, error });
    }
};

module.exports = {
    getUsersByRole
}