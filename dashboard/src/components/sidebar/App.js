
import Home from "./pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Tobbar";
import "./App.css"

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  )
}

export default App;