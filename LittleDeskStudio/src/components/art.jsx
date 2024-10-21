import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';


function Art() {

    return (
        <Container fluid style={{ backgroundColor: '#131928', minHeight: '100vh', padding: 0, margin: 0, maxWidth: '100%'}}>
            <Row className="justify-content-center" style={{marginBottom: 20}}>
                <Col xs="auto" >
                <h3 style={{ color: 'white', textAlign: 'center'}}>First Company logo design</h3>
                <Image src="../assets/art/CompanyLogo.png" rounded 
                style={{width:'100%', maxWidth: '1000px', height: '400px' }}
                />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={6} md={4} className="m-10">
                <h3 style={{color: 'white', textAlign: 'center'}}>Echo's first draft</h3>
                  <Image src="../assets/art/echodraft.png" rounded
                  style={{width:'100%', maxWidth: '1000px', height: '400px',  }} />
                </Col>
                <Col xs={6} md={4}>
                <h3 style={{color: 'white', textAlign: 'center'}}>First boss design idea</h3>
                <Image src="../assets/art/bossdraft.jpg" rounded
                  style={{width:'100%', maxWidth: '1000px', height: '400px' }} />
                </Col>
                </Row>
            <Row>
                <Col>
                this is text 2
                </Col>
                <Col>
                this is text 3
                </Col>
            </Row>
        </Container>
    )
}

export default Art;