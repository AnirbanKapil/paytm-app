import { Button } from "@/components/ui/button";

function AmountTransfer() {
   return (
    <div className="p-6 bg-white rounded-2xl shadow-md max-w-3xl mx-auto mt-32">
       <h1>Send Money To</h1> 
      <input type="text" placeholder="Enter Amount"/>
      <Button className="bg-blue-400 p-2 m-2 rounded-lg">Send Money</Button>
    </div>
  )
}

export default AmountTransfer