import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleUserReg = (e) => {
        e.preventDefault();
        try {
          axios.post('/register', {
            name,
            email,
            password
        });
        }catch(e) {
          alert('Registration failed!')
        }
    }


  return (
    <div className='mt-4 grow flex items-center justify-around'>
      <div className='mb-64'>
        <h1 className='text-4xl text-center mb-4'>Register</h1>
        <form className='max-w-md mx-auto' onSubmit={handleUserReg}>
          <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
          <input type="email" placeholder='Email Address' value={email} onChange={e => setEmail(e.target.value)}/>
          <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
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
