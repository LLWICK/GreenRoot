import React from 'react'
// import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';
import NavBar from './home/home_components/NavBar';
import UserRoleChart from '../components/UserRoleChart';
// import Footer from './home/home_components/Footer';


function AdminDash() {
    // const navigate = useNavigate();

    return (
        <div>
            <>
                <NavBar />
            </>

            <div className='px-6'><h1 className='text-3xl my-4'>Admin Dashboard</h1></div>

            {/* user role chart */}
            <div className='flex justify-center items-center'>
                <div className='container p-4'>
                    <UserRoleChart />
                </div>
            </div>


            <>
                <div className='p-4'>

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
        </div>
    )
}

export default AdminDash