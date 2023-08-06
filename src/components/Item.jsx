import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({producto, descripcion, img, id, precio}) => {
  return (
    <div className='Card'>
    <Card style={{ width: '18rem', height:'34rem'}} className='cardStyle'>
      <Card.Img src={img} className='img'/>
      <Card.Body>
        <Card.Title>{producto}</Card.Title>
        <Card.Text>${precio} por porcion</Card.Text>
        <Button variant="success">
        <Link to={`/item/${id}`} className='link'>
          Detalle
        </Link>
        </Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item