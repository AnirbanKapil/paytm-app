import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


function AmountTransfer() {
  const [name,setName] = useState("")
  const [amount,setAmount] = useState("")
  const [searchParams] = useSearchParams()
   
   const user = searchParams.get("name")
   const receiver = searchParams.get("id")
   
   
   const handleSendMoney = async () => {
     await axios.post("http://localhost:3000/api/v1/transfer",{receiver,amount},{withCredentials: true })
   }

   useEffect(()=>{
    setName(user)
   },[])

   return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1>Your current balance 500</h1>
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-3xl mx-auto mt-20">
       <h1>Sending Money To  , {name}</h1>
       <h3>Amount in Rs</h3>
      <input type="number" placeholder="Enter Amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
      <Button className="bg-blue-400 p-2 m-2 rounded-lg" onClick={handleSendMoney}>Send Money</Button>
    </div>
    </div>
  )
}

export default AmountTransfer