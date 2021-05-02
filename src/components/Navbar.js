import React from 'react';


const Navbar = () => {
    return (
        <>
        <div className="navbar">
             <div className="logo">
                 <img src="images/logo.png" width="125px" alt="logo"/>
             </div>
             <nav>
                 <ul id="MenuItems">
                     <li className="menutitle">HOME</li>
                     <li className="menutitle">ABOUT US</li>
                     <li className="menutitle">OUR SERVICES</li>
                     <li className="menutitle">CONTACT US</li>
                 </ul>
             </nav>
         </div>
             
        </>
    )
}

export default Navbar
