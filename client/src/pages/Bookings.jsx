import React, { useEffect, useState } from 'react'
import AccountNav from './AccountNav'
import axios from 'axios'
import CarImg from './CarImg';
import {differenceInCalendarDays, format} from "date-fns";

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
          <div className='flex gap-4 bg-gray-200 rounded-xl overflow-hidden'>
            <div className='w-48'>
              <CarImg car={booking.car} />
            </div>
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>{booking.car.title}</h2>
              <div className='border-t border-gray-400'>
                {format(new Date(booking.checkin), 'yyyy-MM-dd')} - {format(new Date(booking.checkout), 'yyyy-MM-dd')}
              </div>
              <div>
                Number of days: {differenceInCalendarDays(new Date(booking.checkout), new Date(booking.checkin))} <br />
               Price: Ksh. {booking.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bookings
