import { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { collection, addDoc, getFirestore, writeBatch } from 'firebase/firestore';
import { CartContext } from '../context/CartContext';

const FormList = ({cart, setCart, total}) => {
    const {orderId, setOrderId}= useContext(CartContext)
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [number, setNumber]= useState('')


    const db= getFirestore()

    const handleSubmit= (e)=>{
        e.preventDefault()
        addDoc(ordersCollection, order).then(({id})=>
          setOrderId(id)
          )
          console.log(order)

          sendOrder()
          clear()
    };

    const order= {
      name,
      email,
      number
    }

    const sendOrder= ()=>{
      const currentDate= new Date()
      const items= cart.map((p)=>({
        producto: p.producto,
        cantidad: p.quantity,
        precio: p.precio
      }));
      const orders= {
        items: items,
        total: total,
        fecha: currentDate.toISOString()
    }
    console.log(orders)
    const db= getFirestore()
    const ordersCollection= collection(db, "Pedido");
    addDoc(ordersCollection, orders).then(({id})=>setOrderId(id));
    }

    const ordersCollection= collection(db, "Orden")

    const clear=()=>{
      setCart([])
    }

  return (
    <>
        <Form onSubmit={handleSubmit} className='form'>
        <Row className="mb-3">
          <Form.Group as={Col} md="4">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              name='name'
              onChange={(e)=>setName(e.target.value)}

            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Telefono</Form.Label>
              <Form.Control
                type="number"
                placeholder="telefono"
                name='number'
                required
                onChange={(e)=>setNumber(e.target.value)}
              />
           </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Email</Form.Label>
            <Form.Control required type="text" placeholder="email" name='adress' onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Group>
        </Row>
        <Button type="submit">Enviar</Button>
      </Form>
    </>

  )
}

export default FormList