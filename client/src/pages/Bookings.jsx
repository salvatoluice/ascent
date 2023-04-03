import React, { useEffect, useState } from 'react'
import AccountNav from './AccountNav'
import axios from 'axios'
import CarImg from './CarImg';
import {differenceInCalendarDays, format} from "date-fns";
import { Link } from 'react-router-dom';

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
      <div className='gap-2'>
        {bookings?.length > 0 && bookings.map(booking => (
          <Link to={`/account/bookings/${booking._id}`} className='flex gap-4 bg-gray-200 rounded-xl overflow-hidden mb-2'>
            <div className='w-48 h-30'>
              <CarImg car={booking.car} />
            </div>
            <div className='py-3 pr-2 pb-0 grow'>
              <h2 className='text-xl font-semibold'>{booking.car.title}</h2>
              <div className='border-t border-gray-500 mt-1'>
                {format(new Date(booking.checkin), 'yyyy-MM-dd')} &rarr; {format(new Date(booking.checkout), 'yyyy-MM-dd')}
              </div>
              <div className='text-xl'>
              For <span className='font-bold'>{differenceInCalendarDays(new Date(booking.checkout), new Date(booking.checkin))}</span> days ||
               Price: <span className='font-semibold'>Ksh. {booking.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Bookings
