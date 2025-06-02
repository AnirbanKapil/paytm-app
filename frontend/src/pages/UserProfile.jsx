import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { User } from "lucide-react"; 
import { Button } from "@/components/ui/button";

function UserProfile() {

  const resId = useParams()
  
  const [user,setUser] = useState({
    username : "",
    firstname : "",
    lastname : ""
  })

  const getUserProfile = async () => {
      const res = await axios.get(`http://localhost:3000/api/v1/getuserid/${resId.id}`) 
      const data = res.data.data
      setUser({username : data.username,firstname : data.firstname,lastname : data.lastname})
    }
  
  useEffect(()=>{
     getUserProfile()
     
   },[])
   

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
      <User className="h-10 w-10 bg-red-400 rounded-4xl" /><h1 className="text-2xl font-bold">First Name - {user.firstname}</h1>
      <h1 className="text-2xl font-bold"> Last Name - {user.lastname}</h1>
      <h2 className="font-extralight">Username - {user.username}</h2>
      </div>
      <Link to="/amounttransfer"><Button className="bg-blue-400 p-2 m-2 rounded-lg">Send Money</Button></Link>
    </div>
  )
}

export default UserProfile