import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddressLink from './AddressLink';
import CarGallery from './CarGallery';
import { format } from 'date-fns';

const SingleBooking = ({car}) => {
  const [booking, setBooking] = useState(null);
    const {id} = useParams();
    useEffect(() => {
      if (id) {
        axios.get('/booking').then(response => {
          const foundBooking = response.data.find(({_id}) => _id === id);
          if (foundBooking) {
            setBooking(foundBooking);
          }
        })
      }
    }, []);

    if (!booking) {
      return '';
    }
  return (
    <div className='my-8'>
      <h1 className='text-2xl'>{booking.car.title}</h1>
      <AddressLink className="my-2 block">{booking.car.address}</AddressLink>
      <div className="bg-gray-200 items-center p-6 my-6 rounded-xl flex justify-between">
        <div>
          <h2 className='text-xl mb-2 font-semibold'>Your booking information</h2>
          From <span className='font-bold'>{format(new Date(booking.checkin), 'yyyy-MM-dd')}</span> to <span className="font-bold">{format(new Date(booking.checkout), 'yyyy-MM-dd')}</span>
        </div>
        <div className='bg-primary text-white p-4 rounded-xl'>
          Price: <span className="font-semibold">Ksh. {booking.price}</span>
        </div>
      </div>
      <CarGallery car={booking.car} />
    </div>
  )
}

export default SingleBooking
