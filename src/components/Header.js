import React from 'react';
import { NavLink } from 'react-router-dom';



const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <ul>
     <li>
       <NavLink to="/" activeClassName="navitem-active" exact>Home</NavLink>
     </li>
     <li>
       <NavLink to="/portfolio" activeClassName="navitem-active">Portfolio</NavLink>
     </li>
     <li>
       <NavLink to="/contact" activeClassName="navitem-active">Contact</NavLink>
     </li>
    </ul>
  </header>
);
export default Header;