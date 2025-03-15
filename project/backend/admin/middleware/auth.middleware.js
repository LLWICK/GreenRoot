const validateUser = (req, res, next) => {
    const { firstName, lastName, address, phone, email, password, role } = req.body;

    if (!firstName || !lastName || !address || !phone || !email || !password || !role) {
        return res.status(400).json({ error: `All fields are required!` });
    }
    next();
};

module.exports = {
    validateUser
};
