import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useAuth = (allowedRole) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("authToken");

        if (!token) {
            navigate("/login"); // Redirect to login
            return;
        }

        try {
            const payload = JSON.parse(atob(token.split(".")[1]));

            if (payload.role !== allowedRole) {
                navigate("/login"); // Redirect if role doesn't match
            }
        } catch (error) {
            console.error("Invalid token:", error);
            navigate("/login");
        }
    }, [navigate, allowedRole]);
};

export default useAuth;
