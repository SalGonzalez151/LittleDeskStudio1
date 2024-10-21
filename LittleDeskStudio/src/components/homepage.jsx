import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import './homepage.css'


function HomePage() {

    return (
    <Container>
    <div className="text-center">
        <p style={{ color: 'white'}}>
            Welcome we are Little Desk Studios and we make games!
        </p>
    </div>
    <div>
        <Container>
    <Carousel fade>
      <Carousel.Item>
      <Image src="/assets/art/lavaLevel.avif" className="carousel-image"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src='/assets/art/NightForest.jpg' className="carousel-image"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image src="/assets/art/nightForestSwamp.jpg" className="carousel-image"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
    <div>
        <h2 style={{ color: 'white', marginBottom: '0px'}}>Latest</h2>
        <span style={{color: 'white', marginLeft: '50px', fontSize: "200%" }}>News</span>
        <Container>
        <Row>
            <Col>
            
            </Col>
        </Row>
        </Container>
    </div>
    </Container>
    )
}

export default HomePage