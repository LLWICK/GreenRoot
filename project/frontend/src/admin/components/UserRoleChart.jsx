import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';


const UserRoleChart = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUserCounts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/user/allusers');
                const formattedData = response.data.map(item => ({
                    role: item._id,
                    count: item.count
                }));
                setData(formattedData);

            } catch (error) {
                console.log(error);
            }
        }
        fetchUserCounts();
    }, []);

    return (
        <div className='p-5'>
            <h2 className='text-center text-lg font-bold'>User Distribution by Role</h2>
            <ResponsiveContainer width="75%" height={400}>
                <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="role" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill='#8884d8' barSize={90} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default UserRoleChart