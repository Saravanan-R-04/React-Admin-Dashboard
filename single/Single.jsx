import React from 'react'
import './Single.scss'
import Sidebar from '../../Components/React-Admin-Dashboard/Sidebar/Sidebar.jsx'
import Navbar from '../../Components/React-Admin-Dashboard/Navbar/Navbar.jsx'
import Chart from '../../Components/React-Admin-Dashboard/Chart/Chart.jsx'
import Table from '../../Components/React-Admin-Dashboard/Table/Table.jsx'

const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h4 className="title">Information</h4>
            <div className="item">
              <img src="" alt="" className="itemImg" />
              <div className="details">
                <h3 className="itemTitle">Jane Doe</h3>
                <div className="detailItem">
                  <span className="itemKey">Email: </span>
                  <span className="itemValue">janedoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone: </span>
                  <span className="itemValue">9344793738</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">City: </span>
                  <span className="itemValue">Sivakasi</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country: </span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
<div className='charts'>
 
  <Chart />
</div>
          </div>
        </div>
        <div className="bottom">
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Single