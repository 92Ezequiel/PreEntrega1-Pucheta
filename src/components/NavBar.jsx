import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap/';
import CarWidget from './CarWidget';

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className='Navbar' >
                <Container fluid>
                    <div className='logo'>
                    <h1 href="#home" className='brand'>Craft </h1>
                     <p className='brandTwo'>Pasteleria Vegana</p>
                     </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">¿Quiénes Somos?</Nav.Link>
                            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Stock</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Pedidos</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Contacto</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CarWidget />
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar