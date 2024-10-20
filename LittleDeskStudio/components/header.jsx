import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';

function Header() {

    return (
        <>
            <Navbar
            style={{justifyContent: 'space-evenly'}}
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >\
    <Nav activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Art</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">News</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Games</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4">Meet The Team</Nav.Link>
      </Nav.Item>
      </Nav>
    </Navbar>
    
        </>
    )
}

export default Header;