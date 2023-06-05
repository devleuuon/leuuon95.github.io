import React from 'react';
import { BsCart } from 'react-icons/bs'
import './CartButton.css'

function CartButton() {
  return(
    <button type='button' className='cart_button'>
      <BsCart/>
      <span className='cart-status'>1</span>
    </button>
  )
}


export default CartButton;