import React from 'react';
import { menuData } from '../data/MenuData';
import styled from 'styled-components';

const Menubar = styled.i`
display : none`;

const Navbar = () => {
    
    const ManuItems = document.getElementById("MenuItems");

    // ManuItems.style.maxHeight = "0px";

    const menutoggle = () => {
        if(ManuItems.style.maxHeight === "0px"){
            ManuItems.style.maxHeight="200px";
        }
        else{
            ManuItems.style.maxHeight="0px";
        }
    }

    return (
        <>
        <div className="navbar">
             <div className="logo">
                 <img src="images/logo.png" width="125px" alt="logo"/>
             </div>
             <Menubar />
             <nav>
                 <ul id="MenuItems">
                     {menuData.map((item, index)=>(
                         <li className="menutitle" to={item.link} key = {index}>{item.title}</li>
                     ))}
                 </ul>
             </nav>
             <img src="images/Hamburger_icon.svg.png" className="menu-icon" onClick={menutoggle}/>
         </div>
         
        </>
    )
}

export default Navbar
