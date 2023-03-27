import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CarsPage = () => {
    const {action} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [contaact, setContaact] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [descritpion, setDescritpion] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [maxPass, setMaxPass] = useState(1);

    function inputHeader(text) {
      return (
        <h2 className="text-2xl mt-4">{text}</h2>
      );
    }
    function inputDescription(text) {
      return (
        <p className="text-gray-500 text-sm">{text}</p>
      );
    }
    function preInput(header,description) {
      return (
        <>
          {inputHeader(header)}
          {inputDescription(description)}
        </>
      );
    }

    // console.log(action);
  return (
    <div>
        <div className="text-center">
            <Link className='inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full' to={'/account/cars/new'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                </svg>
                Add New Car
            </Link>
        </div>
        <div>
          <form>
            {preInput('Title', 'Title and model of your car. Should be Short and descriptive')}
            <p className='text-gray-500 text-sm'></p>
            <input type='text' placeholder='Car Name & Brand' />
            {preInput('Address', 'Address to your place')}
            <input type="text" placeholder='Address' />
            {preInput('Contact', 'Your Mobile Phone Number')}
            <input type="text" placeholder='Phone number, +254...' />
            {preInput('Photos', 'Upload descriptive  photos kindly')}
            <div className='flex gap-2'>
              <input type="text" placeholder='Or, Upload using Image Url ...jpg' />
              <button className='bg-gray-200 px-4 rounded-xl'>Add&nbsp; Photo</button>
            </div>
            <div className='mt-2 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              <button className='flex justify-center gap-1 border bg-transparent rounded-2xl p-8 text-2xl text-gray-600'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
              </svg>
                Upload
              </button>
            </div>
            {preInput('Description', 'Provide More Info about this car. Be detailed as possible')}
            <textarea />
            {preInput('Perks', 'Select all that apply')}
            <div className='grid grid-cols-2 mt-2 gap-2 md:grid-cols-3 lg:grid-cols-6'>
             
            </div>
            {preInput('Extra Info', 'Car rules and any other vital information')}
            <textarea />
            {preInput('Number of Days', 'How many days can your car be rented? Max number of passengers your car can accommodate')}
            <div>
              <div className='grid gap-2 sm:grid-cols-3'>
                <h3 className='mt-2 -mb-2'>First day available</h3>
                <input type="text" placeholder='31/03/2023 19:00...' />
              </div>
              <div>
                <h3>Last day/Return date</h3>
                <input type="text" placeholder='31/03/2023 19:00...' />
              </div>
              <div>
                <h3>Number of passengers</h3>
                <input type="text" placeholder='Passengers'/>
              </div>
            </div>
            <button className='primary my-4'>Save</button>
          </form>
        </div>
    </div>
  )
}

export default CarsPage
