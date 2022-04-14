import React from 'react'
// import {Link } from 'react-router-dom'
import {NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>      
      <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar

/**
 * When to use Link vs NavLink
 * 
 * NavLink - specifically used for Navigation menu, breakcrumbs or highlight selected items
 * 
 * Link - to be use when you just need to navigate from one link to another and .active class not needed
 */