import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddressLink from './AddressLink';
import CarGallery from './CarGallery';

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
      <div className="bg-gray-200 p-4 mb-4 rounded-xl">
        <h2 className='text-xl'>Your booking information</h2>
        dates
      </div>
      <CarGallery car={booking.car} />
    </div>
  )
}

export default SingleBooking
