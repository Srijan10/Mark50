import React from 'react';
import styled from 'styled-components';
const Nav = styled.nav`
    display: flex;
    height: 100px;
    align-items:center;
    padding:20px;
`;

const Navbar = () => {
    return (
        <>
        
         <Nav><div className="logo">
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
         </Nav>
             
        </>
    )
}

export default Navbar
