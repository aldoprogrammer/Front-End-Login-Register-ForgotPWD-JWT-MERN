import { Button } from '@material-tailwind/react';
import axios from '../config/config';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Dashboard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Retrieve token from local storage
        const token = localStorage.getItem('token');

        // Verify user using the token
        if (!token) {
            navigate('/login');
        } else {
            axios.get('/auth/verify', {
                headers: {
                    Authorization: `Bearer ${token}` // Send token in Authorization header
                }
            })
            .then(res => {
                if(res.data.status) {
                    console.log(res.data);
                } else {
                    navigate('/login');
                }
            })
            .catch(err => {
                console.error(err);
                navigate('/login');
            });
        }
    }, [navigate]);

    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem('token');
        
        // Logout user
        axios.get('/auth/logout')
        .then(res => {
            if(res.data.status) {
                toast.success('Logout Successfully');
                navigate('/login');
            }
        }).catch(err => console.error(err));
    }

    return (
        <div className='bg-cyan-600 w-screen h-screen flex items-center justify-center gap-10'>
            <p>Dashboard</p>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    );
}

export default Dashboard;
