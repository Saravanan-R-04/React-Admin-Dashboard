import React from 'react'
import './Widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BalanceIcon from '@mui/icons-material/Balance';
const Widget = ({type}) => {
    let data;
    const amount=100;
    const diff=20;
    switch(type)
    {
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"See all users",
                icon:(
                    <PersonOutlinedIcon className='icon'/>
                )
            };
            break;
            case "order":
            data={
                title:"ORDERSS",
                isMoney:false,
                link:"See all orders",
                icon:(
                    <ShoppingCartIcon className='icon'/>
                )
            };
            break;
            case "earning":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"See all earnings",
                icon:(
                    <AttachMoneyIcon className='icon'/>
                )
            };
            break;
            case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"See details",
                icon:(
                    <BalanceIcon className='icon'/>
                )
            };
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className='percentage positive'>
            <KeyboardArrowUpIcon/>{diff}%
            </div>
           {data.icon}
        </div>
    </div>
  )
}

export default Widget