import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data, status } = await axios.post(
                "http://localhost:3000/api/auth/login",
                { email, password },
                { withCredentials: true }
            );

            if (status === 200) {
                const token = Cookies.get("authToken");
                console.log("Token:", token);

                if (token) {
                    const payload = JSON.parse(atob(token.split(".")[1]));

                    switch (payload.role) {
                        case "admin":
                            navigate(`/admin/${data.data.id}/dashboard`);
                            break;
                        case "farmer":
                            navigate(`/farmer/${data.data.id}/dashboard`);
                            break;
                        case "seller":
                            navigate(`/seller/${data.data.id}/dashboard`);
                            break;
                        case "researcher":
                            navigate(`/researcher/${data.data.id}/dashboard`);
                            break;
                        default:
                            navigate("/");
                    }
                }
            }
        } catch (error) {
            alert("Incorrect credentials");
            console.error("Login failed:", error);
        }
    };

    return (
        <form onSubmit={handleLogin} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
            />

            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
