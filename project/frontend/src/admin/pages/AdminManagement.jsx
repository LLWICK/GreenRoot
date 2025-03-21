import React, { useEffect, useState } from 'react';
import Table from '../components/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';

// back button
import BackButton from '../components/BackButton';


const AdminManagement = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/user/admins')
            .then((res) => {
                setUser(res.data.data);

            })
            .catch((error) => {
                console.log(error);

            });
    }, []);

    const totalUsers = user.length;

    return (
        <>

            <div className=' p-4 min-h-dvh' style={{ backgroundImage: `url('https://th.bing.com/th/id/OIP.kka96T6DXXAAIGxx0RoonAHaEK?rs=1&pid=ImgDetMain')` }}>

                <div className='m-2 flex justify-start'>
                    <BackButton /> {/* Add Back Button Here */}
                </div>

                <div className='m-2 flex justify-center items-center'>
                    <div className='inline-block pt-3 pb-3 pl-8 pr-8 bg-amber-500 hover:bg-emerald-600  ease-in-out transition-all duration-300'>
                        <div className='inline-block border-2 border-amber-50 pt-2 pb-2 pr-8 pl-8 hover:bg-amber-600  ease-in-out transition-all duration-300'>
                            <h1 className='text-white text-2xl'>Total {user.role}: {totalUsers}</h1>
                        </div>
                    </div>
                </div>

                <button className=' text-white'><Link to={`/admin/user-management/admin/create`} className='p-2.5 block bg-green-600 hover:bg-green-700'>Create New Account</Link></button>
                <div className='p-2.5'>
                    <Table user={user} />
                </div>
            </div>

        </>
    )
}

export default AdminManagement