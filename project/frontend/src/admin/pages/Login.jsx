import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", data, {
                withCredentials: true, // Ensures cookies are sent and received
            });

            if (response.status === 200) {
                const token = Cookies.get("authToken");
                console.log("JWT TOKEN:", token);

                if (token) {
                    const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
                    switch (payload.role) {
                        case "admin":
                            navigate("/admin/dashboard");
                            break;
                        case "farmer":
                            navigate("/farmer/:uid/dashboard");
                            break;
                        case "seller":
                            navigate("/seller");
                            break;
                        case "researcher":
                            navigate("/researcher");
                            break;
                        default:
                            navigate("/home");
                    }
                }
            }
        } catch (err) {
            console.error("Login failed", err);
            setError("Incorrect email or password");
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

            {error && <p className="text-red-500 text-center mb-3">{error}</p>}

            <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
                Login
            </button>
        </form>
    );
};

export default Login;
