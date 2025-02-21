import { Container, Row, Col } from 'react-bootstrap';
import NewsPageOne from './NewsPageOne'
import Image from 'react-bootstrap/Image';
import './news.css';


const articles = [
    {id:1, title: 'World Map Sneak Peak!', url: '/NewsPageOne',
        description: 'Inside is the first look of the world map of our game!',
        image: '/assets/art/Test_1_world_map.jpg',
    },
    {
     id:2,
     title:"First level design idea!",
     url: '/NewsPageTwo',
     description: "Inside look at the first level starting area",
     image: '/assets/art/Intro_Stage.jpg'
    },
    {
     id:3,
     title: 'Echo first sprite look',
     url: '/NewsPageThree',
     description: 'first look at echo in sprite form',
     image: '/assets/art/echo_draft01.png'
    }
];
function News() {
    
    return (
        <Container className='news' style={{backgroundColor: '#131928', minHeight: '100vh'}}>
        <div >
            <h1 style={{color: 'white', textAlign: 'center', }} >This is the news!</h1>
            <ul className="news-list" style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                padding: '0',
                listStyle: 'none'
            }}>
    {articles.map(article => (
        <li key={article.id} style={{flexDirection:'column', display: 'flex', alignItems: 'center', padding: '20px', borderRadius: '8px', textAlign: 'center', width:'45%', border: '2px solid white'}}>
            <Image
                src={article.image}
                alt={article.title}
                rounded
                style={{width: '100px', height: '100px', marginRight: '10px'}}
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