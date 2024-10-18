import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Header from '../components/header.jsx'
import Homepage from '../components/homepage.jsx'
import './App.css'
import { Container, Image, Row, Col } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ backgroundColor: 'gray', textAlign: 'center'}}>
        <h1>Little Desk Studios</h1>
        <Row>
        <Header />
      </Row>
      </div>
      <div>
      <Container>
        <Homepage/>
      </Container>
      </div>
      

    </>
  )
}

export default App
