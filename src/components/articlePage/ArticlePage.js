import React from 'react';
import {AppContext} from '../../App';
import * as cn from './ArticlePage.module.css';

export function ArticlePage() {
    const {articles} = React.useContext(AppContext);

    if (!articles.length) {
        return <div>Loading</div>;
    }

    return (
        <div className={cn.articleContainer}>
            <div className={cn.title}>{articles[0].title}</div>
            <div className={cn.subtitle}>
                by {articles[0].author} on {new Date(articles[0].publishedAt).toDateString()}
                <p>source: {articles[0].source.name}</p>
            </div>
            <div className={cn.contentContainer}>
                <img className={cn.image} src={articles[0].urlToImage} alt="" />
                <div className={cn.content}>
                    {articles[0].content.slice(0, 201)}
                    <div className={cn.link}>
                        <a href={articles[0].url}>Continue reading...</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
