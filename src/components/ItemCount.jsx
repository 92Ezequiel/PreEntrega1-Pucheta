import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({producto}) => {

    const {cart, setCart, minusItem, plusItem, buyItem}= useContext(CartContext)

    const cantidadProducto= cart.find(p=>p.producto===producto.producto)

  return (
    <div className='pedidoButton'> 
      <ButtonGroup aria-label="Basic example">
      <Button variant="success" onClick={()=>minusItem(producto)}>-</Button>
      <Button variant="light">{cantidadProducto ? cantidadProducto.quantity : 0}</Button>
      <Button variant="success" onClick={()=>plusItem(producto)}>+</Button>
    </ButtonGroup>
    <div>
      <Link to={'/cart'} className='link'>
      <Button variant='success' className='pedido' onClick={()=>buyItem(producto)}>Hace tu pedido</Button>
      </Link>
    </div>
    </div>
  )
}

export default ItemCount