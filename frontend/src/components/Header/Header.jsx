
import React from 'react';
import { Button } from "../ui/button";
import { LogIn, UserPlus } from "lucide-react";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        
        <div className="text-2xl font-bold text-blue-600">
          QuickPay
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link to={"/"} className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link to={"/"} className="text-gray-700 hover:text-blue-600 transition">Transactions</Link>
          <Link className="text-gray-700 hover:text-blue-600 transition">Profile</Link>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;
