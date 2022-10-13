
import './App.css'
import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Details from './pages/Details';


function App() {


  return (
    <div className="App" >
      <Navbar />
      <Routes>
        <Route path='/details' element={<Details />} />
      </Routes>

    </div>
  )
}

export default App
