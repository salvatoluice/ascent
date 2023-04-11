import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Mercedes = () => {
    const [spares, setSpares] = useState([]);
    useEffect(() => {
        axios.get('/spares').then(({data}) => {
            setSpares(data);
            console.log(data[0].type);
        });
    }, []);
  
  
    const filteredSpares = spares.filter((spare) => spare.type.toLowerCase() === "mercedes");
  
    function showDetails(){
      
    }
  
    return (
      <div className='className="py-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {filteredSpares.map((spares) => (
          <Link to={`/spares/${spares._id}`} className='w-64 shadow shadow-gray-500 p-4 rounded-xl'>
              <div className='bg-gray-500 mb-2 rounded-2xl flex'>
              <img className=' object-cover w-64 h-64' src={spares.image} alt="" />
              
            </div>
            <h2 className='font-semibold '>{spares.title}</h2>
            <h3 className="text-gray-400">{spares.category}</h3>
            <p>Price: <span className='font-semibold'>Ksh.{spares.price}</span> </p>
            <Link className='bg-primary px-4 items-center text-white py-1 rounded-xl'>Buy Now</Link>
          </Link>
        ))}
      </div>
    )
  }

export default Mercedes
