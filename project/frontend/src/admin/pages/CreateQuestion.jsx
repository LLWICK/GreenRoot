import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const CreateQuestion = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        // Decode token and get userId
        const authToken = Cookies.get("authToken");
        if (authToken) {
            try {
                const decodedToken = JSON.parse(atob(authToken.split(".")[1])); // Decode JWT
                setUserId(decodedToken.userId);
                console.log(userId);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !message) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/api/qna/create", {
                title,
                message,
                userId
            });

            alert("Question created successfully!");
            setTitle("");
            setMessage("");
        } catch (error) {
            console.error("Error creating question:", error);
            alert("Failed to create question");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-4">Ask a Question</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="Enter your question"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateQuestion;
