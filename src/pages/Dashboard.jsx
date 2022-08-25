import React from 'react'
import EnhancedTable from '../component/Table'
import Banner from '../component/Banner'
import  data from  "../sampleData.json"; 

function Dashboard() {

    console.log(data)
  return (
    <div>
        <Banner countData={data.data.tripData} />
        <EnhancedTable data={data.data.entries} />
    </div>
  )
}

export default Dashboard