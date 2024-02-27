import { Button } from '@material-tailwind/react';
import axios from '../config/config';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/auth/verify')
        .then(res => {
            if (!res.data.status) {
                navigate('/login');
            }
        })
        .catch(err => {
            console.error('Error verifying user:', err);
            navigate('/login');
        });
    }, [navigate]);

    const handleLogout = async () => {
        try {
            const response = await axios.get('/auth/logout');
            if (response.data.status) {
                toast.success('Logout Successfully');
                navigate('/login');
            }
        } catch (err) {
            console.error('Error logging out:', err);
            toast.error('An error occurred while logging out');
        }
    };

    return (
        <div className='bg-cyan-600 w-screen h-screen flex items-center justify-center gap-10'>
            <p>Dashboard</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Dashboard;
