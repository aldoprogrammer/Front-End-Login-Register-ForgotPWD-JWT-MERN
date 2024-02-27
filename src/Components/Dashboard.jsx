import axios from 'axios'; // Import axios directly
import { Button } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/auth/verify', { headers: { 'Cache-Control': 'no-cache' } });
                if (!response.data.status) {
                    navigate('/login');
                }
            } catch (err) {
                console.error('Error verifying user:', err);
                navigate('/login');
            }
        };

        fetchData();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await axios.get('/auth/logout', { headers: { 'Cache-Control': 'no-cache' } });
            clearCookie('token'); // Clear the cookie
            toast.success('Logout Successfully');
            navigate('/login');
        } catch (err) {
            console.error('Error logging out:', err);
            toast.error('An error occurred while logging out');
        }
    };

    const clearCookie = (name) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    };

    return (
        <div className='bg-cyan-600 w-screen h-screen flex items-center justify-center gap-10'>
            <p>Dashboard</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
};

export default Dashboard;
