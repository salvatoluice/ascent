import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountNav from './AccountNav';
import axios from 'axios';
import CarImg from './CarImg';

const CarsPage = () => {
    const [cars, setCars] = useState([]);
    // console.log(action);

    useEffect(() => {
        axios.get('/user-cars').then(({data}) => {
            // console.log('hello')
            setCars(data);
        });
    }, [])

  return (
    <div>
        <AccountNav />
        <div className="text-center">
            <p>List of my Cars to rent out</p> <br />
            <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/account/cars/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                Add New Car
            </Link>
        </div>
        <div className='mt-4 text-black'>
            {cars.length > 0 && cars.map(car => (
                <Link to={'/account/cars/'+car._id} className='flex bg-gray-100 cursor-pointer mt-4 gap-4 p-4 rounded-2xl'>
                    <div className='flex w-32 h-32 bg-gray-300 grow shrink-0'>
                        <CarImg car={car} />
                    </div>
                    <div className='grow-0 shrink'>
                        <h2 className='text-xl'>{car.title}</h2>
                        <p className='text-sm mt-2'>{car.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default CarsPage
