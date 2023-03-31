import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Perks from '../Perks';
import AccountNav from './AccountNav';
import PhotoUploader from './PhotoUploader';

const NewCarForm = () => {
  const {id} = useParams();
  // console.log(id);
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [contaact, setContaact] = useState('');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState('');
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState('');
  const [weekprice, setWeekprice] = useState(10000);
  const [dayprice, setDayprice] = useState(2000);
  const [maxPass, setMaxPass] = useState(4);


  useEffect(() => {
    if(!id) {
      return;
    }
    axios.get('/cars/'+id)
    .then(response => {
      const {data} = response;
      setTitle(data.title);
      setAddress(data.address);
      setContaact(data.contaact);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setDayprice(data.dayprice);
      setWeekprice(data.weekprice);
      setMaxPass(data.maxPass);
    })
  }, [id])

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

    async function saveCar(e){
      e.preventDefault();
      const carData = {
        title, address, contaact,
        addedPhotos, description, perks, 
        extraInfo, dayprice, weekprice, 
        maxPass
      };

      if (id) {
        // Update car details
        await axios.put('/cars', {
          id, ...carData
        });
        navigate('/account/cars');
      } else {
        // Add new car
        await axios.post('/cars', carData);
        navigate('/account/cars');
      }
      
    }


  return (
    <div>
      <AccountNav />
      <form onSubmit={saveCar}>
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
            <h3 className='mt-2 -mb-2'>Price per Day</h3>
            <input type="text" placeholder='Input Price, i.e 2000... no letters' value={dayprice} onChange={e => setDayprice(e.target.value)} />
          </div>
          <div>
            <h3 className='mt-2 -mb-1'>Price Per Week</h3>
            <input type="text" placeholder='31/03/2023 19:00...' value={weekprice} onChange={e => setWeekprice(e.target.value)} />
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
