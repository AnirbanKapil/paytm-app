import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

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
    <div className="flex flex-col justify-center items-center mx-auto">
      <div className="p-6 bg-white rounded-2xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">First Name - {user.firstname}</h1>
      <h1 className="text-2xl font-bold"> Last Name - {user.lastname}</h1>
      <h2 className="font-extralight">Username - {user.username}</h2>
      </div>
      <button className="bg-blue-400 p-2 m-2 rounded-lg">Send Money</button>
    </div>
  )
}

export default UserProfile