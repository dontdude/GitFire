import React, { useState, useContext } from 'react';
import Image from 'next/image';
import {
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand,
    Nav, 
    NavItem,
    NavLink,
    NavbarText
} from "reactstrap";
import AuthContext from "../context/AuthContext";
//import Link from 'next/link';

const Header = () => {

  const Context = useContext(AuthContext); 

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);    


//ml-auto is now ms-auto  and mr-auto is now me-auto
  return (
    <Navbar color="dark" light expand="md">
      <Image src="/logo.png" height={50} width={50} />
      <NavbarBrand href="/" className="text-warning me-auto">         
       {/* <Link href="/" className="text-white">                     // Hydration Error */}          
        GitFire  
      </NavbarBrand>

      <NavbarToggler onClick={toggle} />

      {/* In bootstrap5 marginLeft is changed to marginStart, so use "ms-auto" instead of "ml-auto" to align nav links to right */}
      <Collapse isOpen={isOpen} navbar>  

        {/* Drilling down into {user} state to find email using "?", and if present(i.e, logedin) showing email */}
        <NavbarText className="text-secondary ms-2">
        {Context.user?.email ? Context.user.email : ""}
        </NavbarText>
              
        <Nav className="ms-auto" navbar>
         { //IF user authenticated, than only logout button appears
           Context.user ? (
            <NavItem>
              <NavLink 
              onClick={() => Context.setUser(null)} 
              className="text-white">
              Logout
              </NavLink>
            </NavItem>
           ) : (
            <>
            <NavItem>
              <NavLink  href="/register" className="text-white">Register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink  href="/login" className="text-white">Login</NavLink>
            </NavItem>
            </>
           )
         }
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Header;