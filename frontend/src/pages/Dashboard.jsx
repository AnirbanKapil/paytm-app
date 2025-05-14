import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import ActiveUsers from "../components/ActiveUsers/ActiveUsers";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [user,setUser] = useState([])

  const handleClick =  (e) => {
    e.preventDefault()
      axios.get("http://localhost:3000/api/v1/getusers")
      .then((response)=> setUser(response.data.data))
  } 

  return (
    <>
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-3xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-4"></h1>
      <div className="flex gap-4 items-center">
        <Input
          type="text"
          placeholder="Full Name"
          className="flex-1"
        />
        <Button variant="default" size="sm" onClick={handleClick}>
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
      <div>
        <ActiveUsers users={user}/>
      </div>
    </div>
    </>
  );
}

export default Dashboard