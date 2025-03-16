const jwt = require('jsonwebtoken');

const createJWToken = (userId, role) => {
    return jwt.sign({ userId, role }, process.env.JWT_SECRET, {
        expiresIn: "1d",
    });
}

module.exports = { createJWToken };