import { Container, Row, Col } from 'react-bootstrap';
import NewsPageOne from './NewsPageOne'


const articles = [
    {id:1, title: 'World Map Sneak Peak!', url: '/NewsPageOne'}
];
function News() {
    
    return (
        <div>
            this is the news!
            <ul>
                {articles.map(article => (
                    <li key={article.id}>
                        <a href={article.url}>{article.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )

    
}

export default News;
export { articles };