import { Button } from '@material-tailwind/react'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config/config'


const Dashboard = () => {
    const navigate = useNavigate();
    const apiURL = BASE_URL;

    useEffect(() => {
        axios.get(`${apiURL}/auth/verify`)
        .then(res => {
            if(res.data.status){
                console.log(res.data)
            }
            else {
                navigate('/login');s
            }
        })

    })
  return (
    <div>
        <p>Dashboard</p>

        <Button>Logout</Button>
          
        
    </div>
  )
}

export default Dashboard