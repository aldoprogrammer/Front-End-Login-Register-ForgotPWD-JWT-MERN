import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='flex items-center justify-center 
    h-screen gap-4 bg-cyan-600 w-screen'>
    
        <Link to='/login' className=''>
          <Button block>Login</Button>
        </Link>
        <Link to='/sign-up'>
          <Button block>Register</Button>
        </Link>
        
    
    </div>
  );
};

export default Home;
