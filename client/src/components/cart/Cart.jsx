import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from "../../redux/action";
import { AiOutlineMinus } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom';

const Cart = ({spare}) => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
  
    const handleAdd = (item) => {
      dispatch(addCart(item));
    };
    const handleDel = (item) => {
      dispatch(delCart(item));
    };

    const emptyCart = () => {
        return (
            <div className="">
              <h3>Your Cart is Empty</h3>
            </div>
        );
      };

    const cartItems = (spare) => {
        return (
            <div className='flex flex-col text-white'>
                <div className='text-white flex gap-6'>
                    <img className='flex w-48' src={spare.image} alt={spare.title} />
                    <div className='flex flex-col gap-1'>
                        <h3 style={{color: '#F53850'}} className='text-2xl'>{spare.title}</h3>
                        <div className='flex flex-col'>
                            <span>Quantity: {spare.qty}</span>
                             <span>Product Amount: <span className='font-bold italic'>Ksh. {spare.price}</span></span>
                             <span className=''>Total: <span style={{color: '#F53850'}} className="font-bold italic underline">Ksh. {spare.qty * spare.price}</span> </span>
                        </div>
                        <div className='flex w-16 gap-4 items-center text-center'>
                        <button className='primary' onClick={() => handleDel(spare)}><AiOutlineMinus /></button>
                        <button className='primary' onClick={() => handleAdd(spare)}><GrFormAdd /></button>
                        {/* <button className='primary' onClick={() => handleDel(spare)}>Remove</button> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const buttons = () => {
        return (
            <div className='flex justify-center'>
                <div className='w-48'>
                    <Link to='/spares/payment'>
                        <button className="primary">Proceed to pay</button>
                    </Link>
                </div>
            </div>
        )
    }


  return (
    <div className='flex flex-col gap-4 mt-6 py-6'>
        <div className=''></div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && buttons()}
    </div>
  )
}

export default Cart;
