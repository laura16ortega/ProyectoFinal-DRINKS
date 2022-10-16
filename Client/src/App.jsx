
import './App.css'
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Register from './pages/Register/register'
import LandingPage from './pages/LandingPage/LandingPage';


function App() {


  return (
    <div className="App" >
      {/* <Navbar /> */}
      <Routes>
        <Route path='/details' element={<Details />} />
        <Route exact path='/' element={<Register />} />
        <Route path='/LandingPage' element={<LandingPage/>} />
      </Routes>

    </div>
  )
}

export default App
