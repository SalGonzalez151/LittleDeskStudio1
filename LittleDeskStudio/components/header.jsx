import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from 'react-router-dom';

function Header() {

    return (
        <>
            <Nav
            style={{justifyContent: 'space-evenly'}}
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
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
        <Nav.Link eventKey="link-3">Meet The Team</Nav.Link>
      </Nav.Item>
    </Nav>
        </>
    )
}

export default Header;