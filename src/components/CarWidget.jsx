import React, { useContext } from 'react'
import { RiCake3Fill } from 'react-icons/ri';
import { CartContext } from '../context/CartContext';

const CarWidget = () => {
  const {cart}= useContext(CartContext)
  
  const totalQuantity= cart.reduce((accum, e)=> accum + e.quantity, 0)
  return (
    <>
      <div className='widget'>
      <h2><RiCake3Fill/></h2>
      <h4>{totalQuantity}</h4>
      </div>
    </>
  )
}

export default CarWidget