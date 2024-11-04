import { Container, Row, Col } from 'react-bootstrap';
import NewsPageOne from './NewsPageOne'
import Image from 'react-bootstrap/Image';
import './news.css';


const articles = [
    {id:1, title: 'World Map Sneak Peak!', url: '/NewsPageOne',
        description: 'Inside is the first look of the world map of our game!',
        image: '/assets/art/Test_1_world_map.jpg'

    }
];
function News() {
    
    return (
        <Container className='news' style={{backgroundColor: '#131928', minHeight: '100vh'}}>
        <div >
            <h1 style={{color: 'white', textAlign: 'center'}} >This is the news!</h1>
            <ul className="news-list">
    {articles.map(article => (
        <li key={article.id} style={{display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '100px', textAlign: 'center'}}>
            <Image
                src={article.image}
                alt={article.title}
                rounded
                style={{width: '50px', height: '50px', marginRight: '10px'}}
            />
            <div>
                <a href={article.url} className="news-link">{article.title}</a>
                <p className='news-description' style={{color: 'white'}}>{article.description}</p>
            </div>
        </li>
    ))}
</ul>
        </div>
        </Container>
    )

    
}

export default News;
export { articles };