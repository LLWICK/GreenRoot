import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts';

const SalesChart = () => {

    const [data, setData] = useState([]);
    const chartRef = useRef(null);

    useEffect(() => {
        axios
            .get('http://localhost:3000/api/admin/report/sales/')
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err));
    }, []);



    return (
        <>

        </>
    )
}

export default SalesChart