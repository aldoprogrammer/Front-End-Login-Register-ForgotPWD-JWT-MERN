import { Button } from '@material-tailwind/react'
import axios from '../config/config';
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Dashboard = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('/auth/verify')
        .then(res => {
            if(res.data.status){
                // console.log(res.data)
            }
            else {
                navigate('/login');
            }
        })

    })

    const handleLogout = () => {
        axios.get('/auth/logout')
        .then(res => {
            if(res.data.status){
                navigate('/login');
            }
        }).catch(err => console.log(err))
    }
  return (
    <div>
        <p>Dashboard</p>

        <Button onClick={handleLogout}>Logout</Button>
          
        
    </div>
  )
}

export default Dashboard