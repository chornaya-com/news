import React from 'react';
import * as cn from './MainPage.module.css';
import {ArticlePreviewCard} from '../articlePreviewCard/ArticlePreviewCard';

export function MainPage() {
    return (
        <div className={cn.mainPage}>
            <div className={cn.mainPageHeader}>The Latest Tech News</div>
            <div className={cn.newsFeed}>
                <ArticlePreviewCard />
            </div>
        </div>
    );
}
