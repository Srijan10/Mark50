import React from 'react';
import { menuData } from '../data/MenuData';


const Navbar = () => {
    return (
        <>
        <div className="navbar">
             <div className="logo">
                 <img src="images/logo.png" width="125px" alt="logo"/>
             </div>
             <nav>
                 <ul id="MenuItems">
                     {menuData.map((item, index)=>(
                         <li className="menutitle" to={item.link} key = {index}>{item.title}</li>
                     ))}
                 </ul>
             </nav>
         </div>
             
        </>
    )
}

export default Navbar
