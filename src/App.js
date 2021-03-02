import React from 'react';
import {MainPage} from './components/mainPage/MainPage';
import axios from 'axios';
import {ArticlePage} from './components/articlePage/ArticlePage';

export const AppContext = React.createContext();

function App() {
    const url =
        'http://newsapi.org/v2/everything?q=apple&from=2021-03-01&to=2021-03-01&sortBy=popularity&apiKey=1b1391fcf4054a89b20b384d363cec28';
    const [articles, setArticles] = React.useState([]);
    const [activePage, setActivePage] = React.useState('Article Page');
    const isMainPage = activePage === 'Main Page';
    const isArticlePage = activePage === 'Article Page';

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setArticles(response.data.articles);
            })
            .catch((error) => console.error(error));
    }, []);

    const contextValue = {
        articles,
    };

    return (
        <AppContext.Provider value={contextValue}>
            {isMainPage && <MainPage />}
            {isArticlePage && <ArticlePage />}
        </AppContext.Provider>
    );
}

export default App;
