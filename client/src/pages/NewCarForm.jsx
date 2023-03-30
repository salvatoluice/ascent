import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Perks from '../Perks';
import AccountNav from './AccountNav';
import PhotoUploader from './PhotoUploader';

const NewCarForm = () => {
  const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [contaact, setContaact] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [description, setDescription] = useState('');
    const [perks, setPerks] = useState([]);
    const [extraInfo, setExtraInfo] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const [maxPass, setMaxPass] = useState(1);

    const navigate = useNavigate();

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

    async function addNewCar(e){
      e.preventDefault();

      const carData = {
        title, address, contaact,
        addedPhotos, description, perks, 
        extraInfo, checkin, checkout, 
        maxPass
      };
      await axios.post('/cars', {
        title, address, contaact,
        addedPhotos, description, perks, 
        extraInfo, checkin, checkout, 
        maxPass
      });
      navigate('/account/cars');
    }


  return (
    <div>
      <AccountNav />
      <form onSubmit={addNewCar}>
        {preInput('Title', 'Title and model of your car. Should be Short and descriptive')}
        <input type='text' placeholder='Car Name & Brand' value={title} onChange={e => setTitle(e.target.value)} />
        {preInput('Address', 'Address to your place')}
        <input type="text" placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
        {preInput('Contact', 'Your Mobile Phone Number')}
        <input type="text" placeholder='Phone number, +254...' value={contaact} onChange={e => setContaact(e.target.value)} />
        {preInput('Photos', 'Upload descriptive  photos kindly')}
        <PhotoUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />
        {preInput('Description', 'Provide More Info about this car. Be detailed as possible')}
        <textarea value={description} onChange={e => setDescription(e.target.value)}/>
        {preInput('Perks', 'Select all that apply')}
        <div className='grid grid-cols-2 mt-2 gap-2 md:grid-cols-3 lg:grid-cols-6'>
         <Perks selected={perks} onChange={setPerks} />
        </div>
        {preInput('Extra Info', 'Car rules and any other vital information')}
        <textarea value={extraInfo} onChange={e => setExtraInfo(e.target.value)} />
        {preInput('Number of Days', 'How many days can your car be rented? Max number of passengers your car can accommodate')}
        <div className='grid gap-2 sm:grid-cols-3'>
          <div>
            <h3 className='mt-2 -mb-2'>First day available</h3>
            <input type="text" placeholder='31/03/2023 19:00...' value={checkin} onChange={e => setCheckin(e.target.value)} />
          </div>
          <div>
            <h3 className='mt-2 -mb-1'>Last day/Return date</h3>
            <input type="text" placeholder='31/03/2023 19:00...' value={checkout} onChange={e => setCheckout(e.target.value)} />
          </div>
          <div>
            <h3 className='mt-2 -mb-1'>Number of passengers</h3>
            <input type="text" placeholder='Passengers' value={maxPass} onChange={e => setMaxPass(e.target.value)} />
          </div>
        </div>
        <button className='primary my-4'>Save</button>
      </form>
    </div>
  )
}

export default NewCarForm
