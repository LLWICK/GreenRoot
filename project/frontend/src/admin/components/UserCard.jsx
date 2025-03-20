import React from 'react'

const UserCard = ({ user }) => {
    return (
        <>
            <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
                <div className="flex flex-col items-center">
                    <img
                        src={`/${user.image}` || "/avatar.png"}
                        alt="User Avatar"
                        className="w-24 h-24 rounded-full object-cover mb-4"
                    />
                    <h2 className="text-xl font-bold">{`${user.firstName} ${user.lastName}`}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-gray-600">{user.phone}</p>
                </div>
                <div className="mt-4">
                    <p>
                        <span className="font-semibold">Role: </span>
                        {user.role}
                    </p>
                    <p>
                        <span className="font-semibold">Address: </span>
                        {user.address}
                    </p>
                    <p>
                        <span className="font-semibold">Status: </span>
                        {user.status || "active"}
                    </p>
                </div>
            </div>
        </>
    )
}

export default UserCard