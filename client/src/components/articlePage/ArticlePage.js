import React from 'react';
import {AppContext} from '../../App';
import * as cn from './ArticlePage.module.css';
import {Link, useParams} from 'react-router-dom';

export function ArticlePage() {
    const {articleIndex} = useParams();
    const {selectedArticle, openArticle} = React.useContext(AppContext);

    React.useEffect(() => {
        openArticle(articleIndex);
    }, [openArticle, articleIndex]);

    if (!selectedArticle) {
        return <div>Loading</div>;
    }

    return (
        <div>
            <Link to={`/`} className={cn.toMainPage}>
                To all news
            </Link>
            <div className={cn.articleContainer}>
                <div className={cn.title}>{selectedArticle.title}</div>
                <div className={cn.subtitle}>
                    {selectedArticle.authors.length > 0 && `by ${selectedArticle.authors}`}
                    on {new Date(selectedArticle.pubDate).toDateString()}
                    <p>source: {selectedArticle.source}</p>
                </div>
                <div className={cn.contentContainer}>
                    <img className={cn.image} src={selectedArticle.imageUrl} alt="" />
                    <div className={cn.content}>
                        {selectedArticle.content.slice(0, 221).concat('...')}
                        <div className={cn.link}>
                            <a href={selectedArticle.url} target="_blank" rel="noreferrer">
                                Continue reading...
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
