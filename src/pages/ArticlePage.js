import React from 'react';
import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';

const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    
    if(!article) return <h1>Oops! Article not found.</h1>

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
    <>
    <h1>{article.title}</h1>
    {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
    ))}
    <h3>Other Articles: </h3>
    <ArticlesList articles={otherArticles} />
    </>
);
}
export default ArticlePage;