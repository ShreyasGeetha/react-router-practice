import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="='search products"/>
      </div>
      {/* not to include forward slash for nested route */}
      <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">new</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Products