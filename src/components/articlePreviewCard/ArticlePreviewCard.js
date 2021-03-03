import React from 'react';
import * as cn from './ArticlePreviewCard.module.css';
import {AppContext} from '../../App';
import {Link} from 'react-router-dom';

export function ArticlePreviewCard() {
    const {articles} = React.useContext(AppContext);

    return articles.map((article, i) => {
        const date = new Date(article.publishedAt).toDateString();
        return (
            <div className={cn.articlePreviewCard} key={i}>
                <Link className={cn.link} to={`/article/${i}`}>
                    <div className={cn.imageContainer}>
                        <img className={cn.image} src={article.urlToImage} alt="" />
                    </div>
                    <div className={cn.articlePreviewTitle}>{article.title}</div>
                </Link>
                <div className={cn.articleSubtitle}>
                    by {article.author} on {date}
                </div>
                <div className={cn.articleDescription}>{article.description}</div>
            </div>
        );
    });
}
