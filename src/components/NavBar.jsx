import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap/';
import CarWidget from './CarWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <Navbar expand="lg" className='Navbar' >
                <Container fluid>
                    <Link to={'/'} className='link'>
                    <div className='logo'>
                    <h1 href="#home" className='brand'>Craft </h1>
                     <p className='brandTwo'>Pasteleria Vegana</p>
                     </div>
                     </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Catalogo" id="basic-nav-dropdown">
                                <NavDropdown.Item href="">
                                <Link to={`/categoria/cat1`} className='link'>
                                    Para Compartir
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="">
                                <Link to={`/categoria/cat2`} className='link'>
                                    Postres
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                <Link to={`/categoria/cat3`} className='link'>
                                    Tartas
                                </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to={'/cart'} className='link'> 
                    <CarWidget />
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar