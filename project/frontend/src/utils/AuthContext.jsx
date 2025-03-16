import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get("authToken");
        if (token) {
            const payload = JSON.parse(atob(token.split(".")[1]));
            setUser({ id: payload.id, role: payload.role });
        }
    }, []);

    const logout = () => {
        // remove the cookie
        Cookies.remove("authToken");
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, setUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);