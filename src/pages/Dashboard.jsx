import React from 'react'
import EnhancedTable from '../component/Table'
import Banner from '../component/Banner'

function Dashboard() {
  return (
    <div>
        <Banner countData={{}} />
        <EnhancedTable data={[{},{}]} />
    </div>
  )
}

export default Dashboard