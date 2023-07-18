import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';

// Para los enlances de navegación
import {Link, NavLink} from 'react-router-dom'

export function Header({poke}) {
  return (
    <Navbar expand="lg" className={poke ? "bg-success" : "bg-black"}>
      <Container>
        <img width="64" height="64" src="https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/64/external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan.png" alt="external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan"/>
        <Navbar.Brand href="#home" className='text-warning'>Botillería CL</Navbar.Brand>
        <img width="50" height="50" src="https://img.icons8.com/external-flat-icons-pack-pongsakorn-tan/64/external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan-2.png" alt="external-alcohol-supermarket-flat-icons-pack-pongsakorn-tan-2"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-warning'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className='text-light text-center'>Home</NavLink>
            <NavLink to="/PokeApi" className='text-light text-center'>PokeApi</NavLink>
            <NavLink to="/productos/carniceria" className='text-light text-center'>Carnicería</NavLink>
            <NavLink to="/productos/verduleria" className='text-light text-center'>Verdulería</NavLink>
            <NavLink to="/productos/panaderia" className='text-light text-center'>Panadería</NavLink>
            <NavLink to="/productos/perfumeria" className='text-light text-center'>Perfumería</NavLink>
            <CartWidget></CartWidget>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


