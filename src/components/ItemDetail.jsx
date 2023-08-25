import React, { useState, useContext } from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';



const ItemDetail = ({producto}) => {
  
  return (
    <div>
      {producto.map((producto)=>{
        return(
      <div key={producto.id} className='cardDetail'>
           <Card style={{ width: '18rem'}}>
            <Card.Img variant="top" src={producto.url}  alt={producto.producto} className='img' />
            <Card.Body>
              <Card.Title>{producto.producto}</Card.Title>
            </Card.Body>
           </Card>
           <div className='detail'>
            <h4>
              {producto.descripcion}
            </h4>
            <ItemCount producto={producto}/>
            </div>
      </div>
        )
      })}
    </div>
  )
}

export default ItemDetail