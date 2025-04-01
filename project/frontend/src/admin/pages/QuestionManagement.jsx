import { Link } from "react-router-dom";

const QuestionManagement = () => {
    const questionTypes = [
        { id: 1, title: "General Inquiry" },
        { id: 2, title: "Technical Support" },
        { id: 3, title: "Product Feedback" },
        { id: 4, title: "Account Issues" },
        { id: 5, title: "Other" },
    ];

    return (
        <div className="container mx-auto py-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Manage Questions by Type
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {questionTypes.map((type) => (
                    <div key={type.id} className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">{type.title}</h3>
                        <p className="text-gray-600 mb-6">
                            Manage questions of this type. View, edit, and respond to inquiries.
                        </p>
                        <Link
                            to={`/admin/questions/${type.id}`}
                            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            View Questions
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionManagement;
