import React from 'react';
import * as cn from './ArticlePreview.module.css';
import {AppContext} from '../../App';

export function ArticlePreview() {
    const {articles} = React.useContext(AppContext);

    return articles.map((article, i) => {
        const date = new Date((Date.parse(article.publishedAt))).toDateString();
        return (<div className={cn.articlePreviewCard} key={i}>
            <div className={cn.articlePreviewTitle}>{article.title}</div>
            <div className={cn.articleSubtitle}>by {article.author} on {date}</div>
            <div>{article.description}</div>
        </div>);
    });
}