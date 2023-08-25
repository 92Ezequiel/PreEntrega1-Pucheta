import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Card, Col, Container, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"
import FormList from "./FormList"

const Cart = () => {

  const {cart, setCart, minusItem, plusItem, orderId, setOrderId}= useContext(CartContext)
  const [form, setForm]= useState(false)

  const total= cart.reduce((accum, e)=> accum + e.precio*e.quantity, 0)

  const deleteItem= (producto)=>{
    const deleteId= cart.find((p)=>p.producto===producto)
    const actualCart= cart.filter((p)=>{
      return p !== deleteId
    })
    setCart(actualCart)
  }
  
  const cleaningCart= ()=>{
    setCart([])
    setOrderId(null)
  }

  {if (cart.length > 0){
    return(
    <>
    {cart.map((producto)=>{
      return(
      <Container fluid key={producto.id}>
        <Row className="cart">
        <Col>
         <Card style={{ width: '12rem', height:'20rem'}}>
            <Card.Img variant="top" src={producto.url} className='img' />
          <Card.Body>
            <Card.Title>{producto.producto}</Card.Title>
          </Card.Body>
         </Card>
        </Col>
      <Col>
       <div className="cantidad">
         <Button variant="success" onClick={()=>minusItem(producto)}>-</Button>
         <h1>{producto.quantity}</h1>
         <Button variant="success" onClick={()=>plusItem(producto)}>+</Button>
      </div>
      </Col>
      <Col>
        <h1 >Precio: ${producto.precio*producto.quantity}</h1>
      </Col>
      <Col>
        <Button variant="success" onClick={()=>deleteItem(producto.producto)}>Eliminar</Button>
      </Col>
      </Row>
      </Container>
      )})}
      <div className="precio">
          <h2>Precio Total: ${total}</h2>
      </div>
      <div className="buttonsCart">
      <div className="volver">
        <Link to={'/'} className='link'>
        <Button variant="success">Voler al catalogo</Button>
        </Link>
      </div>
      <div className="pedir">
        <Button variant="success" onClick={()=>setForm(true)} >Realizar Pedido </Button>
      </div>
        <Button variant="success" onClick={cleaningCart} >Vaciar Carrito </Button>
      </div>
      {form && <FormList setCart={setCart} cart={cart} total={total}/>}
      </>
      )
    }else if(cart.length===0 && orderId!=null){
      return(
      <>
      <div className="formOrder">
      <h1>¡Muchas gracias por tu pedido! </h1>
      <h3>Nos contactaremos con vos para finalizar los detalles de la compra, recorda tener tu numero de orden</h3>
      </div>
      <div className="finalOrder">
      <h3>Numero de orden: {orderId}</h3>
      <Button variant='success' onClick={cleaningCart} >Finalizar Pedido</Button>
      </div>
      </>
      )
    } else{
      return(
        <div className="emptyBaner">
      <h2 className="emptyCart">
        De momento no has agregado nada a tu carrito
      </h2>
      </div>
      )
      }

      }}
      



export default Cart