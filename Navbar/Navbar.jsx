import React from 'react'
import './Navbar.scss'
import LanguageIcon from '@mui/icons-material/Language';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import GamesIcon from '@mui/icons-material/Games';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
   <>
      <input placeholder='Search here' type='text' style={{width:"200px",height:"40px",marginLeft:"20px"}}/>
      <ul>
        <li style={{marginLeft:"40px"}}><LanguageIcon/>English</li>
        <li><BedtimeIcon/></li>
        <li><GamesIcon/></li>
        <li><NotificationsIcon/></li>
        <li><ChatBubbleIcon/></li>
        <li><ViewHeadlineIcon/></li>
        <li><AccountCircleIcon/></li>
      </ul>
      <hr />
   </>
  )
}
export default Navbar