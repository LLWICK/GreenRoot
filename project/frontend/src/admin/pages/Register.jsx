import axios from 'axios';
import React, { useState } from 'react';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

import NavBar2 from '@/Common/NavBar2';
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
                setFormImage(`https://b3075642.smushcdn.com/3075642/wp-content/uploads/Canva-Farmer-in-sugar-beet-field-1-scaled.jpg?lossy=1&strip=1&webp=1`);
                break;
            case "seller":
                setFormImage(`https://t4.ftcdn.net/jpg/10/60/16/15/360_F_1060161597_v6l6h7STA8bg4ByQZakuN7ymQNpPAk4Z.jpg`);
                break;
            case "customer":
                setFormImage(`https://media.gettyimages.com/id/2153978519/video/girl-customer-and-shopping-for-vegetables-at-market-with-peppers-tomato-and-organic-grocery.jpg?s=640x640&k=20&c=yjO3qm-bzAZgkSHAScPaZcb98J00kPgy7Wey2sQK84g=`);
                break;
            case "researcher":
                setFormImage(`https://www.asianscientist.com/wp-content/uploads/bfi_thumb/In-the-lab-WEF-scientists-pexels-20200527-3azizvm6d5i6kyzhmhmigw.jpeg`);
                break;
            default:
                setFormImage(`https://img.freepik.com/free-photo/delivery-concept-handsome-african-american-delivery-man-carrying-package-box-grocery-food-drink-from-store-isolated-grey-studio-background-copy-space_1258-1232.jpg`);
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
                <NavBar2 />
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