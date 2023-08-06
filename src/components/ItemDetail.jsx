import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';


const ItemDetail = ({producto}) => {

  return (
    <div>
      {producto.map((producto)=>{
        return(
      <div key={producto.id} className='Card'>
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={producto.url} className='img' />
      <Card.Body>
        <Card.Title>{producto.producto}</Card.Title>
        <Card.Text>
          {producto.descripcion}
        </Card.Text>
        <ItemCount/>
        <Button variant='success' className='pedido'>Hace tu pedido</Button>
      </Card.Body>
    </Card>
      </div>
        )
      })}
    </div>
  )
}

export default ItemDetail