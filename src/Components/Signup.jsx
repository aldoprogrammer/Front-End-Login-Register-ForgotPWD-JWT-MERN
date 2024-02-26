import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
 
export default function Signup() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    
  }
  return (
    <div className="flex items-center justify-center 
     w-screen h-screen bg-cyan-600">
     <Card color="white" shadow={true}
     className="p-5 md:w-2/5 w-10/12"
     >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-full max-w-screen-lg 
      " onSubmit={handleSubmit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
            size="lg"
            placeholder="name@mail.com"
            onChange={(e) => setUsername(e.target.value)}
            className=" !border-t-blue-gray-200 
            focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
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
        <Button className="mt-6 md:w-full w-10/12">
          sign up
        </Button>
        <Typography color="gray" className="mt-4 text-center 
        md:w-full w-10/12 font-normal">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-gray-900 
          md:w-full w-10/12">
            Login
          </a>
        </Typography>
      </form>
    </Card>
    </div>
  );
}