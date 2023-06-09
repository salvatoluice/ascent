import React from 'react'

const Payment = () => {
  return (
    <div>
      <form className='book'>
        <h3 className='text-xl text-center font-semibold'>Make an Oder now</h3>
        <span className="italic text-sm">Phone payments are only made through safaricom lines. We apologise for any inconveniences caused.</span>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Phone Number:</label>
                <input type="number" placeholder='Phone Number to make payment...' />
            </div>
            <button className="primary px-4">Make Payment</button>
      </form>
    </div>
  )
}

export default Payment
