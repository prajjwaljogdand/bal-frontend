import React from 'react'
import ScamTable from '../component/ScamTable'
import Banner from '../component/Banner' 
import { useQuery, gql } from "@apollo/client"; 
import Header from "../component/Header";

const TRIPS_QUERY = gql`
  {
    tripData(id: "0") {
      count
      numberOfVehicles
    }
     scams(orderBy: timeOut, orderDirection: desc, first: 50) {
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

    const { data, loading, error } = useQuery(TRIPS_QUERY,{
      pollInterval: 50,
    });

    
    console.log(data);
  
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
              <ScamTable data={data.scams} />
            </>
          )}
        </div>
    </div>
  )
}

export default Dashboard