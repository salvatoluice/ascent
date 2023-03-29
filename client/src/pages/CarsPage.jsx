import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Perks from '../Perks';
import axios from 'axios';

const CarsPage = () => {
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [contaact, setContaact] = useState('');
    const [addedPhotos, setAddedPhotos] = useState([]);
    const [photoLink, setPhotoLink] = useState('');
    const [description, setDescription] = useState('');
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

    async function addPhotoByLink(ev) {
      ev.preventDefault();
      const {data:filename} = await axios.post('/upload-by-link', {link: photoLink})
      setAddedPhotos(prev => {
        return [...prev, filename];
      });
      setPhotoLink('');
    }

    function uploadPhoto(ev) {
      const files = ev.target.files;
      // console.log(files);
      const data = new FormData();
      data.set('photos', files) 
      axios.post('/upload', data, {
        headers: {'Content-type':'multipart/form-data'}
      }).then(response => {
        const {data:filename} = response;
        // console.log(data);
        setAddedPhotos(prev => {
          return [...prev, filename];
        });
      })
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
            <input type='text' placeholder='Car Name & Brand' value={title} onChange={e => setTitle(e.target.value)} />
            {preInput('Address', 'Address to your place')}
            <input type="text" placeholder='Address' value={address} onChange={e => setAddress(e.target.value)} />
            {preInput('Contact', 'Your Mobile Phone Number')}
            <input type="text" placeholder='Phone number, +254...' value={contaact} onChange={e => setContaact(e.target.value)} />
            {preInput('Photos', 'Upload descriptive  photos kindly')}
            <div className='flex gap-2'>
              <input type="text" placeholder='Or, Upload using Image Url ...jpg' value={photoLink} onChange={e => setPhotoLink(e.target.value)} />
              <button onClick={addPhotoByLink} className='bg-gray-200 px-4 rounded-xl'>Add Photo</button>
            </div>
            <div className='mt-2 grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
              {addedPhotos.length > 0 && addedPhotos.map(link => {
                return (
                  <div>
                    <img className='rounded-2xl' src={'http://localhost:4000/uploads/'+link} alt="" />
                  </div>
                )
                })}
              <label className='flex cursor-pointer items-center justify-center gap-1 border bg-transparent rounded-2xl p-2 text-2xl text-gray-600'>
                <input type="file" className='hidden' onChange={uploadPhoto} />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
                  Upload
              </label>
            </div>
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
    </div>
  )
}

export default CarsPage
