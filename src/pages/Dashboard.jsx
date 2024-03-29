import {React }from 'react'
import EnhancedTable from '../component/Table'
import Banner from '../component/Banner'
import { useQuery, gql } from "@apollo/client"; 
import Header from "../component/Header";
import Contract from "../web3/Contract"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const bal = Contract();
const TRIPS_QUERY = gql`
  {
    tripData(id: "0") {
      count
      numberOfVehicles
    }
    entries(orderBy: timeOut, orderDirection: desc, first: 50) {
      id
      txHash
      block
      truckId
      timeOut
      weight
    }
  }
`;
function Dashboard() {

    let { data, loading, error } = useQuery(TRIPS_QUERY,{
      pollInterval: 500,
    });

    bal.on("logs", (truckId, timeOut, weight, event) => {
      // Called when anyone changes the value
  
      console.log(truckId);
      // "0x14791697260E4c9A71f18484C9f997B308e59325"
  
      console.log(timeOut);
      // "Hello World"
  
      console.log(weight);
      // "Ilike turtles."
  
      // See Event Emitter below for all properties on Event
      console.log(event.blockNumber);
      // 4115004
  });

    if (error) return <pre>{error.message}</pre>; 

  return (
    <div>
       <Header />
        <div className="dashboard-container">
          {loading ? (
            "loading"
          ) : (
            <>
              <Banner countData={data.tripData} />
              <EnhancedTable data={data.entries} />
            </>
          )}
        </div>
    </div>
  )
}

export default Dashboard