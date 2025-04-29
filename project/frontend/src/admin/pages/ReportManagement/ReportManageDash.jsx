import React from 'react';
import Sidebar from '../../components/Sidebar';
import BackButton from '../../components/BackButton';

const ReportManageDash = () => {
    return (
        <>
            <div className='flex h-screen'>
                {/* SideBar */}
                <Sidebar />

                <div className="flex-1 p-6 ml-20">
                    <div className="mb-4">
                        <BackButton />
                    </div>

                    {/* Content */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h2 className="text-2xl font-semibold mb-4">Report Management</h2>

                    </div>
                </div>

            </div>
        </>
    )
}

export default ReportManageDash