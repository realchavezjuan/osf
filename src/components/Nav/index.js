import React, { useEffect } from 'react';
import {Nav} from "react-bootstrap";
//import {Link} from "react-router-dom"

function Navigation() {

  return (
    <header className="flex-row px-1">
        <h2>Ornamental Steel Fabrication</h2>
        <img src='./assets/images/projects/IMG_3258.jpeg'></img>
        <Nav className="justify-content-end navigation-wrapper">
        
            <Nav.Item>
                <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/services">SERVICES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/gallery">GALLERY</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/about">ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/contact">CONTACT</Nav.Link>
            </Nav.Item>
        </Nav>
    </header>
  );
}

export default Navigation;