import React from 'react'
import { Link } from 'react-router-dom';

const Table = ({ user }) => {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Phone
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {user.map((user, index) => (
                            <tr key={user._id} style={{ backgroundColor: (index + 1) % 2 === 0 ? '#ffffff' : '#f9f0f0' }}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0 h-10 w-10">
                                            <img className="h-10 w-10 rounded-full" src={`/${user.image}`} alt={user.firstName} />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{user.firstName}</div>
                                            <div className="text-sm text-gray-500">{user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{user.phone}</div>
                                    <div className="text-sm text-gray-500">Optimization</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Link to={`/admin/user-management/user/edit/${user._id}`} className='ml-2 inline-block bg-indigo-500 hover:bg-indigo-700 text-white p-1.5 pl-3 pr-3 rounded-xl'>Edit</Link>
                                    <Link to={`/admin/user-management/user/delete/${user._id}`} className='ml-2 inline-block bg-red-500 hover:bg-red-700 text-white p-1.5 pl-3 pr-3 rounded-xl'>Delete</Link>
                                    <Link to={`/admin/user-management/user/view/${user._id}`} className="text-white bg-yellow-500 hover:bg-yellow-700 ml-1.5 inline-block p-1.5 pl-3 pr-3 rounded-xl">View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table