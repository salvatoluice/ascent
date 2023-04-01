import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleCar = () => {
    const {id} = useParams();
    const [car, setCar] = useState([]);
    const [showAll, setShowAll] = useState(false)
    useEffect(() => {
        if(!id) {
            return;
        }
        axios.get(`/cars/${id}`).then(response => {
            setCar(response.data)
        })
    }, [id]);

    if(!car) return '';

    if (showAll) {
        return (
            <div className='absolute inset-0 bg-black text-white min-h-screen'>
                <div className='bg-black p-8 grid gap-4'>
                    <div>
                        <h2 className='text-2xl'>{car.title} Photos</h2>
                        <button onClick={() => setShowAll(false)} className='fixed flex gap-1 right-12 top-8 py-2 px-4 rounded-xl shadow shadow-black bg-white text-black'>
                            Close  
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    {car?.photos?.length > 0 && car.photos.map(photo => (
                        <div>
                            <img src={'http://localhost:4000/uploads/'+photo} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        );
    }


  return (
    <div className='mt-4 pt-4 bg-gray-100 -mx-8 px-8 py-8'>
      <h1 className='text-2xl'>{car.title}</h1>
      <div className='flex gap-4'>
      <a className='flex font-semibold underline my-2 gap-1' target='_blank' href={'https://maps.google.com/?q='+car.address}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-6 text-gray-500">
            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
        {car.address}</a>
        <h3 className='my-2 gap-1'> Phone no: <b>{car.contaact}</b></h3>
      </div>
      <div className='relative'>
        <div className="grid gap-2 grid-cols-[2fr_1fr]">
            <div>
                {car.photos?.[0] && (
                    <div>
                        <img className='aspect-square object-cover' src={'http://localhost:4000/uploads/'+car.photos?.[0]} alt="" />
                    </div>
                )}
            </div>
            <div className='grid'>
                {car.photos?.[1] && (
                    <img className='aspect-square object-cover' src={'http://localhost:4000/uploads/'+car.photos?.[1]} alt="" />
                )}
                <div className='overflow-hidden'>
                    {car.photos?.[2] && (
                        <img className='aspect-square object-cover relative top-2' src={'http://localhost:4000/uploads/'+car.photos?.[2]} alt="" />
                    )}
                </div>
            </div>
        </div>
        <button onClick={() => setShowAll(true)} className='absolute bottom-2 right-2 py-2 px-4 bg-white rounded-xl border-black shadow-shadow-md shadow-gray-500'>Show More Photos</button>
      </div>
      <div className='my-4 border-b pb-2'>
        <h2 className='font-semibold text-2xl '>Description & Price</h2>
        {car.description}
      </div>
      <div className='grid grid-cols-2 gap-2 mt-2'>
        <div>
            <p className='text-gray-500'>The prices shown below are listed by the owner of this car. We don't take part in negotiating for the car price neither do we manipulate any information entered by the car owner. All prices are in  kenyan shillings.</p>
        </div>
        <div className='bg-white px-6 py-1 rounded-xl mt-4 w-200'>
            <h1 className="text-center font-bold mt-2">Prices</h1>
            <div className="flex bg-gray-100 p-4 rounded-xl mb-2 mt-2">
                <h1 className="">Price: <b>Ksh. {car.dayprice} /day</b></h1> <br />
            </div>
            <div className="flex bg-gray-100 p-4 rounded-xl mb-2">
                <h1 className=""><b>Ksh. {car.weekprice} /week</b></h1> <br />
            </div>
            <h2 className='font-semibold bg-gray-100 p-4 rounded-xl mb-2'>No of Passengers: {car.maxPass}</h2>
            <button className="primary">Hire  Now</button>
        </div>
      </div>
    </div>
  )
}

export default SingleCar
