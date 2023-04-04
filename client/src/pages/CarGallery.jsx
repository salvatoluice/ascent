import React, { useState } from 'react'

const CarGallery = ({car}) => {
    const [showAll, setShowAll] = useState(false);

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
    <div className='relative'>
        <div className="grid gap-2 grid-cols-[2fr_1fr]">
            <div>
                {car.photos?.[0] && (
                    <div>
                        <img onClick={() => setShowAll(true)} className='aspect-square object-cover' src={'http://localhost:4000/uploads/'+car.photos?.[0]} alt="" />
                    </div>
                )}
            </div>
            <div className='grid'>
                {car.photos?.[1] && (
                    <img onClick={() => setShowAll(true)} className='aspect-square object-cover' src={'http://localhost:4000/uploads/'+car.photos?.[1]} alt="" />
                )}
                <div className='overflow-hidden'>
                    {car.photos?.[2] && (
                        <img onClick={() => setShowAll(true)} className='aspect-square object-cover relative top-2' src={'http://localhost:4000/uploads/'+car.photos?.[2]} alt="" />
                    )}
                </div>
            </div>
        </div>
        <button onClick={() => setShowAll(true)} className='absolute bottom-2 right-2 py-2 px-4 bg-white rounded-xl border-black shadow-shadow-md shadow-gray-500'>Show More Photos</button>
      </div>
  )
}

export default CarGallery
