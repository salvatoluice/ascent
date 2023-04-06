import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center gap-4 italic justify-center mt-4'>
      <Link className='text-primary hover:text-primary' to={'/'}>Home</Link>
      <Link className='hover:text-primary' to={'/about'}>About us</Link>
      <Link className='hover:text-primary' to={'/rides'}>Request a ride</Link>
      <Link className='hover:text-primary' to={'/mechanic'}>Find a mechanic</Link>
      <Link className='hover:text-primary' to={'/spares'}>Spare Parts</Link>
      <Link className='hover:text-primary' to={'/contact'}>Contact Us</Link>
      <Link className='hover:text-primary' to={'/careers'}>Careers</Link>
    </div>
  )
}

export default Navbar
