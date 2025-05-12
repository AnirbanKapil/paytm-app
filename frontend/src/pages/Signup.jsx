
import { Link } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useState } from "react";
import axios from "axios"

const SignupPage = () => {

  const [firstname,setFirstName] = useState("")
  const [lastname,setLastName] = useState("")
  const [username,setUserName] = useState("")
  const [password,setPassword] = useState("")
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(firstname,lastname,username,password) 
    axios.post("http://localhost:3000/api/v1/signup",{
         firstname,
         lastname,
         username,
         password
     })
  }
  
  
  return (
    <div className="min-h-1/2 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-28">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
          <h3 className="text-center font-extralight">Enter your info to create an account</h3>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4">
            <Input type="text" placeholder="First Name" value={firstname} onChange={(e)=> setFirstName(e.target.value)} required />
            <Input type="text" placeholder="Last Name" value={lastname} onChange={(e)=> setLastName(e.target.value)} required />
            <Input type="text" placeholder="Username" value={username} onChange={(e)=> setUserName(e.target.value)} required />
            <Input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required />

            <Button onClick={handleSubmit} type="submit" className="mt-4 w-full">
              Sign Up
            </Button>
            <div className="flex justify-center">
             <h3 className="text-center font-extralight">Already have an account ??</h3>
             <Link className="mx-1" to="/signin">SignIn</Link>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupPage;
