import Navbar from "./component/Navbar";
import Dashboard from "./pages/Dashboard";
import {Routes, Route} from  "react-router-dom";
import Vehicle from "./pages/Vehicle";
import Scam from "./pages/Scam";
import "./styles/App.css";
import { ethers, providers } from 'ethers';
import abi from './abi/abi.json';
// import Contract from "./web3/Contract"


function App() {

  // const contract = Contract();
  

  //  const tx = async () => {
  //   const legit = await contract.legit("Ka342")
  //   console.log(legit)
  // }
  // tx();
 
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Dashboard/>} />
          <Route path="/vehicle/:id" element={<Vehicle/>} />
          <Route path="/overload" element={<Scam/>} />
        </Routes>
    
      </header>
    </div>
  );
}

export default App;
