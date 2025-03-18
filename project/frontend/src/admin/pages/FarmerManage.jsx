import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Table from '../components/Table';

const FarmerManage = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/user/farmers')
            .then((res) => {
                setUser(res.data.data);

            })
            .catch((error) => {
                console.log(error);

            });
    }, []);


    return (
        <>
            <div className='m-4 p-4'>
                <button className=' text-white'><Link to={`/admin/user-management/farmer/create`} className='p-2.5 block bg-green-600 hover:bg-green-700'>Create New Account</Link></button>
                <div className='p-2.5'>
                    <Table user={user} />
                </div>
            </div>

        </>
    )
}

export default FarmerManage