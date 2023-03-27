import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Account from './Account'

const NewCarForm = () => {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [address,setAddress] = useState('');
    const [addedPhotos,setAddedPhotos] = useState([]);
    const [description,setDescription] = useState('');
    const [perks,setPerks] = useState([]);
    const [extraInfo,setExtraInfo] = useState('');
    const [checkIn,setCheckIn] = useState('');
    const [checkOut,setCheckOut] = useState('');
    const [maxGuests,setMaxGuests] = useState(1);
    const [price,setPrice] = useState(100);
    const [redirect,setRedirect] = useState(false);

    async function savePlace(ev) {
        ev.preventDefault();
        const placeData = {
          title, address, addedPhotos,
          description, perks, extraInfo,
          checkIn, checkOut, maxGuests, price,
        };
        if (id) {
          // update
          await axios.put('/places', {
            id, ...placeData
          });
          setRedirect(true);
        } else {
          // new place
          await axios.post('/places', placeData);
          setRedirect(true);
        }
    
      }


  return (
<div>
      <Account />
      <form onSubmit={savePlace}>
        {/* {preInput('Title', 'Title for your place. should be short and catchy as in advertisement')} */}
        <input type="text" value={title} onChange={ev => setTitle(ev.target.value)} placeholder="title, for example: My lovely apt"/>
        {/* {preInput('Address', 'Address to this place')} */}
        <input type="text" value={address} onChange={ev => setAddress(ev.target.value)}placeholder="address"/>
        {/* {preInput('Photos','more = better')} */}
        {/* <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} /> */}
        {/* {preInput('Description','description of the place')} */}
        <textarea value={description} onChange={ev => setDescription(ev.target.value)} />
        {/* {preInput('Perks','select all the perks of your place')} */}
        <div className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {/* <Perks selected={perks} onChange={setPerks} /> */}
        </div>
        {/* {preInput('Extra info','house rules, etc')} */}
        <textarea value={extraInfo} onChange={ev => setExtraInfo(ev.target.value)} />
        {/* {preInput('Check in&out times','add check in and out times, remember to have some time window for cleaning the room between guests')} */}
        <div className="grid gap-2 grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mt-2 -mb-1">Check in time</h3>
            <input type="text"
                   value={checkIn}
                   onChange={ev => setCheckIn(ev.target.value)}
                   placeholder="14"/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Check out time</h3>
            <input type="text"
                   value={checkOut}
                   onChange={ev => setCheckOut(ev.target.value)}
                   placeholder="11" />
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Max number of guests</h3>
            <input type="number" value={maxGuests}
                   onChange={ev => setMaxGuests(ev.target.value)}/>
          </div>
          <div>
            <h3 className="mt-2 -mb-1">Price per night</h3>
            <input type="number" value={price}
                   onChange={ev => setPrice(ev.target.value)}/>
          </div>
        </div>
        <button className="primary my-4">Save</button>
      </form>
    </div>
  )
}

export default NewCarForm
