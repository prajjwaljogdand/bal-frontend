import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import {Routes, Route ,Link} from  "react-router-dom";
import Vehicle from "./pages/Vehicle";
import "./styles/App.css";


function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/vehicle" element={<Vehicle/>} />
        </Routes>
    
      </header>
    </div>
  );
}

export default App;
