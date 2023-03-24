import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto'>
          <input type="text" placeholder='Full Name'/>
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
          <button className='primary'>Register</button>
          <div className='text-center py-2 text-gray-500'>
            Already have an account? <Link className='underline text-black' to={'/login'}>login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
