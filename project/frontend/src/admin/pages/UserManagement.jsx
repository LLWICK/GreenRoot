import React from 'react'
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import BackButton from '../components/BackButton';

const UserManagement = () => {
    return (
        <>
            <div>
                <Sidebar />

                <div className='m-2 flex justify-start'>
                    <BackButton /> {/* Add Back Button Here */}
                </div>

                <div>
                    <Card />
                </div>

            </div>

        </>
    )
}

export default UserManagement