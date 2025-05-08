import React from 'react';
import { Button } from "@/components/ui/button"; 
import { CreditCard, Send, LogIn, UserPlus} from 'lucide-react'; 

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
      <header className="text-3xl font-bold text-blue-900 mb-8">
        PayQuick
      </header>

      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Welcome to PayQuick!</h1>
        <p className="text-gray-600 mb-6">
          Send and receive payments instantly, securely, and easily.
        </p>

        <div className="flex flex-col gap-4">
          <Button className="flex items-center justify-center gap-2 w-full">
            <Send size={20} /> Send Money
          </Button>

          <Button className="flex items-center justify-center gap-2 w-full">
            <UserPlus size={20} /> SignUp
          </Button>

          <Button className="flex items-center justify-center gap-2 w-full">
            <LogIn size={20} /> SignIn
          </Button>

          <Button variant="outline" className="flex items-center justify-center gap-2 w-full">
            <CreditCard size={20} /> View Transactions
          </Button>
        </div>
      </div>

      <footer className="text-sm text-gray-500 mt-8">
        © 2025 PayQuick. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;