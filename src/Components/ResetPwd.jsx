import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from '../config/config';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from "react-toastify";

export default function ResetPwd() {
  const [password, setPassword] = useState('')
  const { token } = useParams()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/auth/reset-pwd/' + token, {
      password,
    }).then(response => {
      if(response.data.status ){
        toast.success('Password Successfully Reset')
        navigate('/login')
      }
    }).catch(err => {
      toast.error(err.response.data.message)
      
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
              New Password
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
         
          <Button className="mt-6 w-full" type="submit">
            Reset Password
          </Button>
         
        </form>
      </Card>
    </div>
  );
}