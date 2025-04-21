import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF'];

const QuestionTitleChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/qna/questions/all');
                const questions = response.data;

                // Count occurrences of each title
                const categoryCounts = questions.reduce((acc, question) => {
                    acc[question.title] = (acc[question.title] || 0) + 1;
                    return acc;
                }, {});

                // Convert to array format for Recharts
                const formattedData = Object.keys(categoryCounts).map(title => ({
                    title,
                    count: categoryCounts[title]
                }));

                setData(formattedData);
            } catch (error) {
                console.log(error);
            }
        };

        fetchQuestions();
    }, []);

    return (
        <div className='p-5'>
            <h2 className='text-center text-lg font-bold'>Questions Categorized by Title</h2>
            <ResponsiveContainer width="75%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="title"
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        label
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default QuestionTitleChart;
