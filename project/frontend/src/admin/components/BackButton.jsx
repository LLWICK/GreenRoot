import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            onClick={() => navigate(-1)} // Navigate back to the previous page
        >
            Go Back
        </button>
    )
};

export default BackButton