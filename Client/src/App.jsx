
import './App.css'
import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
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

import Dashboard from './components/Dashboard/MainDashboard/MainDashboard';
import AdminProducts from "./components/Dashboard/Products/Products"
import AdminHome from "./components/Dashboard/Home/Home"
import AdminUsers from "./components/Dashboard/Users/Users"
import './App.scss';

function App() {
  const { isLoading, error } = useAuth0();
  return (
    <div className="App" >

      <Navbar />

      {/*     <Footer/> */}

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/productos' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='' element={<AdminHome />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='users' element={<AdminUsers />} />
        </Route>
        <Route path='/carrito' element={<Cart />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/perfil' element={<Profile />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<LoginOptions />} />
        <Route path="/liked" element={<FavoriteProducts />} />
        <Route path='/contact' element={<Contact />} />

        {/* <Route path='*' element={<NotFound /> } /> */}
      </Routes>
    </div>
  )
}

export default App
