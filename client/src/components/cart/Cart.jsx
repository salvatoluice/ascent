import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, delCart } from "../../redux/action";
import { AiOutlineMinus } from 'react-icons/ai'
import { GrFormAdd } from 'react-icons/gr'
import { Link } from 'react-router-dom';

const Cart = ({product}) => {
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
            <div className="row">
              <h3>Your Cart is Empty</h3>
            </div>
        );
      };

    const cartItems = (product) => {
        return (
            <>
                <div className='cart'>
                    <img className='cart_image' src={product.image} alt={product.title} />
                    <div className='description'>
                        <h3>{product.title}</h3>
                        <p>
                            {product.qty} X Ksh. {product.price} = <span className='total'>Ksh. {product.qty * product.price}</span>
                        </p>
                        <button style={{color: 'red'}} className='action' onClick={() => handleDel(product)}><AiOutlineMinus /></button>
                        <button style={{color: 'green'}} className='actions' onClick={() => handleAdd(product)}><GrFormAdd /></button>
                    </div>
                </div>
            </>
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