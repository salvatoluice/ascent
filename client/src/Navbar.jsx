import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div className='flex items-center gap-4 italic justify-center mt-4'>
      {/* <Link className='text-primary hover:text-primary' to={'/'}>Home</Link> */}
      <Link className='hover:text-primary' to={'/about'}>About us</Link>
      <Link className='hover:text-primary' to={'/spares'}>Spare Parts</Link>
      <Link className='hover:text-primary' to={'/contact'}>Contact Us</Link>
      <Link className='hover:text-primary' to={'/careers'}>Careers</Link>
      {state.length !== 0 ? <Link className='hover:text-primary relative' to={'/spares/cart'}>Cart<span className='absolute text-primary' style={{fontSize: '11px'}}>({state.length})</span></Link> : ''}
    </div>
  )
}

export default Navbar