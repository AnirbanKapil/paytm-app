import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"

function UserProfile() {

  const resId = useParams()
  console.log(resId.id)
  
  useEffect(()=>{
      await axios.get(`http://localhost:3000/api/v1/getuserid/${resId._id}`) 
   },[])
   

  return (
    <div>UserProfile</div>
  )
}

export default UserProfile