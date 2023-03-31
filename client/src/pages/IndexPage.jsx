import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

export default function IndexPage () {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get('/cars')
    .then(response => {
      setCars(response.data);
    });
  }, [])
    return (
      <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cars.length > 0 && cars.map(car => (
          <Link to={'/cars/'+car?._id}>
            <div className="bg-gray-500 mb-2 rounded-2xl flex">
              {car.photos?.[0] && (
                <img className="rounded-2xl object-cover aspect-square" src={'http://localhost:4000/uploads/'+car.photos?.[0]} alt="" />
              )}
            </div>
            <h2 className="font-bold text-sm">{car.address}</h2>
            <h3 className="text-xl leading-4 text-gray-500">{car.title}</h3>
            <div className="mt-2">
              <span className="font-bold">Ksh. {car.dayprice}</span> /day 
            </div>
          </Link>
        ))}
      </div>
    );
}