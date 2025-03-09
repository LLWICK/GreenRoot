const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: "https://example.com/default-profile.png"
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'farmer', 'researcher', 'seller', 'customer']
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
