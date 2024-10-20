import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Header from '../components/header.jsx'
import Homepage from '../components/homepage.jsx'
import Art from '../components/art.jsx'
import './App.css'
import { Container, Image, Row, Col } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ backgroundColor: 'black',color: 'white', textAlign: 'center'}}>
        <h1>Little Desk Studios</h1>
        <Row>
        <Header />
      </Row>
      </div>
      <div style={{backgroundColor: '#131928'}}>
      <Container>
        <Art/>
      </Container>
      </div>
      

    </>
  )
}

export default App
