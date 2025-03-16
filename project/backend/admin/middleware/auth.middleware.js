const validateUser = (req, res, next) => {
    const { firstName, lastName, address, phone, email, password, role } = req.body;

    if (!firstName || !lastName || !address || !phone || !email || !password || !role) {
        return res.status(400).json({ error: `All fields are required!` });
    }

    if (password.length < 6) {
        return res.status(400).json({ error: `Password must be at least 6 characters long!` });
    }

    next();
};

module.exports = {
    validateUser
};
