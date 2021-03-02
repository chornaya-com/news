import React from 'react';
import * as cn from './MainPage.module.css';
import {ArticlePreviewCard} from '../articlePreviewCard/ArticlePreviewCard';

export function MainPage() {
    return (
        <div className={cn.mainPage}>
            <div className={cn.mainPageHeader}>Latest News About Apple Inc.</div>
            <div className={cn.newsFeed}>
                <ArticlePreviewCard />
            </div>
        </div>
    );
}
