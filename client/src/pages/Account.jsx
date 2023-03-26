import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext'

const Account = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();
    if (!user) {
        return 'Loading';
    }
    if (!user) {
        navigate('/login')
    }
  return (
    <div>
      <nav className='w-full flex mt-8 justify-center'>
        <Link className='py-2 px-6 gap-2 bg-primary text-white rounded-full' to={'/account'}>My Profile</Link>
        <Link className='py-2 px-6' to={'/account/bookings'}>My Rentals</Link>
        <Link className='py-2 px-6' to={'/account/mycars'}>My Cars</Link>
      </nav>
    </div>
  )
}

export default Account
