import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = () => {

    const [cantidad, setCantidad]= useState(0)
    
    useEffect(()=>{
        console.log(`${cantidad}`)
    }, [cantidad])

    const sumar = ()=>{
        setCantidad(prev => prev + 1)
    }

    const restar =()=>{
     cantidad > 0 ? setCantidad(prev => prev - 1) : setCantidad(cantidad)
    }

  return (
    <div> 
    <ButtonGroup aria-label="Basic example">
      <Button variant="success" onClick={restar}>-</Button>
      <Button variant="light">{cantidad}</Button>
      <Button variant="success" onClick={sumar}>+</Button>
    </ButtonGroup>
    </div>
  )
}

export default ItemCount