import { Container, Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {articles } from './news'

function NewsPageOne() {

        return (
            <>
            <Container style={{ backgroundColor: "#131928", minHeight: '100vh'}}>
                <Row>
                    <h1 className='text-center' style={{color: 'white'}}>World Map sneak peak!?</h1>
                </Row>
                <Row>
                <Col md={6}>
                <p style={{color: 'white'}}>We have just began working on the world map, here is a sneak peak how it might look like. Of course since we just started it will most likely change.</p>
                <p style={{ color: 'white'}}>
                    We also have the world map level select working. While we can't show that yet, we are very proud we got it to work. Hopefully soon we can show you images of it or a video even!
                    stay tuned for more news from us Little Dest Studios!
                </p>
                </Col>
                <Col md={6}>
                <Image src='assets/art/Test_1_world_map.jpg' rounded fluid style={{width:'50%', marginLeft:'80px'}} />
                </Col>
                </Row>
                <Col>
                <ul>
                {articles.map(article => (
                    <li key={article.id}>   
                        <a href={article.url} style={{ color: 'white', textDecoration: 'underline'}}>
                            {article.title}
                            </a>
                    </li>
                ))}
            </ul>
                </Col>
            </Container>
            
            </>
        )
}

export default NewsPageOne;