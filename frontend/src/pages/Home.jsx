import React from 'react';
import { Button } from "@/components/ui/button"; 
import { CreditCard, Send, LogIn, UserPlus} from 'lucide-react'; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-28">
      <header className="text-3xl font-bold text-blue-900 mb-8">
        QuickPay
      </header>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome to QuickPay!</h1>
        <p className="text-gray-600 mb-6">
          Send and receive payments instantly, securely, and easily.
        </p>
         
        <div className="flex flex-col gap-4">

          <Link to={"/dashboard"}>
          <Button className="flex items-center justify-center gap-2 w-full">
            <Send size={20} /> Send Money
          </Button>
          </Link> 
          
          <Link to={"/signup"}> 
          <Button className="flex items-center justify-center gap-2 w-full">
            <UserPlus size={20} /> SignUp
          </Button>
          </Link>

          <Link to={"/signin"}>
          <Button className="flex items-center justify-center gap-2 w-full">
            <LogIn size={20} /> SignIn
          </Button>
          </Link>
          
          <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
            <CreditCard size={20} /> View Transactions
          </Button>
        </div>
      </div>

     
    </div>
  );
};

export default HomePage;