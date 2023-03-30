import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../UserContext'
import axios from 'axios';
import CarsPage from './CarsPage';
import AccountNav from './AccountNav';

const Account = () => {
    const {user, setUser} = useContext(UserContext);
    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2];
    const navigate = useNavigate();
    if (subpage === undefined) {
        subpage = 'profile';
      }

      async function logout() {
        await axios.post('/logout')
        alert('Well, logout successiful')
        setUser(null)
        navigate('/')
      }


    if (!user) {
        return 'Loading';
    }
    if (!user) {
        navigate('/login')
    }


  return (
    <>
    <AccountNav />
      {subpage === 'profile' && (
        <div className='text-center max-w-lg mx-auto'>
            Logged in as: <br /> Name: {user.name} <br />Email: {user.email} <br />
            <button onClick={logout} className='primary max-w-sm mt-2'>Logout</button>
        </div>
      )}
        {subpage === 'cars' && (
          <CarsPage />
        )}
    </>
  )
}

export default Account
