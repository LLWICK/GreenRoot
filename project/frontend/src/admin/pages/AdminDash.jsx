import React from 'react'
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import NavBar from './home/home_components/NavBar';
// import Footer from './home/home_components/Footer';
// import AdminSideBar from '../components/AdminSideBar';

function AdminDash() {
    // const navigate = useNavigate();

    return (
        <>
            <>
                <NavBar />
            </>
            {/* <AdminSideBar /> */}
            <Sidebar />
            <>
                <div className='p-4'>
                    <h1 className='text-3xl my-4'>Admin Dashboard</h1>
                    <button
                        className='bg-blue-600 text-white px-4 py-2 rounded-md'

                    >
                        <Link to={`/admin/user-management`} >
                            User Management
                        </Link>

                    </button>
                </div>
            </>
            {/* <><Footer /></> */}
        </>
    )
}

export default AdminDash