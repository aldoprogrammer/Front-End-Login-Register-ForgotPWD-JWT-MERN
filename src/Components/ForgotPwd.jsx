import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ForgotPwd() {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  Axios.defaults.withCredentials = true
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:3001/auth/forgot-pwd', {
      email,
    }).then(response => {
      if(response.data.status ){
        alert('check your email')
        navigate('/login')
      }
    }).catch(err => {
      console.log(err)
    })
  }
  return (
    <div className="flex items-center justify-center 
     w-screen h-screen bg-cyan-600">
      <Card color="white" shadow={true}
        className="p-5 md:w-2/5 w-10/12"
      >
        <Typography variant="h4" color="blue-gray">
          Reset Password
        </Typography>
        <form className="mt-8 mb-2 w-full max-w-screen-lg 
      " onSubmit={handleSubmit}>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              onChange={(e) => setEmail(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900
            "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

           
          </div>
         
          <Button className="mt-6 w-full" type="submit">
            Send Reset Link
          </Button>
          <Typography color="gray" className="mt-4 text-center 
         font-normal">
            Dont have an account?{" "}
            <a href="/signup" className="font-medium text-gray-900 
          ">
              Register
            </a>
          </Typography>
         
        </form>
      </Card>
    </div>
  );
}