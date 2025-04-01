import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const AskQuestion = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [userId, setUserId] = useState("");
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const authToken = Cookies.get("authToken");
        if (authToken) {
            try {
                const decodedToken = JSON.parse(atob(authToken.split(".")[1])); // Decode JWT
                setUserId(decodedToken.userId);
                fetchUserQuestions(decodedToken.userId);
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
    }, []);

    const fetchUserQuestions = async (userId) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/qna/questions/${userId}`);
            setQuestions(response.data);
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !message) {
            Swal.fire("Error", "All fields are required!", "error");
            return;
        }

        try {
            await axios.post("http://localhost:3000/api/qna/create", {
                title,
                message,
                userId
            });

            Swal.fire("Success", "Question submitted successfully!", "success");
            setTitle("");
            setMessage("");
            fetchUserQuestions(userId);
        } catch (error) {
            console.error("Error submitting question:", error);
            Swal.fire("Error", "Failed to submit question", "error");
        }
    };

    const handleViewQuestion = (question) => {
        let repliesText = question.replies.length
            ? question.replies.map((reply) => `<p><strong>Admin:</strong> ${reply.message}</p>`).join("")
            : "<p>No replies yet</p>";

        Swal.fire({
            title: question.title,
            html: `<p><strong>Question:</strong> ${question.message}</p>${repliesText}`,
            confirmButtonText: "Close"
        });
    };

    return (
        <section className="bg-gray-100 py-16" id="contact">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-lg font-semibold uppercase text-blue-600">Q&A Forum</p>
                    <h2 className="text-3xl font-bold text-gray-900">Ask a Question</h2>
                    <p className="text-gray-600 mt-2">Have any questions? Feel free to ask!</p>
                </div>

                {/* Form Section */}
                <div className="grid md:grid-cols-2 gap-10">
                    <div>
                        <p className="text-lg text-gray-600">
                            Ask any question related to your concern. Our team will respond as soon as possible.
                        </p>
                    </div>

                    <div className="bg-white p-8 shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Submit Your Question</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    placeholder="Question Title"
                                    className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    cols="30"
                                    rows="5"
                                    placeholder="Write your question..."
                                    className="w-full rounded-lg border border-gray-300 bg-white py-3 px-4 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-6 py-3 font-medium rounded-lg hover:bg-blue-700 transition-all"
                                >
                                    Submit Question
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Previous Questions Section */}
                <div className="mt-12 bg-white p-8 shadow-lg rounded-lg">
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Your Previous Questions</h3>
                    {questions.length === 0 ? (
                        <p className="text-gray-500">No questions found.</p>
                    ) : (
                        <ul className="space-y-4">
                            {questions.map((question) => (
                                <li
                                    key={question._id}
                                    className="flex justify-between items-center border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
                                >
                                    <span className="text-lg font-medium text-gray-800">{question.title}</span>
                                    <button
                                        onClick={() => handleViewQuestion(question)}
                                        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition-all"
                                    >
                                        View
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AskQuestion;
