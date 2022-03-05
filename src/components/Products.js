import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
  return (
      <>
    <div>Products</div>
    <input type='search' placeholder='Search Products' />
    <nav>
        <Link to='featured'>Featured</Link>
        <Link to='new'>New</Link>
    </nav>
    <Outlet />
    </>
  )
}
