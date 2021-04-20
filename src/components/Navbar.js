import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './Navbar.css'

const MainNavbar = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" className="navbar-div">
            <Navbar.Brand className='navbar-brand'><Link to='/'>ScoreBase</Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
                <Nav.Link ><Link to='/scorekeep'>Scorekeep</Link></Nav.Link>
            </Nav>
        </Navbar>
        </>
    )
}

export default MainNavbar