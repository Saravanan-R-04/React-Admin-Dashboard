import React from 'react'
import './List.scss'
import Sidebar from '../../Components/React-Admin-Dashboard/Sidebar/Sidebar'
import Navbar from '../../Components/React-Admin-Dashboard/Navbar/Navbar'
import Datatable from '../../Components/React-Admin-Dashboard/Datatable/Datatable'
const List = () => {
  return (
   <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
   </div>
  )
}

export default List