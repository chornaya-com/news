import React from "react";
import * as cn from "./MainPage.module.css";
import {ArticlePreview} from '../articlePreview/ArticlePreview';

export function MainPage() {
    return (
        <div className={cn.mainPage}>
            <div className={cn.mainPageHeader}>Latest News About Apple Inc.</div>
            <div className={cn.newsFeed}><ArticlePreview/></div>
        </div>
    )
}