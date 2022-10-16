
import './App.css'
import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './pages/Details';
import Register from './pages/Register/register'
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';

function App() {

  return (
    <div className="App" >
      <Navbar /> 
      <Routes>

        <Route path="/" element={/*<Navigate to="/home"/>}*/ <LandingPage/>}/>
        <Route path='/details/:id' element={<Details />} />
        <Route path='/products' element={<Home/>}/>
        <Route exact path='/register' element={<Register />} />

      </Routes>

    </div>
  )
}

export default App
