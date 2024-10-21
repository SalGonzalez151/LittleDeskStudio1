import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import Header from './components/header';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <main style={{ backgroundColor: "#131928"}}>
        <Container >
        <Header />
          <Row>
            <Col>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
