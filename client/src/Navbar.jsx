import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center'>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About us</Link>
      <Link to={'/rides'}>Request a ride</Link>
      <Link to={'/mechanics'}>Find a mechanic</Link>
      <Link to={'/spares'}>Spare Parts</Link>
      <Link to={'/contact'}>Contact Us</Link>
      <Link to={'/careers'}>Careers</Link>
    </div>
  )
}

export default Navbar
