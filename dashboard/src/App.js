import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Products from './pages/Products';
import Users from './pages/Users'
// import Widget from './components/Widget';




function App() {
  return (
    <Router>
      <div className="flex">  
      <Sidebar />       
        <div className="content w-100">
           <Navbar />
           <div className="appContainer">Home</div>  
           {/* <div className="widgets">
             <widget />
             <widget />
             <widget />
             <widget />
            </div>  */}
          <Routes>
            <Route path="/" exact={true} component={Home} />
            <Route path="/products" exact={true} component={Products} />
            <Route path="/users" exact={true} component={Users} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
