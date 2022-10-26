
import './App.css'
import React from 'react';

import { Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Details from './pages/Details/Details';

import Register from './pages/Register/Register.jsx'
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import FavoriteProducts from './components/FavoriteProducts/FavoriteProducts';
import Contact from './components/Contact/Contact';

import LoginButton from './components/LoginButton/LoginButton';
import LogoutButton from './components/LogoutButton/LogoutButton';
import Profile from './pages/Profile/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import NotFound from './pages/NotFound/NotFound';
import Login from './components/Login/Login';
import LoginOptions from './pages/LoginOptions/LoginOptions';
function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div className="App" >

      <Navbar /> 

  {/*     <Footer/> */}

      <Routes>
        {/* <Route path="/" element={<Navigate to="/home" />} /> */}
        <Route path='/home' element={<LandingPage />} />
        <Route path='/productos' element={<Home />} />
        <Route path='/carrito' element={<Cart />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/perfil' element={<Profile />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<LoginOptions />} />
        <Route path="/liked" element={<FavoriteProducts/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound /> } />
      </Routes>

    </div>
  )
}

export default App
