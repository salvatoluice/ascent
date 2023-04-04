import React, { useContext, useEffect, useState } from 'react'
import {differenceInCalendarDays} from 'date-fns'
import { useNavigate, useParams } from 'react-router-dom'
import {UserContext} from '../UserContext.jsx'
import axios from 'axios'
import CarGallery from './CarGallery.jsx'
import AddressLink from './AddressLink.jsx'

const SingleCar = () => {
    const {id} = useParams();
    const [car, setCar] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const {user} = useContext(UserContext);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user])
    
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get(`/cars/${id}`).then(response => {
            setCar(response.data)
        })
    }, [id]);

    if(!car) return '';

    let numberOfDays = 0;
    if (checkin && checkout) {
        numberOfDays = differenceInCalendarDays(new Date(checkout), new Date(checkin));
    }

    async function bookThisPlace() {
        const response = await axios.post('/booking', {
          checkin,checkout,number,name,email,
          car:car._id,
          price:numberOfDays * car.dayprice,
        });
        const bookingId = response.data._id;
        navigate(`/account/bookings/${bookingId}`);
      }


    if (showForm) {
        return (
            <div className="book">
                <button onClick={() => setShowForm(false)} className='rounded-full p-1 border border-black bg-white mx-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button>
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
                <button onClick={bookThisPlace} className='primary'>
                    Reserve Now {numberOfDays > 0 && (
                        <span>
                            @Ksh. {numberOfDays * car.dayprice}
                        </span>
                    )} 
                </button>
            </div>
        )
    }


  return (
    <div className='mt-4 pt-4 bg-gray-100 -mx-8 px-8 py-8'>
      <h1 className='text-2xl'>{car.title}</h1>
      <div className='flex gap-4'>
        <AddressLink car={car} />
        <h3 className='my-2 gap-1'> Phone no: <b>{car.contaact}</b></h3>
      </div>
      <CarGallery car={car} />
      <div className='my-4 border-b pb-2'>
        <h2 className='font-semibold text-2xl '>Description & Price</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-2 mt-2'>
      {/* {car.description} */}
        <div>
            <h5 className='mb-3 border-b pb-2 pt-3'>{car.description}</h5>
            <h1 className='text-center font-bold'>- - - - - - - - - - - - - - - - - - - - - - - - -  - - -</h1>
            <p className='text-gray-500'>The prices shown are listed by the owner of this car. We don't take part in negotiating for the car price neither do we manipulate any information entered by the car owner. All prices are in  kenyan shillings.</p>
        </div>
        <div className='bg-white px-6 py-1 rounded-xl mt-4 pb-6'>
            <h1 className="text-center font-bold mt-2">Prices</h1>
            <div className="flex bg-gray-100 p-4 rounded-xl mb-2 mt-2">
                <h1 className=""><b>Ksh. {car.dayprice} /day</b></h1> <br />
            </div>
            <div className="flex bg-gray-100 p-4 rounded-xl mb-2">
                <h1 className=""><b>Ksh. {car.weekprice} /week</b></h1> <br />
            </div>
            <h2 className='font-semibold bg-gray-100 p-4 rounded-xl mb-2'>No of Passengers: {car.maxPass}</h2>
            <button onClick={() => setShowForm(true)} type='submit' className="primary">Reserve Now</button>
        </div>
      </div>
      <div className="mt-4 bg-white -mx-8 px-8 py-4">
        <h2 className='font-bold'>Extra Information</h2>
        <h4 className='italic'>The information in gray text below is provided by the car owner when registering their car with us. Copyright claims may apply.</h4>
        <p className='text-gray-500'>"{car.extraInfo}"</p>
      </div>
    </div>
  )
}

export default SingleCar
