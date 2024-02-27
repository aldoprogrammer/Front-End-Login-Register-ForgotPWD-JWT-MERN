import axios from 'axios'; // Import axios directly
import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
    });

    const handleLogout = async () => {
            localStorage.removeItem('token'); // Remove the token from localStorage
            toast.success('Logout Successfully');
            navigate('/login');
     
    };

    return (
        <div className='bg-cyan-600 w-screen h-screen flex items-center justify-center gap-10'>
            <p>Dashboard</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Dashboard;
