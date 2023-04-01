import React, { useState } from 'react'

const BookingForm = () => {
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
  return (
    <div className='border rounded-xl mt-4 p-4'>
        <div className="">
            <h1 className='text-center font-bold text-2xl'>Book This Car </h1>
            <div className="block py-3 px-4">
                <label>Pick up date:</label>
                <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} />
            </div>
            <div className="py-3 px-4">
                <label>Return date:</label>
                <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} />
            </div>
            <button className='primary'>Book Now</button>
        </div>
    </div>
  )
}

export default BookingForm
