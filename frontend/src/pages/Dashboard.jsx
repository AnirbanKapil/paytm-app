import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
import ActiveUsers from "../components/ActiveUsers/ActiveUsers";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [user,setUser] = useState([])
  const [filter,setFilter] = useState("")

  useEffect(()=>{
     axios.get(`http://localhost:3000/api/v1/getusers?filter=${filter}`)
      .then((response)=> setUser(response.data.data))

  },[filter])
      

  return (
    <>
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-3xl mx-auto mt-10">

      <div className="flex gap-4 items-center">
        <Input
          onChange= {(e)=> setFilter(e.target.value)}
          type="text"
          placeholder="search user"
          className="flex-1"
        />
        
      </div>
      <div>
        <ActiveUsers users={user}/>
      </div>
    </div>
    </>
  );
}

export default Dashboard