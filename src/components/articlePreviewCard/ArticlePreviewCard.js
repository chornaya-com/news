import React from 'react';
import * as cn from './ArticlePreviewCard.module.css';
import {AppContext} from '../../App';

export function ArticlePreviewCard() {
    const {articles, openArticle} = React.useContext(AppContext);

    return articles.map((article, i) => {
        const date = new Date(article.publishedAt).toDateString();
        return (
            <div className={cn.articlePreviewCard} key={i}>
                <div className={cn.imageContainer} onClick={() => openArticle(article)}>
                    <img className={cn.image} src={article.urlToImage} alt="" />
                </div>
                <div className={cn.articlePreviewTitle} onClick={() => openArticle(article)}>
                    {article.title}
                </div>
                <div className={cn.articleSubtitle}>
                    by {article.author} on {date}
                </div>
                <div className={cn.articleDescription}>{article.description}</div>
            </div>
        );
    });
}
