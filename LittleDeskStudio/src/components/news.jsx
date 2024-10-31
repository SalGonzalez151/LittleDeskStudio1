import { Container, Row, Col } from 'react-bootstrap';
import NewsPageOne from './NewsPageOne'
import './news.css';


const articles = [
    {id:1, title: 'World Map Sneak Peak!', url: '/NewsPageOne'}
];
function News() {
    
    return (
        <Container className='news' style={{backgroundColor: '#131928', minHeight: '100vh'}}>
        <div >
            <h1 style={{color: 'white', textAlign: 'center'}} >This is the news!</h1>
            <ul className="news-list">
                {articles.map(article => (
                    <li key={article.id}>
                        <a href={article.url} className='news-link'>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
        </Container>
    )

    
}

export default News;
export { articles };