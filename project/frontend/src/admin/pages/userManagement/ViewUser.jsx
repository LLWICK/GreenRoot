import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserCard from '../../components/UserCard';


const ViewUser = () => {

    const [user, setUser] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/user/${id}`)
            .then((res) => {
                setUser(res.data.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <UserCard user={user} />
            <h1>{user.email}</h1>
            <h1>{user.address}</h1>

        </>
    )
}

export default ViewUser