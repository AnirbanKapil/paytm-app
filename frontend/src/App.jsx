
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SendMoney from './pages/SendMoney'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Provider} from "react-redux"
import store from "../src/utils/appStore"
import UserProfile from './pages/UserProfile'
import AmountTransfer from './pages/AmountTransfer'


function App() {
  return (
    <>
     
     <BrowserRouter>
       <Provider store={store}>
       <Header />
       <Routes>
         <Route path='/' element ={<Home />}/>
         <Route path='/signup' element = {<Signup />} />
         <Route path='/signin' element = {<Signin />} />
         <Route path='/dashboard' element = {<Dashboard />} />
         <Route path='/send' element = {<SendMoney />} />
         <Route path='/profile/:id' element = {<UserProfile />}/>
         <Route path='/amounttransfer' element = {<AmountTransfer />}/>
       </Routes>
       </Provider>
     </BrowserRouter>
       <Footer />
    </>
  )
}

export default App





