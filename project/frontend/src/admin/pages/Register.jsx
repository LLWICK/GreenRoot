import axios from 'axios';
import React, { useState } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

// import svg
import sellerImg from "../extras/register_img/undraw_seller.svg";
import customerImg from "../extras/register_img/undraw_customer.svg";
import researcherImg from "../extras/register_img/undraw_research.svg";
import farmerImg from "../extras/register_img/undraw_farmer.svg";
import delivaryPersonImg from "../extras/register_img/undraw_delivery.svg";
import NavBar from './home/home_components/NavBar';
import Footer from './home/home_components/Footer';

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        role: "",
        image: "avatar.png",
    });

    // set form background image
    const [formImage, setFormImage] = useState(
        "https://example.com/default-image.png"
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRoleSelection = (role) => {
        setFormData({ ...formData, role: role });

        // change the form backgdound image
        switch (role) {
            case "farmer":
                setFormImage(`${farmerImg}`);
                break;
            case "seller":
                setFormImage(`${sellerImg}`);
                break;
            case "customer":
                setFormImage(`${customerImg}`);
                break;
            case "researcher":
                setFormImage(`${researcherImg}`);
                break;
            default:
                setFormImage(`${delivaryPersonImg}`);
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(`http://localhost:3000/api/auth/register`, formData)
                .then((res) => {
                    navigate('/auth/login'); // navigate to the login page

                    Swal.fire({
                        title: "Registeration successfull!",
                        text: "",
                        timer: 1500,
                        showConfirmButton: false,
                        icon: "success"
                    });
                });

        } catch (error) {
            console.log(err);

        }
    };

    return (
        <>
            <>
                <NavBar />
            </>
            <section className="bg-white">
                <div className="flex justify-center min-h-screen">
                    {/* Form Image */}
                    <div
                        className="hidden bg-cover lg:block lg:w-3/5"
                        style={{
                            backgroundImage: `url(${formImage})`,
                        }}
                    ></div>

                    {/* Form */}
                    <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                        <div className="w-full">
                            <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize">
                                Get your free account now.
                            </h1>

                            <p className="mt-4 text-gray-500">
                                Select your role to get started.
                            </p>

                            {/* Role Selection Buttons */}
                            <div className="mt-6">
                                <div className="flex flex-wrap gap-4">
                                    {["farmer", "seller", "customer", "researcher", "deliveryPerson"].map((role) => (
                                        <button
                                            key={role}
                                            onClick={() => handleRoleSelection(role)}
                                            className={`px-4 py-2 rounded-lg ${formData.role === role
                                                ? "bg-blue-700 text-white"
                                                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                                                }`}
                                        >
                                            {role.charAt(0).toUpperCase() + role.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Form Fields */}
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="First Name"
                                        required
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Last Name"
                                        required
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Address"
                                        required
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        required
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-700">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Password"
                                        required
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-700">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm Password"
                                        required
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        required
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-lg"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="col-span-2 flex items-center justify-center w-full px-6 py-3 mt-4 text-sm tracking-wide text-white bg-blue-500 hover:bg-blue-600 cursor-pointer rounded-lg"
                                >
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <>
                <Footer />
            </>
        </>
    )
}

export default Register