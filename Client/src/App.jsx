
import './App.css'
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './pages/Details/Details.jsx';
import Register from './pages/Register/register'
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';


function App() {


  return (
    <div className="App" >
      <Navbar /> 
      <Routes>
        <Route path='/details/:id' element={<Details />} />
        <Route path='/products' element={<Home/>}/>
        <Route exact path='/register' element={<Register />} />
        <Route path='/' element={<LandingPage/>} />
      </Routes>

    </div>
  )
}

export default App
