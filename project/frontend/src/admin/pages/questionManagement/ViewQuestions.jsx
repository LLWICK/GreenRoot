import React from "react";
import { useLocation } from "react-router-dom";

const ViewQuestions = () => {
    const location = useLocation();
    const { questions, typeTitle } = location.state || { questions: [], typeTitle: "Unknown" };

    console.log("Questions received in ViewQuestions:", questions); // Debugging

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Questions for {typeTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {questions.length > 0 ? (
                    questions.map((question) => (
                        <div key={question._id} className="bg-white p-4 rounded-lg shadow">
                            <h4 className="font-semibold text-lg">{question.customTitle || question.title}</h4>
                            <p className="text-gray-700">{question.message}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No questions found for this type.</p>
                )}
            </div>
        </div>
    );
};

export default ViewQuestions;
