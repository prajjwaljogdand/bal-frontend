import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import {Routes, Route} from  "react-router-dom";
import Vehicle from "./pages/Vehicle";
import Scam from "./pages/Scam";
import "./styles/App.css";

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/vehicle/:id" element={<Vehicle/>} />
          <Route path="/scam" element={<Scam/>} />
        </Routes>
    
      </header>
    </div>
  );
}

export default App;
