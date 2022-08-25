import {React }from 'react'
import EnhancedTable from '../component/Table'
import Banner from '../component/Banner'
import { useQuery, gql } from "@apollo/client"; 
import Header from "../component/Header";

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