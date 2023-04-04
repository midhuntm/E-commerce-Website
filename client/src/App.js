import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './pages/cart/Cart';
import Shop from './pages/shop/Shop';
import ShopContextProvider from './context/shop-context';
import Login from './components/Login';
import Signin from './components/Signin';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Forgot from './components/Forgot';
import Footer from './components/Footer';
import Payment from './pages/cart/Payment';
import Rough from './components/Rough';

function App() {
  const[isSignIn,setIsSignIn] = useState(null);
  const signIn = () => {
    setIsSignIn(true);
    sessionStorage.setItem('login',true);
  }
  const signOut = () => {
    setIsSignIn(false);
  }
  return (
    <div>
  
    {/* {isLogged === null ? <Router><Routes><Route path='/' element={<Login/>}/></Routes></Router> : null}

    {isLogged === true?  <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/home' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route> 
          
        </Routes>
      </Router>
    </ShopContextProvider> : null } */}
    <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/home' element={<Shop/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route> 
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/rough' element={<Rough/>}/>
        </Routes> 
        {/* <Footer/>  */}
      </Router>
    </ShopContextProvider>
    </div>
  );
}

export default App;
