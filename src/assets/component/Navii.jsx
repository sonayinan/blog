import React from 'react'
import "../style/navi.scss"
import logo from "../img/logo.png"
import { Link, NavLink, Outlet } from 'react-router-dom'
const Navii = () => {
    const sekme=["Anasayfa","Hakkimda","Galeri","Blog","Iletisim"]
  return (
    <>
    <nav>
        <div className="logo">
            <img src={logo} alt="logo" />
            <span>MOON BLOG</span>
        </div>
        <ul>
           {
            sekme.map((eleman,index)=>
                <li key={index}><NavLink style={({isActive})=>({color:isActive?"rgb(71, 71, 92)":"black"})} to={eleman.toLowerCase()}>{eleman}</NavLink></li>
            
            )
           }
           <NavLink/>
        </ul>
    </nav>
    <Outlet/>
    
    </>
  )
}

export default Navii