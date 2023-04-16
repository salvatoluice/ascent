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
                <div className='text-white flex flex-col gap-2'>
                    <img className='flex w-96' src={spare.image} alt={spare.title} />
                    <div className=''>
                        <h3 className='text-white'>{spare.title}</h3>
                        <p>
                            {spare.qty} X Ksh. {spare.price} = <span className=''>Ksh. {spare.qty * spare.price}</span>
                        </p>
                        <button className='action' onClick={() => handleDel(spare)}><AiOutlineMinus /></button>
                        <button className='actions' onClick={() => handleAdd(spare)}><GrFormAdd /></button>
                    </div>
                </div>
            </div>
        )
    }

    const buttons = () => {
        return (
            <>
                <div className='btn'>
                    <Link to='/payment'>
                        <h3>Proceed to Payment</h3>
                    </Link>
                </div>
            </>
        )
    }


  return (
    <div className='main_cart'>
        <div className='space'></div>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && buttons()}
    </div>
  )
}

export default Cart;
