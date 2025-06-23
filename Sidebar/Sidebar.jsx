import React from 'react'
import './Sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <h5 className="logo">Admin</h5>
            <hr></hr>
        </div>
        <div className="center">
          <br />
            <h5 className='title'>MAIN</h5>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><DashboardIcon/> Dashboard</h6>
            <br />
             <h5 className='title'>LISTS</h5>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><GroupIcon/> Users</h6>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><InventoryIcon/> Products</h6>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><BorderColorIcon/> Orders</h6>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><LocalShippingIcon/> Delivery</h6>
            <br />
             <h5 className='title'>USEFUL</h5>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><QueryStatsIcon/> Stats</h6>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><NotificationsActiveIcon/> Notification</h6>
            <br />
             <h5 className='title'>SERVICE</h5>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><SettingsSystemDaydreamIcon/> System Health</h6>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><BookIcon/> Logs</h6>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><SettingsIcon/> Settings</h6>
            <br />
             <h5 className='title'>USER</h5>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><AccountCircleIcon/> Profile</h6>
            <h6 style={{paddingLeft:"20px",paddingTop:"15px",color:"purple"}}><LogoutIcon/> Logout</h6>
        </div>
        <br />
        <div className='center'></div>
         <h5 className='title'>COLOR OPTION</h5>
         <br />
        <div className='bottom'>
         
          <div className='colorOption1'></div>
          <div className='colorOption2'></div>
        </div>
    </div>
  )
}
export default Sidebar