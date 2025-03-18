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
            <div>
                <Table user={user} />
            </div>
        </>
    )
}

export default FarmerManage