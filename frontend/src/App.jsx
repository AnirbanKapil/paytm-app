
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
     
     <BrowserRouter>
       <Header />
       <Routes>
         <Route path='/' element ={<Home />}/>
         <Route path='/signup' element = {<Signup />} />
         <Route path='/signin' element = {<Signin />} />
         <Route path='/dashboard' element = {<Dashboard />} />
         <Route path='/send' element = {<SendMoney />} />
       </Routes>
     </BrowserRouter>
       <Footer />
    </>
  )
}

export default App





