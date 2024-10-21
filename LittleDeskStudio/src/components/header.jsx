import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'; 
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const location = useLocation(); 

    return (
        <>
            <Navbar >
                <Nav style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }} activeKey={location.pathname}>
                    <Nav.Item>
                        <LinkContainer to="/">
                            <Nav.Link className='text-white'>Home</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/art">
                            <Nav.Link className='text-white' >Art</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/news">
                            <Nav.Link className='text-white'>News</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/games">
                            <Nav.Link className='text-white'>Games</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                    <Nav.Item>
                        <LinkContainer to="/team">
                            <Nav.Link className='text-white'>Meet The Team</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Navbar>
        </>
    );
}

export default Header;