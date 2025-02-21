import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {articles } from './news'

function NewsPageTwo() {
    return(
        <Container style={{ backgroundColor: "#131928", minHeight: '100vh'}}>
            <Row>
                <h1 className="text-center">First Level start idea</h1>
            </Row>
            <Row>
                <Col>
                something goes here
                </Col>
            </Row>
        </Container>
    )
}

export default NewsPageTwo;