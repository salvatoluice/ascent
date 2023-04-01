import React, { useState } from 'react'

const BookingForm = () => {
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
  return (
    <div className='rounded-xl mt-4 p-4'>
        <form className="book">
            <h1 className='text-center font-bold text-2xl'>Book This Car </h1>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Full Name:</label>
                <input type="text" placeholder='E.g John Doe' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Phone Number:</label>
                <input type="number" placeholder='07...' value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Email Address:</label>
                <input type="email" placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Pick up date:</label>
                <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Return date:</label>
                <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} />
            </div>
            <button className='primary'>Reserve Now</button>
        </form>
    </div>
  )
}

export default BookingForm
