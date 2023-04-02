import React, { useEffect, useState } from 'react'
import AccountNav from './AccountNav'
import axios from 'axios'

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get('/booking').then(response => {
      setBookings(response.data);
    });
  }, [])
  return (
    <div>
      <AccountNav />
      <div>
        {bookings?.length > 0 && bookings.map(booking => (
          <div>
            {booking.checkin} - {booking.checkout}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookings
