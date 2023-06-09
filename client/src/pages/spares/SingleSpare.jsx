import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { addCart } from '../../redux/action';
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';

const SingleSpare = () => {
    const {id} = useParams();
    const [spare, setSpare] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const addSpare = (spare) => {
        dispatch(addCart(spare));
        // console.log('added')
        // navigate('/spares/cart')
    }
    useEffect(() => {
        axios.get(`/spares/${id}`).then(response => {
            setSpare(response.data);
            // console.log(data);
        })
    }, [id]);
    // console

    
  return (
    <>
        <div className='flex mt-4 pt-4 bg-gray-100 w-full -mx-8 px-8 py-8 sm:flex-wrap'>
            <div>
                <img className='w-96 mx-4' src={spare.image} alt="" />
            </div>
            <div className='flex flex-col items-left'>
                <h1 className='text-3xl text-black font-bold'>{spare.title}</h1>
                <h2 className='text-xl text-black font-semibold py-2'>{spare.features}</h2>
                <p className='text-black'>Car: <span className='font-semibold'>{spare.type}</span></p>
                <p className='text-black'>Manufacturer: <span className='font-semibold py-2'>{spare.manufacturer}</span></p>
                <p className='text-xl text-black'>Supplier: <span className='font-semibold'>{spare.supplier}</span> </p>
                <p className='italic text-black text-xl pb-4'>Price: <span className='font-semibold'>Ksh. {spare.price}</span> </p>
                <button onClick={() => addSpare(spare)} className='primary'>Add to Cart</button>
            </div>
        </div>
        <div style={{width: '70%'}} className='py-4 m-auto'>
            <h2 className='font-bold text-4xl underline'>Description</h2>
            <p className='text-xl text-gray-500 py-2'>{spare.description}</p>
        </div>
    </>
  )
}

export default SingleSpare
