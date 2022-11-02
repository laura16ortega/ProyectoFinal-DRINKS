import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Tobbar";
import Users from "./pages/Users/Users"
import Products from './pages/Products/Products';
import "./App.css"

function App() {
  return ( 
    <Router>
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
        <Routes>
            <Route path="/" exact={true} component={Home} />
            <Route path="/products" exact={true} component={Products} />
            <Route path="/users" exact={true} component={Users} />
          </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App;