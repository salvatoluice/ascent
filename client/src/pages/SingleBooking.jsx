import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBooking = () => {
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
    <div>
      Single Booking here: {id}
    </div>
  )
}

export default SingleBooking
