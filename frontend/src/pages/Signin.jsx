import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useState } from "react";
import axios from "axios";

function Signin() {
  
  const [username,setUserName] = useState("")
  const [password,setPassword] = useState("")

  const handleSubmit = (e) => {
     e.preventDefault() 
    axios.post("http://localhost:3000/api/v1/signin",{
      username,
      password
    })
  }

  return (
    <div className="min-h-1/2 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-28">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In To Your Account</CardTitle>
          <h3 className="text-center font-extralight">Enter your info to create an account</h3>
        </CardHeader>

        <CardContent>
          <form className="flex flex-col gap-4">
            <Input value = {username} onChange = {(e)=> setUserName(e.target.value)} type="text" placeholder="Username" required />
            <Input value = {password} onChange = {(e)=> setPassword(e.target.value)} type="password" placeholder="Password" required />

            <Button onClick = {handleSubmit} type="submit" className="mt-4 w-full">
              Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Signin