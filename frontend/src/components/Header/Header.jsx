

import { Button } from "../ui/button";

import { Link } from 'react-router-dom';
import { LogOut} from 'lucide-react'; 


const Header = () => {

  const handleClick = (e) => {
    e.preventDefault()
    
  }

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
          <Button onClick={handleClick}> <LogOut size={20} /> Logout</Button>
        </nav>

        
      </div>
    </header>
  );
};

export default Header;
