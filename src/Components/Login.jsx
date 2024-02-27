import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from '../config/config';
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/login', {
      email,
      password
    }).then(response => {
      if(response.data.status  ){
        localStorage.setItem('token', response.data.token);
        toast.success('Login Successfully')
        navigate('/dashboard')
      } else {
        toast.error(response.data.message)
      }
      
    }).catch(err => {
      toast.error(err);
    })
  }
  return (
    <div className="flex items-center justify-center 
     w-screen h-screen bg-cyan-600">
      <Card color="white" shadow={true}
        className="p-5 md:w-2/5 w-10/12"
      >
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
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

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900
            "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 w-full" type="submit">
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center 
         font-normal">
            Dont have an account?{" "}
            <a href="/sign-up" className="font-medium text-gray-900 
          ">
              Register
            </a>
          </Typography>
          <Typography color="gray" className="mt-4 text-center 
         font-normal">
            Forgot password?{" "}
            <a href="/forgot-pwd" className="font-medium text-gray-900 
          ">
              Reset Here
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  );
}