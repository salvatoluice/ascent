import React, { useEffect, useState } from 'react'
import {differenceInCalendarDays} from 'date-fns'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const BookingForm = () => {
    const {id} = useParams();
    const [car, setCar] = useState([]);
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get(`/cars/${id}`).then(response => {
            setCar(response.data)
        })
    }, [id]);

    let numberOfDays = 0;
    if (checkin && checkout) {
        numberOfDays = differenceInCalendarDays(new Date(checkout), new Date(checkin));
    }

    async function bookThisPlace() {
        const response = await axios.post('/booking', {
          checkin,checkout,number,name,email,
          car:car._id,
          price:numberOfNights * car.dayprice,
        });
        const bookingId = response.data._id;
        navigate(`/account/bookings/${bookingId}`);
      }


  return (
    <div className='rounded-xl mt-4 p-4'>
        <form onSubmit={bookThisPlace} className="book">
            <h1 className='text-center font-bold text-2xl'>Book This Car </h1>
            <p className='text-center italic'>{car.title}</p>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Full Name:</label>
                <input type="text" required placeholder='E.g John Doe' value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Phone Number:</label>
                <input type="number" required placeholder='07XXXXXXXX' value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Email Address:</label>
                <input type="email" required placeholder='example@gmail.com' value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Pick up date:</label>
                <input type="date" required value={checkin} onChange={e => setCheckin(e.target.value)} />
            </div>
            <div className="grid py-3 px-4">
                <label className='font-semibold'>Return date:</label>
                <input type="date" required value={checkout} onChange={e => setCheckout(e.target.value)} />
            </div>
            <button type='submit' className='primary'>
                Reserve Now {numberOfDays > 0 && (
                    <span>
                        @Ksh. {numberOfDays * car.dayprice}
                    </span>
                )} 
            </button>
        </form>
    </div>
  )
}

export default BookingForm
