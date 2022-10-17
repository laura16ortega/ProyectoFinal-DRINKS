
import './App.css'
import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Details from './pages/Details/Details';
import Register from './pages/Register/register'
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <div className="App" >
      <Navbar /> 
      <Footer/>
      <Routes>
        <Route path='/home' element={<Home /> } />
        <Route path='/details' element={<Details />} />
        <Route exact path='/register' element={<Register />} />

      </Routes>

    </div>
  )
}

export default App
