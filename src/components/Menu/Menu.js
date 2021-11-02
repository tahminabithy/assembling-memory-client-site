import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AddPlaces from '../AddPlaces/AddPlaces';
import './Menu.css'
const Menu = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home" className='icon-font text-warning'>Assembling Memories</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home" className='text-color'>Home</Nav.Link>
                        {
                            user.email ? <Nav.Link as={Link} to="/addplace" className='text-color'>Add Place</Nav.Link> : ''
                        }
                        {
                            user.email ? <Nav.Link as={Link} to="/mybookings" className='text-color'>My Bookings</Nav.Link> : ''
                        }
                        {
                            user.email ? <Nav.Link as={Link} to="/allbookings" className='text-color'>All Bookings</Nav.Link> : ''
                        }

                        <Navbar.Text>
                            <span className='text-warning ms-2'>{user?.displayName}</span>
                            {
                                user.email ? <Link to='/login'> <button onClick={logout} className='btn btn-outline-warning ms-3'>Log out</button></Link> : <Link to="/login"><button type="button" class="btn btn-outline-warning ms-4">Log In</button></Link>
                            }
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;