import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
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
      Profile page for {user?.name}
    </div>
  )
}

export default Account
