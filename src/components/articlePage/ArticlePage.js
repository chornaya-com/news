import React from 'react';
import {AppContext} from '../../App';
import * as cn from './ArticlePage.module.css';

export function ArticlePage() {
    const {selectedArticle} = React.useContext(AppContext);

    if (!selectedArticle) {
        return <div>Loading</div>;
    }

    return (
        <div className={cn.articleContainer}>
            <div className={cn.title}>{selectedArticle.title}</div>
            <div className={cn.subtitle}>
                by {selectedArticle.author} on
                {new Date(selectedArticle.publishedAt).toDateString()}
                <p>source: {selectedArticle.source.name}</p>
            </div>
            <div className={cn.contentContainer}>
                <img className={cn.image} src={selectedArticle.urlToImage} alt="" />
                <div className={cn.content}>
                    {selectedArticle.content.slice(0, 201)}
                    <div className={cn.link}>
                        <a href={selectedArticle.url} target="_blank">
                            Continue reading...
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
