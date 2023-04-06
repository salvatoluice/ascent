import React, { useState } from 'react'

const NewSpareForm = () => {

    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [supplier, setSupplier] = useState('');
    const [features, setFeatures] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

  return (
    <div className="book">
                {/* <button onClick={() => setShowForm(false)} className='rounded-full p-1 border border-black bg-white mx-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
                    </svg>
                </button> */}
                <h1 className='text-center font-bold text-2xl'>Add New Spare Part </h1>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Title:</label>
                    <input type="text" required placeholder='E.g Break system charge' value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Image Url:</label>
                    <input type="text" required placeholder='Image URL here...' value={image} onChange={e => setImage(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Category:</label>
                    <input type="text" required placeholder='Tyre/Light' value={category} onChange={e => setCategory(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Type:</label>
                    <input type="text" required placeholder='E.g Toyota/BMW' value={type} onChange={e => setType(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Manufacturer:</label>
                    <input type="text" required placeholder='E.g Rana Motors' value={manufacturer} onChange={e => setManufacturer(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Description:</label>
                    <input type="text" required placeholder='Some description here' value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Supplier:</label>
                    <input type="text" required placeholder='E.g Ascent suppliers ltd' value={supplier} onChange={e => setSupplier(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Features:</label>
                    <input type="text" required placeholder='Key features' value={features} onChange={e => setFeatures(e.target.value)} />
                </div>
                <div className="grid py-3 px-4">
                    <label className='font-semibold'>Price:</label>
                    <input type="number" required placeholder='Product ptice' value={price} onChange={e => setPrice(e.target.value)} />
                </div>
                <button className='primary'>
                    Add
                </button>
            </div>
  )
}

export default NewSpareForm
