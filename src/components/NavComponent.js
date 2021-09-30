import React from 'react'
import { Nav } from 'react-bootstrap';

const NavComponent = () => {
    return (
        <Nav
            activeKey="/home"
        >
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>            
            <Nav.Item>                
                <Nav.Link href="/clases">Clases</Nav.Link>
            </Nav.Item>
            <Nav.Item>                
                <Nav.Link href="/celi">Celi</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavComponent;